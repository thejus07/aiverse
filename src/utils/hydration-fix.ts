"use client";

export const removeBrowserExtensionAttributes = () => {
  if (typeof window === "undefined") return;

  // Remove Grammarly attributes
  const elementsWithGrammarly = document.querySelectorAll('[data-gr-ext-installed]');
  elementsWithGrammarly.forEach(element => {
    element.removeAttribute('data-gr-ext-installed');
  });

  // Remove fdprocessedid attributes (added by browser extensions)
  const elementsWithFdprocessedid = document.querySelectorAll('[fdprocessedid]');
  elementsWithFdprocessedid.forEach(element => {
    element.removeAttribute('fdprocessedid');
  });

  // Remove other common browser extension attributes
  const extensionAttributes = [
    'data-gramm',
    'data-gramm_editor',
    'data-gramm_id',
    'data-gramm_part',
    'data-gramm_editor_gramm_id',
    'data-gramm_editor_gramm_part',
    'data-gramm_editor_gramm_editor',
    'data-gramm_editor_gramm_editor_gramm_id',
    'data-gramm_editor_gramm_editor_gramm_part',
    'data-gramm_editor_gramm_editor_gramm_editor',
  ];

  extensionAttributes.forEach(attr => {
    const elements = document.querySelectorAll(`[${attr}]`);
    elements.forEach(element => {
      element.removeAttribute(attr);
    });
  });
};

export const setupHydrationFix = () => {
  if (typeof window === "undefined") return;

  // Run immediately
  removeBrowserExtensionAttributes();

  // Set up a mutation observer to handle dynamically added elements
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes') {
        const target = mutation.target as Element;
        if (target.hasAttribute('data-gr-ext-installed') || target.hasAttribute('fdprocessedid')) {
          removeBrowserExtensionAttributes();
        }
      }
    });
  });

  // Start observing
  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ['data-gr-ext-installed', 'fdprocessedid'],
    subtree: true
  });

  // Clean up function
  return () => {
    observer.disconnect();
  };
}; 