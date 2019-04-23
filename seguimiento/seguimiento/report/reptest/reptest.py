# Copyright (c) 2013, ericklopez and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe

def execute(filters=None):
	# columns, data = ["dui"], ["dui"]
	columns = [{
    	"fieldname": "dui",
    	"label": "DUI",
    	"fieldtype": "data",
    	"width": 300
	}]
	data = ["dui","0000"]	
	return columns, data
