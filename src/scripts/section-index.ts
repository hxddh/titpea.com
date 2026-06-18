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
    if (rect.top >= lowerEdge && rect.top < window.innerHeight - 24) return hashed;
  }

  return sections.reduce((active, item) => {
    const rect = item.section.getBoundingClientRect();
    return rect.top <= readingLine && rect.bottom > lowerEdge ? item : active;
  }, sections[0]);
}

function scrollToSection(index: HTMLElement, item: SectionLink) {
  setActive(collectSections(index), item.id);
  item.link.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });

  const root = document.documentElement;
  const previousScrollBehavior = root.style.scrollBehavior;
  const targetTop = item.section.getBoundingClientRect().top + window.scrollY;
  const targetMargin = Number.parseFloat(getComputedStyle(item.section).scrollMarginTop) || 0;

  root.style.scrollBehavior = "auto";
  window.scrollTo({ top: Math.max(0, targetTop - targetMargin), left: 0, behavior: "auto" });
  window.requestAnimationFrame(() => {
    root.style.scrollBehavior = previousScrollBehavior;
  });
  history.pushState(null, "", `#${encodeURIComponent(item.id)}`);
}

function mountSectionIndex(index: HTMLElement) {
  const sections = collectSections(index);
  if (sections.length === 0) return;

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
      scrollToSection(index, item);
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
