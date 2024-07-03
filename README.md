# Remove Portainer BE branding

A while ago Portainer added Business Edition branding all over the Community Edition page, urging upgrades and greying out options. It was very annoying for an open source product so I decided to do something about it. This is based on [portainer-ce-clean-layout](https://github.com/adripo/portainer-ce-clean-layout) but uses an actual script to do this for all users and not just those with a Stylus script.

## How to use?

This is designed to be used with Nginx `sub_filter` which is able to replace sections of certain pages with preprocessing before sending the page to the user, this means that it will be able to be used in a non-invasive way that will continue to work if portainer updates.

<details open>
  <summary><h3>Nginx config</h3></summary>

Here's an example of how this could be used in a classic Nginx config.

```nginx
location / {
  proxy_pass http://localhost:9000;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-Host $host;
  proxy_set_header X-Forwarded-Port $server_port;

  proxy_set_header Accept-Encoding "";
  sub_filter_once off;
  sub_filter_types text/html;
  sub_filter '<base id="base"/>' '<base id="base"/><script src="https://cdn.jsdelivr.net/gh/JSH32/portainer-remove-be-branding/remove_be.js"></script>';
}
```

</details>

<details>
  <summary><h3>Nginx Proxy Manager</h3></summary>

If using [Nginx Proxy Manager](https://nginxproxymanager.com/) you can create a custom location with the same settings and paste the relevant configuration into the advanced config section

### Advanced Config

```nginx
proxy_set_header Accept-Encoding "";
sub_filter_once off;
sub_filter_types text/html;
sub_filter '<base id="base"/>' '<base id="base"/><script src="https://cdn.jsdelivr.net/gh/JSH32/portainer-remove-be-branding/remove_be.js"></script>';
```

### Screenshot

![Custom locations config](https://raw.githubusercontent.com/JSH32/portainer-remove-be-branding/master/.github/screenshots/nginx_proxy_manager.png)

</details>
