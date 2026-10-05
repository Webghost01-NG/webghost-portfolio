"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { WGMark } from "@/components/identity/WGMark";

const navigation = [
  { number: "01", label: "WORK", href: "#work" },
  { number: "02", label: "ABOUT", href: "#about" },
  { number: "03", label: "WRITING", href: "https://medium.com/@webghost1702", external: true },
];

export function SiteNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 24);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const page = document.querySelector<HTMLElement>("[data-page-content]");
    const previousOverflow = document.body.style.overflow;
    if (page) page.inert = true;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => dialogRef.current?.querySelector<HTMLElement>("a")?.focus());

    return () => {
      if (page) page.inert = false;
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  function handleDialogKeyDown(event: React.KeyboardEvent<HTMLDialogElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu();
      return;
    }

    if (event.key !== "Tab" || !dialogRef.current) return;
    const focusable = Array.from(
      dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }

  return (
    <header className={`site-header${scrolled ? " site-header--scrolled" : ""}`}>
      <div className="site-header__inner container">
        <Link aria-label="Webghost home" className="site-brand" href="#top">
          <WGMark decorative size={27} />
          <span>WEBGHOST</span>
        </Link>

        <nav aria-label="Main navigation" className="desktop-nav">
          <Link href="#work">WORK</Link>
          <Link href="#about">ABOUT</Link>
          <a href="https://medium.com/@webghost1702" rel="noreferrer" target="_blank">WRITING</a>
        </nav>

        <a className="site-github" href="https://github.com/Webghost01-NG" rel="noreferrer" target="_blank">
          GITHUB <span aria-hidden="true">↗</span>
        </a>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          ref={triggerRef}
          type="button"
        >
          <span className="menu-toggle__label">{menuOpen ? "CLOSE" : "MENU"}</span>
          <span aria-hidden="true" className={`menu-toggle__icon${menuOpen ? " is-open" : ""}`}>
            <i /><i />
          </span>
        </button>
      </div>

      <dialog
        aria-modal="true"
        className={`mobile-menu${menuOpen ? " mobile-menu--open" : ""}`}
        id="mobile-navigation"
        onKeyDown={handleDialogKeyDown}
        ref={dialogRef}
        aria-labelledby="mobile-menu-title"
        hidden={!menuOpen}
        open={menuOpen}
      >
        <div className="mobile-menu__topbar">
          <span className="site-brand">
            <WGMark decorative size={27} />
            <span>WEBGHOST</span>
          </span>
          <button className="mobile-menu__close" onClick={closeMenu} type="button">
            CLOSE <span aria-hidden="true">×</span>
          </button>
        </div>
        <h2 className="mobile-menu__heading technical-label" id="mobile-menu-title">NAVIGATE / WEBGHOST</h2>
        <div className="mobile-menu__links">
          {navigation.map((item) => (
            item.external ? (
              <a href={item.href} key={item.number} onClick={closeMenu} rel="noreferrer" target="_blank">
                <span>{item.number}</span>{item.label}<b aria-hidden="true">↗</b>
              </a>
            ) : (
              <Link href={item.href} key={item.number} onClick={closeMenu}>
                <span>{item.number}</span>{item.label}<b aria-hidden="true">↗</b>
              </Link>
            )
          ))}
          <a href="https://github.com/Webghost01-NG" onClick={closeMenu} rel="noreferrer" target="_blank">
            <span>04</span>GITHUB<b aria-hidden="true">↗</b>
          </a>
        </div>
        <div className="mobile-menu__foot technical-label">
          <span>WEBGHOST / PROTOCOL ENGINEER</span>
          <span>LAGOS NG</span>
        </div>
      </dialog>
    </header>
  );
}
