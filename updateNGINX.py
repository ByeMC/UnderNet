print('FTP "default" to ~pi/Documents/UnderNet')
input('Press enter to continue...')

import os, sys

ftpedfile = open('default', 'rt')
print('This file is getting copied...')
filetocopy = open('/ect/nginx/sites-available/default', 'wt')

filetocopy.write(ftpedfile.read())

sys.exit()
