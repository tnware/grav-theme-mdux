# MDUX

## MATERIAL DESIGN USER EXPERIENCE

![Screenshot](screenshot.jpg)

### WIP
v 0.9.8
Material Design User Interface for GravCMS is still a work in progress. This means that everything may not work perfectly.

Feel free to let me know if you have any issues.


---

Installation

Installing the mdux theme can be done in one of two ways. Our GPM (Grav Package Manager) installation method enables you to quickly and easily install the theme with a simple terminal command, while the manual method enables you to do so via a zip file.

The theme by itself is useful, but you may have an easier time getting up and running by installing a skeleton. The mdux theme can be found in both the One-page and Blog Site which are self-contained repositories for a complete sites which include: sample content, configuration, theme, and plugins.

GPM Installation (Preferred)

The simplest way to install this theme is via the Grav Package Manager (GPM) through your system's Terminal (also called the command line). From the root of your Grav install type:

bin/gpm install mdux
This will install the mdux theme into your /user/themes directory within Grav. Its files can be found under /your/site/grav/user/themes/mdux.

Manual Installation

To install this theme, just download the zip version of this repository and unzip it under /your/site/grav/user/themes. Then, rename the folder to mdux. You can find these files either on GitHub or via GetGrav.org.

You should now have all the theme files under

/your/site/grav/user/themes/mdux
NOTE: This theme is a modular component for Grav which requires the Grav, Error and Problems plugins.
Updating

As development for the mdux theme continues, new versions may become available that add additional features and functionality, improve compatibility with newer Grav releases, and generally provide a better user experience. Updating mdux is easy, and can be done through Grav's GPM system, as well as manually.

GPM Update (Preferred)

The simplest way to update this theme is via the Grav Package Manager (GPM). You can do this with this by navigating to the root directory of your Grav install using your system's Terminal (also called command line) and typing the following:

bin/gpm update mdux
This command will check your Grav install to see if your mdux theme is due for an update. If a newer release is found, you will be asked whether or not you wish to update. To continue, type y and hit enter. The theme will automatically update and clear Grav's cache.

Manual Update

Manually updating mdux is pretty simple. Here is what you will need to do to get this done:

Delete the your/site/user/themes/mdux directory.
Download the new version of the mdux theme from either GitHub or GetGrav.org.
Unzip the zip file in your/site/user/themes and rename the resulting folder to mdux.
Clear the Grav cache. The simplest way to do this is by going to the root Grav directory in terminal and typing bin/grav clear-cache.
Note: Any changes you have made to any of the files listed under this directory will also be removed and replaced by the new set. Any files located elsewhere (for example a YAML settings file placed in user/config/themes) will remain intact.
#### NEW:

- You can now change color of the theme from within Grav Admin
