"use client";

// This script runs on the client side to fix hydration issues
if (typeof window !== "undefined") {
  // Function to remove browser extension attributes
  const removeExtensionAttributes = () => {
    // Remove Grammarly attributes
    document.querySelectorAll('[data-gr-ext-installed]').forEach(el => {
      el.removeAttribute('data-gr-ext-installed');
    });

    // Remove fdprocessedid attributes
    document.querySelectorAll('[fdprocessedid]').forEach(el => {
      el.removeAttribute('fdprocessedid');
    });

    // Remove other common extension attributes
    const extensionAttrs = [
      'data-gramm',
      'data-gramm_editor',
      'data-gramm_id',
      'data-gramm_part'
    ];

    extensionAttrs.forEach(attr => {
      document.querySelectorAll(`[${attr}]`).forEach(el => {
        el.removeAttribute(attr);
      });
    });
  };

  // Run immediately
  removeExtensionAttributes();

  // Set up observer for dynamically added elements
  const observer = new MutationObserver((mutations) => {
    let shouldRemove = false;
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes') {
        const target = mutation.target as Element;
        if (target.hasAttribute('data-gr-ext-installed') || target.hasAttribute('fdprocessedid')) {
          shouldRemove = true;
        }
      }
    });
    if (shouldRemove) {
      removeExtensionAttributes();
    }
  });

  // Start observing
  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ['data-gr-ext-installed', 'fdprocessedid'],
    subtree: true
  });

  // Clean up on page unload
  window.addEventListener('beforeunload', () => {
    observer.disconnect();
  });
} 