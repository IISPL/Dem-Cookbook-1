name             'QSA-Agent'
maintainer       'IISPL'
maintainer_email 'prafult@interfaceinfosof.com'
license          'All rights reserved'
description      'Installs/Configures QSA-Agent'
long_description IO.read(File.join(File.dirname(__FILE__), 'README.md'))
version          '0.1.0'

depends "windows"
depends "opera"
depends "firefox"
depends "java"
provides "remote_directory"