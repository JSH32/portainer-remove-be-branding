# Remove Portainer BE branding

A while ago Portainer added Business Edition branding all over their Community Edition, urging upgrades and greying out options. It was very annoying for an open source product so I decided to fix it. This is based on [portainer-ce-clean-layout](https://github.com/adripo/portainer-ce-clean-layout) but uses an actual script to do this for all users and not just those with a Stylus script.

## Screenshots

<table>
  <tr>
    <th>Regular Portainer</th>
    <th>Fix Applied</th>
  </tr>
  <tr>
    <td><img src="https://raw.githubusercontent.com/JSH32/portainer-remove-be-branding/master/.github/screenshots/with_branding.png" alt="1" width = 500px></td>
    <td><img src="https://raw.githubusercontent.com/JSH32/portainer-remove-be-branding/master/.github/screenshots/no_branding.png" alt="2" width = 500px></td>
  </tr> 
</table>

## How to use?

This is designed to be used with Nginx `sub_filter` which is able to replace sections of certain pages with preprocessing before sending the page to the user, this means that it will be able to be used in a non-invasive way that will continue to work even if portainer updates.

<details open>
  <summary><h3>Nginx config</h3></summary>

Here's an example of how this could be used in an Nginx config.

```nginx
location / {
  proxy_pass http://localhost:9000;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-Host $host;
  proxy_set_header X-Forwarded-Port $server_port;

  proxy_set_header Accept-Encoding "";
  sub_filter_once off;
  sub_filter_types text/html;
  sub_filter '<base id="base"/>' '<base id="base"/><script src="https://cdn.jsdelivr.net/gh/JSH32/portainer-remove-be-branding@02d0758cc375cae335a52ee7f5c285df921606a8/remove_be.js"></script>';
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
sub_filter '<base id="base"/>' '<base id="base"/><script src="https://cdn.jsdelivr.net/gh/JSH32/portainer-remove-be-branding@02d0758cc375cae335a52ee7f5c285df921606a8/remove_be.js"></script>';
```

### Config Screenshot

![Custom locations config](https://raw.githubusercontent.com/JSH32/portainer-remove-be-branding/master/.github/screenshots/nginx_proxy_manager.png)

</details>
