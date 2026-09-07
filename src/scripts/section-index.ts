import { sectionIndexPolicy } from "./section-index-policy";

type SectionLink = {
  id: string;
  link: HTMLAnchorElement;
  section: HTMLElement;
};

const decodeHash = (hash: string) => decodeURIComponent(hash.replace(/^#/, ""));

function collectSections(index: HTMLElement): SectionLink[] {
  return Array.from(index.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'))
    .map((link) => {
      const id = decodeHash(link.hash);
      const section = document.getElementById(id);
      return section ? { id, link, section } : null;
    })
    .filter((item): item is SectionLink => item !== null);
}

function setActive(sections: SectionLink[], id: string) {
  sections.forEach((item) => {
    if (item.id === id) {
      item.link.setAttribute("aria-current", "location");
    } else {
      item.link.removeAttribute("aria-current");
    }
  });
}

function activeSection(index: HTMLElement, sections: SectionLink[]) {
  const indexRect = index.getBoundingClientRect();
  const lowerEdge = indexRect.bottom + 2;
  const readingLine = Math.min(
    window.innerHeight - 1,
    indexRect.bottom +
      Math.max(
        sectionIndexPolicy.minimumActivationOffsetPx,
        window.innerHeight * sectionIndexPolicy.activationViewportRatio,
      ),
  );
  const hashed = sections.find((item) => item.id === decodeHash(window.location.hash));

  if (hashed) {
    const rect = hashed.section.getBoundingClientRect();
    // A section parked on the sticky edge still counts: lowerEdge is index
    // bottom + 2px, and short sections (padding-bottom: 0) sit exactly on
    // scroll-margin. Keep the hashed target while it remains in view.
    if (rect.top >= indexRect.bottom - 2 && rect.top < window.innerHeight - 24) return hashed;
  }

  return sections.reduce((active, item) => {
    const rect = item.section.getBoundingClientRect();
    return rect.top <= readingLine && rect.bottom > lowerEdge ? item : active;
  }, sections[0]);
}

function mountSectionIndex(index: HTMLElement) {
  const sections = collectSections(index);
  if (sections.length === 0) return;
  const toggle = index.querySelector<HTMLButtonElement>("[data-section-index-toggle]");
  const symbol = index.querySelector<HTMLElement>("[data-section-index-symbol]");

  toggle?.addEventListener("click", () => {
    const open = index.toggleAttribute("data-menu-open");
    toggle.setAttribute("aria-expanded", String(open));
    if (symbol) symbol.textContent = open ? "−" : "+";
  });

  let scheduled = false;
  const update = () => {
    scheduled = false;
    setActive(sections, activeSection(index, sections).id);
  };
  const scheduleUpdate = () => {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(update);
  };

  sections.forEach((item) => {
    item.link.addEventListener("click", (event) => {
      event.preventDefault();
      setActive(sections, item.id);
      index.removeAttribute("data-menu-open");
      toggle?.setAttribute("aria-expanded", "false");
      if (symbol) symbol.textContent = "+";

      const root = document.documentElement;
      const previousScrollBehavior = root.style.scrollBehavior;
      const sectionTop = item.section.getBoundingClientRect().top + window.scrollY;
      const scrollMargin = Number.parseFloat(getComputedStyle(item.section).scrollMarginTop) || 0;

      root.style.scrollBehavior = "auto";
      window.scrollTo({ top: Math.max(0, sectionTop - scrollMargin), left: 0, behavior: "auto" });
      window.requestAnimationFrame(() => {
        root.style.scrollBehavior = previousScrollBehavior;
      });
      history.pushState(null, "", `#${encodeURIComponent(item.id)}`);
      window.setTimeout(scheduleUpdate, sectionIndexPolicy.clickStabilizeDelayMs);
    });
  });

  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
  window.addEventListener("hashchange", scheduleUpdate);
  setActive(sections, sections[0].id);
  scheduleUpdate();
}

document.querySelectorAll<HTMLElement>("[data-section-index]").forEach(mountSectionIndex);
