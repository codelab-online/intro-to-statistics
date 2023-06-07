#!/usr/bin/env python

import glob
import os

files = glob.glob("./**/*", recursive=True)

for old_name in files:
    new_name = old_name.split("(")
    new_name = "_".join(new_name)
    new_name = new_name.split(")")
    new_name = "_".join(new_name)
    os.rename(old_name, new_name)
