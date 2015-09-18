name             'qsaagent'
maintainer       'IISPL'
maintainer_email 'prafult@interfaceinfosof.com'
license          'All rights reserved'
description      'Installs/Configures qsaagent2'
long_description IO.read(File.join(File.dirname(__FILE__), 'README.md'))
version          '0.1.0'

depends "windows"
depends "chrome"
depends "firefox"
depends "opera"
provides "remote_directory"
