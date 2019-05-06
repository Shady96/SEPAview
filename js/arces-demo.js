jsap = {
		"host": "mml.arces.unibo.it",
		"oauth": {
			"enable": false,
			"register": "https://localhost:8443/oauth/register",
			"tokenRequest": "https://localhost:8443/oauth/token"
		},
		"sparql11protocol": {
			"protocol": "http",
			"port": 8000,
			"query": {
				"path": "/query",
				"method": "POST",
				"format": "JSON"
			},
			"update": {
				"path": "/update",
				"method": "POST",
				"format": "JSON"
			}
		},
		"sparql11seprotocol": {
			"protocol": "ws",
			"availableProtocols": {
				"ws": {
					"port": 9000,
					"path": "/subscribe"
				},
				"wss": {
					"port": 9443,
					"path": "/secure/subscribe"
				}
			}
		},
		"graphs": {
			
		},
		"namespaces": {
			"schema": "http://schema.org/",
			"rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
			"rdfs": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
			"sosa": "http://www.w3.org/ns/sosa/",
			"qudt-1-1": "http://qudt.org/1.1/schema/qudt#",
			"qudt-unit-1-1": "http://qudt.org/1.1/vocab/unit#",
			"arces-monitor": "http://wot.arces.unibo.it/monitor#",
			"mqtt": "http://wot.arces.unibo.it/mqtt#",
			"time": "http://www.w3.org/2006/time#",
			"wgs84_pos": "http://www.w3.org/2003/01/geo/wgs84_pos#",
			"gn": "http://www.geonames.org/ontology#"
		},
		"extended": {
			"adapters": {
				"mqtt": [
					{
						"url": "eu.thethings.network",
						"port": 1883,
						"topics": [
							"swamp/devices/moisture1/up/Moisture_Signal_to_Supply_Perc",
							"swamp/devices/moisture1/up/Moisture_Supply_Voltage",
							"swamp/devices/moisture1/up/Battery_Level"
						],
						"ssl": false,
						"username": "swamp",
						"password": "ttn-account-v2.ES-s-MdMIHv8Z8HI5BR0FHzRjLD0WEmySE7cYM-Kepg"
					},
					{
						"url": "giove.arces.unibo.it",
						"port": 52877,
						"topics": [
							"#"
						],
						"ssl": false
					},
					{
						"url": "roger.wizzilab.com",
						"port": 8883,
						"topics": [
							"/applink/3BC51892/report/107/001BC50C700009BB",
							"/applink/3BC51892/report/107/001BC50C700009CD"
						],
						"ssl": false,
						"username": "ffa574972ab9",
						"password": "6e257b56172ea934d79ee1f5c2c1c7a9"
					}
				]
			},
			"regexTopics": {
				"swamp/devices/moisture1/up/Moisture_Signal_to_Supply_Perc": [
					"(?<value>\\d+.\\d++)"
				],
				"swamp/devices/moisture1/up/Moisture_Supply_Voltage": [
					"(?<value>\\d+.\\d++)"
				],
				"swamp/devices/moisture1/up/Battery_Level": [
					"(?<value>\\d+.\\d++>)"
				],
				"pepoli:6lowpan:network": [
					".[|].ID:.(\\w+).[|].(Temperature)[:].(?<value>\\d+.\\d++).[|].\\w+[:].\\d+.\\d++.[|].\\w+[:].\\d+.\\d+\n",
					".[|].ID:.(\\w+).[|].\\w+[:].\\d+.\\d++.[|].(Humidity)[:].(?<value>\\d+.\\d++).[|].\\w+[:].\\d+.\\d+\n",
					".[|].ID:.(\\w+).[|].\\w+[:].\\d+.\\d++.[|].\\w+[:].\\d+.\\d++.[|].(Pressure)[:].(?<value>\\d+.\\d+)\n"
				]
			},
			"jsonTopics": {
				"ground/lora/moisture": {
					"id": "nodeId",
					"value": "moistureValue"
				}
			},
			"places": {
				"arces-monitor:SWAMP": {
					"name": "SWAMP",
					"lat": 44.514060,
					"lon": 11.405934
				},
				"arces-monitor:Mars": {
					"name": "Mars",
					"lat": 44.489942,
					"lon": 11.356873,
					"childs": [
						"arces-monitor:Mars_Server_Room",
						"arces-monitor:Mars_Garden"
					]
				},
				"arces-monitor:Mars_Server_Room": {
					"name": "Server room (Mars)",
					"lat": 44.489942,
					"lon": 11.356873,
					"childs": [
						"arces-monitor:Mars_Server_Rack"
					]
				},
				"arces-monitor:Mars_Garden": {
					"name": "Garden (Mars)",
					"lat": 44.489942,
					"lon": 11.356873
				},
				"arces-monitor:Mars_Server_Rack": {
					"name": "Server rack (Mars)",
					"lat": 44.489942,
					"lon": 11.356873,
					"childs": [
						"arces-monitor:MML",
						"arces-monitor:SAMBA",
						"arces-monitor:GIOVE"
					]
				},
				"arces-monitor:MML": {
					"name": "MML server (Mars)",
					"lat": 44.489942,
					"lon": 11.356873,
					"childs": [
						"arces-monitor:MML_HDD",
						"arces-monitor:MML_CPU"
					]
				},
				"arces-monitor:MML_HDD": {
					"name": "MML server HDD (Mars)",
					"lat": 44.489942,
					"lon": 11.356873
				},
				"arces-monitor:MML_CPU": {
					"name": "MML server CPU (Mars)",
					"lat": 44.489942,
					"lon": 11.356873
				},
				"arces-monitor:GIOVE": {
					"name": "Jupiter server (Mars)",
					"lat": 44.489942,
					"lon": 11.356873,
					"childs": [
						"arces-monitor:GIOVE_HDD",
						"arces-monitor:GIOVE_CPU"
					]
				},
				"arces-monitor:GIOVE_HDD": {
					"name": "Jupiter server HDD (Mars)",
					"lat": 44.489942,
					"lon": 11.356873
				},
				"arces-monitor:GIOVE_CPU": {
					"name": "Jupiter server CPU (Mars)",
					"lat": 44.489942,
					"lon": 11.356873
				},
				"arces-monitor:SAMBA": {
					"name": "Samba server (Mars)",
					"lat": 44.489942,
					"lon": 11.356873,
					"childs": [
						"arces-monitor:SAMBA_HDD"
					]
				},
				"arces-monitor:SAMBA_HDD": {
					"name": "Samba server HDD (Mars)",
					"lat": 44.489942,
					"lon": 11.356873
				},
				"arces-monitor:Star": {
					"name": "Star",
					"lat": 44.492443,
					"lon": 11.330382,
					"childs": [
						"arces-monitor:Star_Garden",
						"arces-monitor:Star_ST_Office",
						"arces-monitor:Star_SEHM_Lab",
						"arces-monitor:Star_Server_Room"
					]
				},
				"arces-monitor:Star_Garden": {
					"name": "Garden (Star)",
					"lat": 44.492443,
					"lon": 11.330382
				},
				"arces-monitor:Star_ST_Office": {
					"name": "ST office (Star)",
					"lat": 44.492443,
					"lon": 11.330382
				},
				"arces-monitor:Star_SEHM_Lab": {
					"name": "SEHM lab (Star)",
					"lat": 44.492443,
					"lon": 11.330382
				},
				"arces-monitor:Star_Server_Room": {
					"name": "Server room (Star)",
					"lat": 44.492443,
					"lon": 11.330382
				},
				"arces-monitor:Ares": {
					"name": "Ares",
					"lat": 44.488132,
					"lon": 11.328875,
					"childs": [
						"arces-monitor:Ares_Server_Room"
					]
				},
				"arces-monitor:Ares_Server_Room": {
					"name": "Server room (Ares)",
					"lat": 44.488132,
					"lon": 11.328875,
					"childs": [
						"arces-monitor:ERCOLE"
					]
				},
				"arces-monitor:ERCOLE": {
					"name": "Hercules server (Ares)",
					"lat": 44.488132,
					"lon": 11.328875,
					"childs": [
						"arces-monitor:ERCOLE_HDD",
						"arces-monitor:ERCOLE_CPU"
					]
				},
				"arces-monitor:ERCOLE_HDD": {
					"name": "Hercules server HDD (Ares)",
					"lat": 44.488132,
					"lon": 11.328875
				},
				"arces-monitor:ERCOLE_CPU": {
					"name": "Hercules server CPU (Ares)",
					"lat": 44.488132,
					"lon": 11.328875
				}
			},
			"semantic-mappings": {
				"/ffa574972ab9/applink/107/001BC50C700009CD": {
					"observation": "arces-monitor:001BC50C700009CD-DASH7-Temperature",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:Star_SEHM_Lab",
					"comment": "Temperature sensor used to show the need of a new air conditioning system in SEHM lab",
					"label": "SEHM lab temperature (Star)"
				},
				"/ffa574972ab9/applink/107/001BC50C700009BB": {
					"observation": "arces-monitor:001BC50C700009BB-DASH7-Temperature",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:Star_ST_Office",
					"comment": "Temperature sensor used to show the need of a new air conditioning system in ST office",
					"label": "ST office temperature (Star)"
				},
				"5CCF7F15676D/temperature": {
					"observation": "arces-monitor:5CCF7F15676D-temperature",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:Mars_Server_Rack",
					"comment": "Temperatura zona rack sala server Toffano",
					"label": "Server rack zone temperature (Mars)"
				},
				"5CCF7F15676D/humidity": {
					"observation": "arces-monitor:5CCF7F15676D-humidity",
					"unit": "qudt-unit-1-1:Percent",
					"location": "arces-monitor:Mars_Server_Rack",
					"comment": "Umidità zona rack sala server Toffano",
					"label": "Server rack zone humidity (Mars)"
				},
				"5CCF7F1B599E/temperature": {
					"observation": "arces-monitor:5CCF7F1B599E-temperature",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:Mars_Garden",
					"comment": "Temperatura esterna Toffano",
					"label": "External temperature (Mars)"
				},
				"5CCF7F1B599E/humidity": {
					"observation": "arces-monitor:5CCF7F1B599E-humidity",
					"unit": "qudt-unit-1-1:Percent",
					"location": "arces-monitor:Mars_Garden",
					"comment": "Umidità esterna Toffano",
					"label": "External humidity (Mars)"
				},
				"5CCF7F151DC9/temperature": {
					"observation": "arces-monitor:5CCF7F151DC9-temperature",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:Mars_Server_Room",
					"comment": "Temperatura interna sala server Toffano",
					"label": "Near window temperature (Mars)"
				},
				"5CCF7F1B58AC/temperature": {
					"observation": "arces-monitor:5CCF7F1B58AC-temperature",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:Star_Server_Room",
					"comment": "Temperatura zona rack sala server Pepoli",
					"label": "Server rack zone temperature (Star)"
				},
				"5CCF7F1B58AC/humidity": {
					"observation": "arces-monitor:5CCF7F1B58AC-humidity",
					"unit": "qudt-unit-1-1:Percent",
					"location": "arces-monitor:Star_Server_Room",
					"comment": "Umidità zona rack sala server Pepoli",
					"label": "Server rack zone humidity (Star)"
				},
				"arces/servers/mars/marsamba/hd/sda/temperature": {
					"observation": "arces-monitor:ServerSambaHDDSda",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:SAMBA_HDD",
					"comment": "Temperatura Server SAMBA HDD SDA",
					"label": "SAMBA HDD SDA (Mars)"
				},
				"arces/servers/mars/marsamba/hd/sdb/temperature": {
					"observation": "arces-monitor:ServerSambaHDDSdb",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:SAMBA_HDD",
					"comment": "Temperatura Server SAMBA HDD SDB",
					"label": "SAMBA HDD SDB (Mars)"
				},
				"arces/servers/mars/giove/hd/sda/temperature": {
					"observation": "arces-monitor:ServerGioveHDDSda",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:GIOVE_HDD",
					"comment": "Temperatura Server GIOVE HDD SDA",
					"label": "JUPITER HDD SDA (Mars)"
				},
				"arces/servers/mars/giove/hd/sdb/temperature": {
					"observation": "arces-monitor:ServerGioveHDDSdb",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:GIOVE_HDD",
					"comment": "Temperatura Server GIOVE HDD SDB",
					"label": "JUPITER HDD SDB (Mars)"
				},
				"arces/servers/mars/giove/hd/sdc/temperature": {
					"observation": "arces-monitor:ServerGioveHDDSdc",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:GIOVE_HDD",
					"comment": "Temperatura Server GIOVE HDD SDC",
					"label": "JUPITER HDD SDC (Mars)"
				},
				"arces/servers/mars/giove/hd/sdd/temperature": {
					"observation": "arces-monitor:ServerGioveHDDSdd",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:GIOVE_HDD",
					"comment": "Temperatura Server GIOVE HDD SDD",
					"label": "JUPITER HDD SDD (Mars)"
				},
				"arces/servers/mars/giove/hd/sdf/temperature": {
					"observation": "arces-monitor:ServerGioveHDDSdf",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:GIOVE_HDD",
					"comment": "Temperatura Server GIOVE HDD SDF",
					"label": "JUPITER HDD SDF (Mars)"
				},
				"arces/servers/mars/giove/hd/sdg/temperature": {
					"observation": "arces-monitor:ServerGioveHDDSdg",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:GIOVE_HDD",
					"comment": "Temperatura Server GIOVE HDD SDG",
					"label": "JUPITER HDD SDG (Mars)"
				},
				"arces/servers/mars/giove/hd/sdh/temperature": {
					"observation": "arces-monitor:ServerGioveHDDSdh",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:GIOVE_HDD",
					"comment": "Temperatura Server GIOVE HDD SDH",
					"label": "JUPITER HDD SDH (Mars)"
				},
				"arces/servers/mars/giove/cpu/core-6/temperature": {
					"observation": "arces-monitor:ServerGiove6",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:GIOVE_CPU",
					"comment": "Temperatura Server GIOVE Core 6",
					"label": "JUPITER Core 6 (Mars)"
				},
				"arces/servers/mars/giove/cpu/core-5/temperature": {
					"observation": "arces-monitor:ServerGiove5",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:GIOVE_CPU",
					"comment": "Temperatura Server GIOVE Core 5",
					"label": "JUPITER Core 5 (Mars)"
				},
				"arces/servers/mars/giove/cpu/core-4/temperature": {
					"observation": "arces-monitor:ServerGiove4",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:GIOVE_CPU",
					"comment": "Temperatura Server GIOVE Core 4",
					"label": "JUPITER Core 4 (Mars)"
				},
				"arces/servers/mars/giove/cpu/core-3/temperature": {
					"observation": "arces-monitor:ServerGiove3",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:GIOVE_CPU",
					"comment": "Temperatura Server GIOVE Core 3",
					"label": "JUPITER Core 3 (Mars)"
				},
				"arces/servers/mars/giove/cpu/core-2/temperature": {
					"observation": "arces-monitor:ServerGiove2",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:GIOVE_CPU",
					"comment": "Temperatura Server GIOVE Core 2",
					"label": "JUPITER Core 2 (Mars)"
				},
				"arces/servers/mars/giove/cpu/core-1/temperature": {
					"observation": "arces-monitor:ServerGiove1",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:GIOVE_CPU",
					"comment": "Temperatura Server GIOVE Core 1",
					"label": "JUPITER Core 1 (Mars)"
				},
				"arces/servers/mars/mml/hd/sda/temperature": {
					"observation": "arces-monitor:ServerMmlHDDSda",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:MML_HDD",
					"comment": "Temperatura Server MML HDD SDA",
					"label": "MML HDD SDA (Mars)"
				},
				"arces/servers/mars/mml/hd/sdb/temperature": {
					"observation": "arces-monitor:ServerMmlHDDSdb",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:MML_HDD",
					"comment": "Temperatura Server MML HDD SDB",
					"label": "MML HDD SDB (Mars)"
				},
				"arces/servers/mars/mml/cpu/core-6/temperature": {
					"observation": "arces-monitor:ServerMml6",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:MML_CPU",
					"comment": "Temperatura Server MML Core 6",
					"label": "MML Core 6 (Mars)"
				},
				"arces/servers/mars/mml/cpu/core-5/temperature": {
					"observation": "arces-monitor:ServerMml5",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:MML_CPU",
					"comment": "Temperatura Server MML Core 5",
					"label": "MML Core 5 (Mars)"
				},
				"arces/servers/mars/mml/cpu/core-4/temperature": {
					"observation": "arces-monitor:ServerMml4",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:MML_CPU",
					"comment": "Temperatura Server MML Core 4",
					"label": "MML Core 4 (Mars)"
				},
				"arces/servers/mars/mml/cpu/core-3/temperature": {
					"observation": "arces-monitor:ServerMml3",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:MML_CPU",
					"comment": "Temperatura Server MML Core 3",
					"label": "MML Core 3 (Mars)"
				},
				"arces/servers/mars/mml/cpu/core-2/temperature": {
					"observation": "arces-monitor:ServerMml2",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:MML_CPU",
					"comment": "Temperatura Server MML Core 2",
					"label": "MML Core 2 (Mars)"
				},
				"arces/servers/mars/mml/cpu/core-1/temperature": {
					"observation": "arces-monitor:ServerMml1",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:MML_CPU",
					"comment": "Temperatura Server MML Core 1",
					"label": "MML Core 1 (Mars)"
				},
				"arces/servers/ares/ercole/cpu/core-20/temperature": {
					"observation": "arces-monitor:ServerErcoleCore20",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:ERCOLE_CPU",
					"comment": "Temperatura Server ERCOLE Core 20",
					"label": "Hercules Core 20 (Ares)"
				},
				"arces/servers/ares/ercole/cpu/core-19/temperature": {
					"observation": "arces-monitor:ServerErcoleCore19",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:ERCOLE_CPU",
					"comment": "Temperatura Server ERCOLE Core 19",
					"label": "Hercules Core 19 (Ares)"
				},
				"arces/servers/ares/ercole/cpu/core-18/temperature": {
					"observation": "arces-monitor:ServerErcoleCore18",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:ERCOLE_CPU",
					"comment": "Temperatura Server ERCOLE Core 18",
					"label": "Hercules Core 18 (Ares)"
				},
				"arces/servers/ares/ercole/cpu/core-17/temperature": {
					"observation": "arces-monitor:ServerErcoleCore17",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:ERCOLE_CPU",
					"comment": "Temperatura Server ERCOLE Core 17",
					"label": "Hercules Core 17 (Ares)"
				},
				"arces/servers/ares/ercole/cpu/core-16/temperature": {
					"observation": "arces-monitor:ServerErcoleCore16",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:ERCOLE_CPU",
					"comment": "Temperatura Server ERCOLE Core 16",
					"label": "Hercules Core 16 (Ares)"
				},
				"arces/servers/ares/ercole/cpu/core-15/temperature": {
					"observation": "arces-monitor:ServerErcoleCore15",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:ERCOLE_CPU",
					"comment": "Temperatura Server ERCOLE Core 15",
					"label": "Hercules Core 15 (Ares)"
				},
				"arces/servers/ares/ercole/cpu/core-14/temperature": {
					"observation": "arces-monitor:ServerErcoleCore14",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:ERCOLE_CPU",
					"comment": "Temperatura Server ERCOLE Core 14",
					"label": "Hercules Core 14 (Ares)"
				},
				"arces/servers/ares/ercole/cpu/core-13/temperature": {
					"observation": "arces-monitor:ServerErcoleCore13",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:ERCOLE_CPU",
					"comment": "Temperatura Server ERCOLE Core 13",
					"label": "Hercules Core 13 (Ares)"
				},
				"arces/servers/ares/ercole/cpu/core-12/temperature": {
					"observation": "arces-monitor:ServerErcoleCore12",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:ERCOLE_CPU",
					"comment": "Temperatura Server ERCOLE Core 12",
					"label": "Hercules Core 12 (Ares)"
				},
				"arces/servers/ares/ercole/cpu/core-11/temperature": {
					"observation": "arces-monitor:ServerErcoleCore11",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:ERCOLE_CPU",
					"comment": "Temperatura Server ERCOLE Core 11",
					"label": "Hercules Core 11 (Ares)"
				},
				"arces/servers/ares/ercole/cpu/core-10/temperature": {
					"observation": "arces-monitor:ServerErcoleCore10",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:ERCOLE_CPU",
					"comment": "Temperatura Server ERCOLE Core 10",
					"label": "Hercules Core 10 (Ares)"
				},
				"arces/servers/ares/ercole/cpu/core-9/temperature": {
					"observation": "arces-monitor:ServerErcoleCore9",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:ERCOLE_CPU",
					"comment": "Temperatura Server ERCOLE Core 9",
					"label": "Hercules Core 9 (Ares)"
				},
				"arces/servers/ares/ercole/cpu/core-8/temperature": {
					"observation": "arces-monitor:ServerErcoleCore8",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:ERCOLE_CPU",
					"comment": "Temperatura Server ERCOLE Core 8",
					"label": "Hercules Core 8 (Ares)"
				},
				"arces/servers/ares/ercole/cpu/core-7/temperature": {
					"observation": "arces-monitor:ServerErcoleCore7",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:ERCOLE_CPU",
					"comment": "Temperatura Server ERCOLE Core 7",
					"label": "Hercules Core 7 (Ares)"
				},
				"arces/servers/ares/ercole/cpu/core-6/temperature": {
					"observation": "arces-monitor:ServerErcoleCore6",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:ERCOLE_CPU",
					"comment": "Temperatura Server ERCOLE Core 6",
					"label": "Hercules Core 6 (Ares)"
				},
				"arces/servers/ares/ercole/cpu/core-5/temperature": {
					"observation": "arces-monitor:ServerErcoleCore5",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:ERCOLE_CPU",
					"comment": "Temperatura Server ERCOLE Core 5",
					"label": "Hercules Core 5 (Ares)"
				},
				"arces/servers/ares/ercole/cpu/core-4/temperature": {
					"observation": "arces-monitor:ServerErcoleCore4",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:ERCOLE_CPU",
					"comment": "Temperatura Server ERCOLE Core 4",
					"label": "Hercules Core 4 (Ares)"
				},
				"arces/servers/ares/ercole/cpu/core-3/temperature": {
					"observation": "arces-monitor:ServerErcoleCore3",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:ERCOLE_CPU",
					"comment": "Temperatura Server ERCOLE Core 3",
					"label": "Hercules Core 3 (Ares)"
				},
				"arces/servers/ares/ercole/cpu/core-2/temperature": {
					"observation": "arces-monitor:ServerErcoleCore2",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:ERCOLE_CPU",
					"comment": "Temperatura Server ERCOLE Core 2",
					"label": "Hercules Core 2 (Ares)"
				},
				"arces/servers/ares/ercole/cpu/core-1/temperature": {
					"observation": "arces-monitor:ServerErcoleCore1",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:ERCOLE_CPU",
					"comment": "Temperatura Server ERCOLE Core 1",
					"label": "Hercules Core 1 (Ares)"
				},
				"arces/servers/ares/ercole/hd/sda/temperature": {
					"observation": "arces-monitor:ServerErcoleHDDSda",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:ERCOLE_HDD",
					"comment": "Temperatura Server ERCOLE HDD SDA",
					"label": "Hercules HDD SDA (Ares)"
				},
				"arces/servers/ares/ercole/hd/sdb/temperature": {
					"observation": "arces-monitor:ServerErcoleHDDSdb",
					"unit": "qudt-unit-1-1:DegreeCelsius",
					"location": "arces-monitor:ERCOLE_HDD",
					"comment": "Temperatura Server ERCOLE HDD SDB",
					"label": "Hercules HDD SDB (Ares)"
				},
				"swamp/devices/moisture1/up/Moisture_Signal_to_Supply_Perc": {
					"observation": "arces-monitor:swamp_devices_moisture1_up_Moisture_Signal_to_Supply_Perc",
					"unit": "qudt-unit-1-1:Percent",
					"location": "arces-monitor:SWAMP",
					"comment": "Soil moisture sensor provided by SWAMP brasilian partner. The node communicates with LoRa.",
					"label": "Soil moisture (SWAMP sensor)"
				},
				"swamp/devices/moisture1/up/Moisture_Supply_Voltage": {
					"observation": "arces-monitor:swamp_devices_moisture1_up_Moisture_Supply_Voltage",
					"unit": "qudt-unit-1-1:Volt",
					"location": "arces-monitor:SWAMP",
					"comment": "Soil moisture sensor provided by SWAMP brasilian partner. The node communicates with LoRa.",
					"label": "Sensor supply voltage (SWAMP sensor)"
				},
				"swamp/devices/moisture1/up/Battery_Level": {
					"observation": "arces-monitor:swamp_devices_moisture1_up_Battery_Level",
					"unit": "qudt-unit-1-1:Volt",
					"location": "arces-monitor:SWAMP",
					"comment": "Soil moisture sensor provided by SWAMP brasilian partner. The node communicates with LoRa.",
					"label": "Battery voltage (SWAMP sensor)"
				}
			}
		},
		"updates": {
			"DELETE_ALL": {
				"sparql": "WITH <http://wot.arces.unibo.it/monitor/mqtt> DELETE {?s ?p ?o} WHERE {?s ?p ?o}"
			},
			"DELETE_ALL_LOGS": {
				"sparql": "WITH <http://wot.arces.unibo.it/monitor/mqtt/log> DELETE {?s ?p ?o} WHERE {?s ?p ?o}"
			},
			"DELETE_ALL_MESSAGES": {
				"sparql": "WITH <http://wot.arces.unibo.it/monitor/mqtt/message> DELETE {?s ?p ?o} WHERE {?s ?p ?o}"
			},
			"REMOVE_PLACE": {
				"sparql": "WITH <http://wot.arces.unibo.it/monitor/mqtt> DELETE {?place rdf:type schema:Place; schema:name ?name ;  schema:GeoCoordinates ?coordinate . ?coordinate schema:latitude ?lat ; schema:longitude ?lon} WHERE {?place rdf:type schema:Place; schema:name ?name ;  schema:GeoCoordinates ?coordinate . ?coordinate schema:latitude ?lat ; schema:longitude ?lon}",
				"forcedBindings": {
					"place": {
						"type": "uri",
						"value": "arces-monitor:Mars"
					}
				}
			},
			"ADD_PLACE": {
				"sparql": "INSERT {GRAPH <http://wot.arces.unibo.it/monitor/mqtt> {?place rdf:type schema:Place; schema:name ?name ;  schema:GeoCoordinates _:coordinate . _:coordinate schema:latitude ?lat ; schema:longitude ?lon}} WHERE {}",
				"forcedBindings": {
					"place": {
						"type": "uri",
						"value": "arces-monitor:Mars"
					},
					"name": {
						"type": "literal",
						"value": "Mars"
					},
					"lat": {
						"type": "literal",
						"value": "44.489664",
						"datatype": "xsd:decimal"
					},
					"lon": {
						"type": "literal",
						"value": "11.357023",
						"datatype": "xsd:decimal"
					}
				}
			},
			"LINK_PLACES": {
				"sparql": "INSERT DATA { GRAPH <http://wot.arces.unibo.it/monitor/mqtt> {?root schema:containsPlace ?child . ?child schema:containedInPlace ?root }}",
				"forcedBindings": {
					"root": {
						"type": "uri",
						"value": "arces-monitor:rootPlace"
					},
					"child": {
						"type": "uri",
						"value": "arces-monitor:childPlace"
					}
				}
			},
			"DELETE_LINK_PLACES": {
				"sparql": "DELETE DATA { GRAPH <http://wot.arces.unibo.it/monitor/mqtt> {?root schema:containsPlace ?child . ?child schema:containedInPlace ?root }}",
				"forcedBindings": {
					"root": {
						"type": "uri",
						"value": "arces-monitor:rootPlace"
					},
					"child": {
						"type": "uri",
						"value": "arces-monitor:childPlace"
					}
				}
			},
			"MQTT_MESSAGE": {
				"sparql": "WITH <http://wot.arces.unibo.it/monitor/mqtt/message> DELETE {?oldMessage rdf:type mqtt:Message ; mqtt:hasValue ?oldValue ; mqtt:hasTopic ?topic ; mqtt:hasBroker ?broker ; mqtt:timestamp ?oldTimestamp} INSERT {_:message rdf:type mqtt:Message ; mqtt:hasValue ?value ; mqtt:hasTopic ?topic ; mqtt:hasBroker ?broker ; mqtt:timestamp ?timestamp} WHERE {OPTIONAL{?oldMessage rdf:type mqtt:Message ; mqtt:hasValue ?oldValue ; mqtt:hasTopic ?topic ; mqtt:hasBroker ?broker ; mqtt:timestamp ?oldTimestamp} . BIND(now() AS ?timestamp)}",
				"forcedBindings": {
					"value": {
						"type": "literal",
						"value": "mqttValueXYZ"
					},
					"topic": {
						"type": "literal",
						"value": "mqttTopicXYZ"
					},
					"broker": {
						"type": "literal",
						"value": "tcp://giove.arces.unibo.it:52887"
					}
				}
			},
			"LOG_QUANTITY": {
				"sparql": "INSERT {GRAPH <http://wot.arces.unibo.it/monitor/mqtt/log/2019> {_:result sosa:isResultOf ?observation ; qudt-1-1:numericValue ?value ; time:inXSDDateTimeStamp ?timestamp}} WHERE {BIND(now() AS ?timestamp)}",
				"forcedBindings": {
					"observation": {
						"type": "uri",
						"value": "arces-monitor:ObservationXYZ"
					},
					"value": {
						"type": "literal",
						"value": "1234",
						"datatype": "xsd:decimal"
					}
				}
			},
			"REMOVE_OBSERVATION": {
				"sparql": "WITH <http://wot.arces.unibo.it/monitor/mqtt> DELETE {?observation rdf:type sosa:Observation ; rdfs:label ?label ; rdfs:comment ?comment ; sosa:hasFeatureOfInterest ?location ; arces-monitor:hasMqttTopic ?topic ; sosa:hasResult ?quantity . ?quantity rdf:type qudt-1-1:QuantityValue ; qudt-1-1:unit ?unit ; qudt-1-1:numericValue ?value} WHERE {?observation rdf:type sosa:Observation ; rdfs:label ?label ; rdfs:comment ?comment ; sosa:hasFeatureOfInterest ?location ; arces-monitor:hasMqttTopic ?topic ; sosa:hasResult ?quantity . ?quantity rdf:type qudt-1-1:QuantityValue ; qudt-1-1:unit ?unit ; qudt-1-1:numericValue ?value}",
				"forcedBindings": {
					"observation": {
						"type": "uri",
						"value": "arces-monitor:ObservationXYZ"
					}
				}
			},
			"ADD_OBSERVATION": {
				"sparql": "INSERT {GRAPH <http://wot.arces.unibo.it/monitor/mqtt> {?observation rdf:type sosa:Observation ; rdfs:label ?label ; rdfs:comment ?comment ; sosa:hasFeatureOfInterest ?location ; arces-monitor:hasMqttTopic ?topic ; sosa:hasResult _:quantity . _:quantity rdf:type qudt-1-1:QuantityValue ; qudt-1-1:unit ?unit ; qudt-1-1:numericValue 'NaN'}} WHERE {}",
				"forcedBindings": {
					"observation": {
						"type": "uri",
						"value": "arces-monitor:ObservationXYZ"
					},
					"comment": {
						"type": "literal",
						"value": "This is an observation"
					},
					"label": {
						"type": "literal",
						"value": "The observation XYZ"
					},
					"location": {
						"type": "uri",
						"value": "arces-monitor:Mars"
					},
					"topic": {
						"type": "literal",
						"value": "mqttTopicXYZ"
					},
					"unit": {
						"type": "uri",
						"value": "qudt-unit-1-1:DegreeCelsius"
					}
				}
			},
			"UPDATE_OBSERVATION_VALUE": {
				"sparql": "WITH <http://wot.arces.unibo.it/monitor/mqtt> DELETE { ?quantity qudt-1-1:numericValue ?oldValue . ?observation sosa:resultTime ?oldTime } INSERT { ?quantity qudt-1-1:numericValue ?value . ?observation sosa:resultTime ?now } WHERE { ?observation rdf:type sosa:Observation ; sosa:hasResult ?quantity . OPTIONAL { ?observation sosa:resultTime ?oldTime} . OPTIONAL {?quantity qudt-1-1:numericValue ?oldValue } BIND(now() AS ?now) }",
				"forcedBindings": {
					"observation": {
						"type": "uri",
						"value": "arces-monitor:ObservationXYZ"
					},
					"value": {
						"type": "literal",
						"datatype": "xsd:decimal",
						"value": "12345.67890"
					}
				}
			}
		},
		"queries": {
			"LOG_QUANTITY" : {
				"sparql" : "SELECT * WHERE {GRAPH <http://wot.arces.unibo.it/monitor/mqtt/log/2019> {?result sosa:isResultOf ?observation ; qudt-1-1:numericValue ?value; time:inXSDDateTimeStamp ?timestamp} FILTER (xsd:dateTime(?timestamp) > ?from && xsd:dateTime(?timestamp) < ?to)} ORDER BY ?timestamp",
				"forcedBindings" : {
					"from" : {
						"datatype" : "xsd:dateTime",
						"type" : "literal",
						"value" : "2018-01-01T00:00:00"
					},
					"to" : {
						"datatype" : "xsd:dateTime",
						"type" : "literal",
						"value" : "2018-01-01T00:00:00"
					},
					"observation" : {
						"type" : "uri",
						"value" : "arces-monitor:ObservationXYZ"
					}
				}
			},
			"PLACES": {
				"sparql": "SELECT * WHERE {?place rdf:type schema:Place; schema:name ?name ;  schema:GeoCoordinates ?coordinate . ?coordinate schema:latitude ?lat ; schema:longitude ?long}"
			},
			"NO_CHILD": {
				"sparql": "SELECT * where {?root rdf:type schema:Place ; schema:name ?name . FILTER NOT EXISTS{?child schema:containedInPlace ?root}}"
			},
			"MAP_PLACES": {
				"sparql": "SELECT * WHERE {?root rdf:type schema:Place; schema:name ?name ;  schema:GeoCoordinates ?coordinate . ?coordinate schema:latitude ?lat ; schema:longitude ?long.  FILTER NOT EXISTS{?root schema:containedInPlace ?place}}"
			},
			"CREATE_TREE": {
				"sparql": "SELECT * where { ?observation rdf:type sosa:Observation. ?child rdf:type schema:Place . ?root schema:containsPlace ?child }",
				"forcedBindings": {
					"root": {
						"type": "uri",
						"value": "arces-monitor:Mars"
					}
				}
			},
			"CONTAINED_PLACES": {
				"sparql": "SELECT * where { ?root schema:containsPlace ?child . ?child schema:name ?childName}",
				"forcedBindings": {
					"root": {
						"type": "uri",
						"value": "arces-monitor:Mars"
					}
				}
			},
			"ROOT_PLACES": {
				"sparql": "SELECT * where { ?root rdf:type schema:Place .  FILTER NOT EXISTS{?root schema:containedInPlace ?place} }"
			},
			"OBSERVATIONS_TOPICS": {
				"sparql": "SELECT * WHERE {?observation rdf:type sosa:Observation ; arces-monitor:hasMqttTopic ?topic}"
			},
			"OBSERVATIONS": {
				"sparql": "SELECT * WHERE {?observation rdf:type sosa:Observation ; rdfs:label ?label ; sosa:hasResult ?quantity ; sosa:hasFeatureOfInterest ?location . ?location schema:name ?name . ?quantity rdf:type qudt-1-1:QuantityValue ; qudt-1-1:unit ?unit . OPTIONAL {?quantity qudt-1-1:numericValue ?value} . OPTIONAL {?observation sosa:resultTime ?timestamp}}"
			},
			"OBSERVATIONS_BY_LOCATION": {
				"sparql": "SELECT * WHERE { ?observation sosa:hasFeatureOfInterest ?location ; rdf:type sosa:Observation ; rdfs:label ?label ; sosa:hasResult ?quantity . ?quantity rdf:type qudt-1-1:QuantityValue ; qudt-1-1:unit ?unit . OPTIONAL {?quantity qudt-1-1:numericValue ?value} . OPTIONAL {?observation sosa:resultTime ?timestamp}}",
				"forcedBindings": {
					"location": {
						"type": "uri",
						"value": "arces-monitor:Mars"
					}
				}
			},
			"OBSERVATIONS_BY_UNIT": {
				"sparql": "SELECT * WHERE {?observation rdf:type sosa:Observation ; rdfs:label ?label ; sosa:hasFeatureOfInterest ?location ; sosa:hasResult ?quantity . ?quantity rdf:type qudt-1-1:QuantityValue ; qudt-1-1:unit ?unit . OPTIONAL {?quantity qudt-1-1:numericValue ?value} . OPTIONAL {?observation sosa:resultTime ?timestamp}}",
				"forcedBindings": {
					"unit": {
						"type": "uri",
						"value": "qudt-unit-1-1:DegreeCelsius"
					}
				}
			},
			"ALL_VALUES": {
				"sparql": "SELECT * WHERE {?observation rdf:type sosa:Observation ; rdfs:label ?label ; sosa:hasFeatureOfInterest ?location ; sosa:hasResult ?quantity . ?quantity rdf:type qudt-1-1:QuantityValue ; qudt-1-1:unit ?unit OPTIONAL {?quantity qudt-1-1:numericValue ?value} . OPTIONAL {?observation sosa:resultTime ?timestamp}}",
				"forcedBindings": {
					"observation": {
						"type": "uri",
						"value": "arces-monitor:ObservationXYZ"
					}
				}
			},
			"MQTT_TOPICS_COUNT": {
				"sparql": "SELECT (COUNT(DISTINCT ?topic) AS ?topics) WHERE {?message rdf:type mqtt:Message ; mqtt:hasTopic ?topic}"
			},
			"MQTT_TOPICS": {
				"sparql": "SELECT DISTINCT * WHERE {?message rdf:type mqtt:Message ; mqtt:hasTopic ?topic ; mqtt:hasBroker ?broker}"
			},
			"MQTT_TOPIC_VALUE": {
				"sparql": "SELECT * WHERE {?message rdf:type mqtt:Message ; mqtt:hasTopic ?topic; mqtt:hasValue ?value}",
				"forcedBindings": {
					"topic": {
						"type": "literal",
						"value": "mqttTopicXYZ"
					}
				}
			},
			"MQTT_MESSAGES": {
				"sparql": "SELECT * WHERE {?message rdf:type mqtt:Message ; mqtt:hasValue ?value ; mqtt:hasTopic ?topic ; mqtt:hasBroker ?broker;  mqtt:timestamp ?timestamp}",
				"graphs": {
					"default-graph-uri": "http://wot.arces.unibo.it/monitor/mqtt/message",
					"named-graph-uri": "http://wot.arces.unibo.it/monitor/mqtt/message"
				}
			},
			"HISTORICAL_TRIPLES" : {
				"sparql" : "SELECT (COUNT(?log) AS ?count) WHERE {GRAPH <http://wot.arces.unibo.it/monitor/mqtt/log/2019> {?log ?x ?y}}"
			},
			"LIVE_TRIPLES" : {
				"sparql" : "SELECT (COUNT(?log) AS ?count) WHERE {GRAPH <http://wot.arces.unibo.it/monitor/mqtt> {?log ?x ?y}}"
			},
			"OBSERVATIONS_COUNT" : {
				"sparql" : "SELECT (COUNT(?log) AS ?count) WHERE {GRAPH <http://wot.arces.unibo.it/monitor/mqtt> {?log rdf:type sosa:Observation}}"
			},
			"PLACES_COUNT" : {
				"sparql" : "SELECT (COUNT(?log) AS ?count) WHERE {GRAPH <http://wot.arces.unibo.it/monitor/mqtt> {?log rdf:type schema:Place}}"
			}
		}
	}