(function () {
  const applyStyles = () => {
    const url = window.location.href;

    // Styles to match based on URL patterns
    const styles = [
      {
        pattern: /.*/,
        selectors: [
          "#sideview button:has(+ nav)",
          '#sideview nav[aria-label="Settings"] li[aria-label="Users"] li:has(a[href="#!/roles"])',
          '#sideview nav[aria-label="Settings"] li[aria-label="Authentication logs"]:has(a[href="#!/auth-logs"])',
          '#sideview li[aria-label="Cluster"] li[aria-label="Security constraints"]',
        ],
      },
      {
        pattern: /.*\/#!\/wizard\/endpoints($|\/create\?.*$)/,
        selectors: [
          "#content-wrapper div.app-react-components-BoxSelector-BoxSelectorItem-module__business",
        ],
      },
      {
        pattern: /.*\/#!\/endpoints\/[0-9]+\/access($|\?.*$)/,
        selectors: [
          "#content-wrapper div.form-group:has(be-feature-indicator)",
        ],
      },
      {
        pattern: /.*\/#!\/registries.*/,
        selectors: ["#content-wrapper a.be-indicator"],
      },
      {
        pattern: /.*\/#!\/settings.*/,
        selectors: [
          "#content-wrapper div.form-group:has(a.be-indicator)",
          "#content-wrapper div.be-indicator-container",
          "#content-wrapper div.app-react-components-BoxSelector-BoxSelectorItem-module__business",
        ],
      },
      {
        pattern: /.*\/#!\/settings\/auth.*/,
        selectors: [
          "#content-wrapper div.app-react-components-BoxSelector-BoxSelectorItem-module__business",
          '#content-wrapper ldap-settings label[for="ldap_url"] button.limited-be',
          "#content-wrapper ldap-settings ldap-custom-user-search > div.form-group div.col-sm-12:has(be-feature-indicator)",
          "#content-wrapper ldap-settings ldap-custom-group-search > rd-widget div.form-group:has(pr-icon[icon=\"'briefcase'\"])",
          "#content-wrapper ldap-settings ldap-custom-group-search > div.form-group div.col-sm-12:has(be-feature-indicator)",
          "#content-wrapper ldap-settings ldap-custom-admin-group",
          "#content-wrapper ldap-settings ldap-settings-test-login",
          "#content-wrapper oauth-settings div.form-group:has(a.be-indicator)",
        ],
      },
      {
        pattern: /.*\/#!\/[0-9]+\/docker\/stacks\/newstack($|.*$)/,
        selectors: [
          "#content-wrapper div:has(> div.form-section-title a.be-indicator)",
          "#content-wrapper div > div.form-section-title:has(a.be-indicator)",
          "#content-wrapper tr:has(div.form-group a.be-indicator)",
        ],
      },
      {
        pattern: /.*\/#!\/[0-9]+\/docker\/containers\/new($|.*$)/,
        selectors: [
          "#content-wrapper div:has(> div.form-group a.be-indicator)",
        ],
      },
      {
        pattern: /.*\/#!\/[0-9]+\/docker\/containers\/[0-9a-fA-F]{64}.*/,
        selectors: ["#content-wrapper tr:has(div.form-group a.be-indicator)"],
      },
      {
        pattern: /.*\/#!\/[0-9]+\/docker\/host\/feat-config.*/,
        selectors: [
          "#content-wrapper div.form-group div.col-sm-12:has(a.be-indicator)",
          "#content-wrapper div.form-section-title:has(+ div.form-group div.col-sm-12:only-child a.be-indicator)",
        ],
      },
      {
        pattern: /.*\/#!\/[0-9]+\/docker\/host\/registries.*/,
        selectors: ["#content-wrapper be-feature-indicator"],
      },
      {
        pattern: /.*\/#!\/[0-9]+\/kubernetes\/pools\/new($|.*$)/,
        selectors: [
          "#content-wrapper div.form-group:has(label a.be-indicator)",
          "#content-wrapper div.form-section-title:has(+ div.form-group + div.form-section-title + storage-class-switch a.be-indicator)",
          "#content-wrapper div.form-section-title + div.form-group:has(+ div.form-section-title + storage-class-switch a.be-indicator)",
          "#content-wrapper div.form-section-title + div.form-group + div.form-section-title:has(+ storage-class-switch a.be-indicator)",
        ],
      },
      {
        pattern: /.*\/#!\/[0-9]+\/kubernetes\/deploy($|\?.*$)/,
        selectors: [
          "#content-wrapper div.form-group:has(label a.be-indicator)",
        ],
      },
      {
        pattern: /.*\/#!\/[0-9]+\/kubernetes\/cluster\/configure.*/,
        selectors: [
          "#content-wrapper div.form-section-title:has(+ div.form-group por-switch-field[name=\"'disableSysctlSettingForRegularUsers'\"] a.be-indicator)",
          "#content-wrapper div.form-section-title + div.form-group:has(por-switch-field[name=\"'disableSysctlSettingForRegularUsers'\"] a.be-indicator)",
          "#content-wrapper div:has(> por-switch-field[name=\"'restrictStandardUserIngressW'\"] a.be-indicator)",
          "#content-wrapper div:has(+ div > por-switch-field[name=\"'resource-over-commit-switch'\"] a.be-indicator)",
          "#content-wrapper div + div:has(> por-switch-field[name=\"'resource-over-commit-switch'\"] a.be-indicator)",
        ],
      },
    ];

    const hideElements = (selectors) => {
      selectors.forEach((selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el) => {
          el.style.display = "none";
        });
      });
    };

    styles.forEach((style) => {
      if (style.pattern.test(url)) {
        hideElements(style.selectors);
      }
    });
  };

  // Apply styles when the document is ready
  document.addEventListener("DOMContentLoaded", applyStyles);
  // Apply styles on URL change (SPA)
  window.addEventListener("popstate", applyStyles);
  window.addEventListener("pushState", applyStyles);
})();
