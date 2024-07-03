# Remove Portainer BE branding

A while ago Portainer added Business Edition branding all over the Community Edition page, urging upgrades and greying out options. It was very annoying for an open source product so I decided to do something about it. This is based on [portainer-ce-clean-layout](https://github.com/adripo/portainer-ce-clean-layout) but uses an actual script to do this for all users and not just those with a Stylus script.

## How to install

This is designed to be used with Nginx `sub_filter` which is able to replace sections of certain pages with preprocessing before sending the page to the user.
