export const serviceList = [
    {
        "id": "service_s1",
        "title": "Visual Analytics",
        "developer": "PARITY",
        "short_description": "Visual Dashboard for data originating from DT Service.",
        "full_description": "Present real time data related to electricity demand in buildings and EV charging stations in a user-friendly way. Focus is placed on spatial representation. Demand centres are represented as points on a map and users can access data through cards on the map and demand centre specific dashboards.\n" +
            "The visual analytics engine has been used in DTs for Electricity Demand centers.",
        "service_links": [
            {
                "name": "Service Page",
                "link": "http://165.227.169.94/"
            }
        ],
        "github_links": [],
        "aiod_links": [
            {
                "name": "AI Asset",
                "link": "https://www.ai4europe.eu/research/ai-catalog/i-nergy-electrical-digital-twins-tool-docker-container-format"
            }
        ],
        "category": "General",
        "image": {
            "name": "Visual Analytics Image",
            "source": process.env.PUBLIC_URL + "/images/services/service_s1.png"
        },
        "demoVideo": "",
        "screenshots": [
            {"name": "Charging Capacity", "source": process.env.PUBLIC_URL + "/images/screenshots/service_s1/Charging Capacity.png"},
            {"name": "Consumption Graph", "source": process.env.PUBLIC_URL + "/images/screenshots/service_s1/Consumption Graph.png"},
            {"name": "General Info", "source": process.env.PUBLIC_URL + "/images/screenshots/service_s1/General Info.png"},
            {"name": "Temperature", "source": process.env.PUBLIC_URL + "/images/screenshots/service_s1/Temperature.png"},
            {
                "name": "Voltage Measurement Graph",
                "source": process.env.PUBLIC_URL + "/images/screenshots/service_s1/Voltage Measurement Graph.png"
            },
        ]
    },
    {
        "id": "service_s2",
        "title": "DT Service",
        "developer": "PARITY",
        "short_description": "Service to collect data from electricity consumption metering devices via WebSocket Protocol.",
        "full_description": "The service provides real time data related to electricity consumption centres and specifically EV charging stations via WebSocket connection protocol. The objective of the deployment is to help property owners efficiently manage EV charging stations. The digital service also collects data related to electricity demand assets. Based on this data, the service will integrate variable pricing to incentivize drivers at specific intervals. For example, the cost per charge session will be lower for time intervals with lower expected charging station occupancy.",
        "service_links": [
            {"name": "Service Page", "link": "http://165.227.169.94/"}
        ],
        "github_links": [],
        "aiod_links": [{
            "name": "AI Asset",
            "link": "https://www.ai4europe.eu/research/ai-catalog/i-nergy-electrical-digital-twins-tool-docker-container-format"
        }],
        "category": "I-ENEF",
        "image": {
            "name": "DT Service Image",
            "source": process.env.PUBLIC_URL + "/images/services/service_s2.png"
        },
        "demoVideo": "",
        "screenshots": [
            {"name": "Add Meter", "source": process.env.PUBLIC_URL + "/images/screenshots/service_s2/add_meter_dt.png"},
            {"name": "Asset Page summary", "source": process.env.PUBLIC_URL + "/images/screenshots/service_s2/asset_page_Summary.png"},
            {"name": "Homepage", "source": process.env.PUBLIC_URL + "/images/screenshots/service_s2/homepage_dt.png"},
            {"name": "Station Page", "source": process.env.PUBLIC_URL + "/images/screenshots/service_s2/station_page_dt.png"},
        ]
    },
    {
        "id": "service_s3",
        "title": "EPCckr",
        "developer": "CARTIF",
        "short_description": "EPC Checker service.",
        "full_description": "The service is based on the Energy Performance Certificates XML database from Asturias region (in the North of Spain), and it checks data from different parameters in the XML (either an uploaded file or selecting one from the database) according to different approaches, depending on the type of value. It is available both in English and Spanish.",
        "service_links": [
            {
                "name": "Service Page",
                "link": "https://tools.cartif.es/inergy-epc-checker/#/"
            }
        ],
        "github_links": [],
        "aiod_links": [
            {
                "name": "Link",
                "link": "coming soon"
            }
        ],
        "category": "I-ENEF",
        "image": {
            "name": "EPCckr Image",
            "source": process.env.PUBLIC_URL + "/images/services/service_s3.png"
        },
        "demoVideo": "https://youtu.be/ToKApVxLxik",
        "screenshots": [
            {"name": "EPCckr - checked EPC", "source": process.env.PUBLIC_URL + "/images/screenshots/service_s3/EPCckr - checked EPC.png"},
            {
                "name": "EPCckr - checked EPC details",
                "source": process.env.PUBLIC_URL + "/images/screenshots/service_s3/EPCckr - checked EPC details.png"
            },
            {"name": "EPCckr - Login", "source": process.env.PUBLIC_URL + "/images/screenshots/service_s3/EPCckr - Login.png"},
            {
                "name": "EPCckr - selection screen",
                "source": process.env.PUBLIC_URL + "/images/screenshots/service_s3/EPCckr - selection screen.png"
            },
        ]
    },
    {
        "id": "service_s4",
        "title": "EPCedv",
        "developer": "CARTIF",
        "short_description": "Energy Demand Visualisation service.",
        "full_description": "The service contains three tools: EPC (Energy Performance Certificate) and Estimated Energy Demand Viewer, Asturias Cadastre data analysis, and Asturias Energy Performance Certificates data analysis; and is available both in English and Spanish, as it is developed for the region of Asturias, at the North of Spain.",
        "service_links": [
            {
                "name": "Service Page",
                "link": "https://tools.cartif.es/inergy-visualizador/#/"
            }
        ],
        "github_links": [],
        "aiod_links": [
            {
                "name": "AI Asset",
                "link": "https://www.ai4europe.eu/research/ai-catalog/energy-demand-visualisation-service"
            }
        ],
        "category": "I-ENEF",
        "image": {
            "name": "EPCedv Image",
            "source": process.env.PUBLIC_URL + "/images/services/service_s4.png"
        },
        "demoVideo": "https://youtu.be/vyoeN4QVYmc",
        "screenshots": [
            {
                "name": "EPCedv - Cadaster data analysis",
                "source": process.env.PUBLIC_URL + "/images/screenshots/service_s4/EPCedv-Cadaster_data_analysis.png"
            },
            {
                "name": "EPCedv - Detail of a building EPC",
                "source": process.env.PUBLIC_URL + "/images/screenshots/service_s4/EPCedv - Detail of a building EPC.png"
            },
            {
                "name": "EPCedv - EPCs data analysis",
                "source": process.env.PUBLIC_URL + "/images/screenshots/service_s4/EPCedv - EPCs data analysis.png"
            },
            {
                "name": "EPCedv - Estimated Demand Viewer, building scale",
                "source": process.env.PUBLIC_URL + "/images/screenshots/service_s4/EPCedv - Estimated Demand Viewer, building scale.png"
            },
            {"name": "EPCedv - Login", "source": process.env.PUBLIC_URL + "/images/screenshots/service_s4/EPCedv - Login.png"},
            {
                "name": "EPCedv - EPC Viewer, municipality scale",
                "source": process.env.PUBLIC_URL + "/images/screenshots/service_s4/EPCedv - EPC Viewer, municipality scale.png"
            },
        ]
    },
    {
        "id": "service_s5",
        "title": "CCRF",
        "developer": "CARTIF",
        "short_description": "Climate Change Radiation Forecasting service.",
        "full_description": "The service provides the total PV production per year for a defined site and parametrised fields, with comparative graphs between current production (based on historical weather data) and the future (short-term) production considering climate change scenarios. This service is available both in English and Spanish, as it is developed for the Asturias region (region at the North of Spain).",
        "service_links": [
            {
                "name": "Service Page",
                "link": "https://tools.cartif.es/inergy-radiacion"
            }
        ],
        "github_links": [],
        "aiod_links": [
            {
                "name": "AI Asset",
                "link": "https://www.ai4europe.eu/research/ai-catalog/climate-change-radiation-forecasting-service"
            }
        ],
        "category": "I-ENEF",
        "image": {
            "name": "CCRF Image",
            "source": process.env.PUBLIC_URL + "/images/services/service_s5.png"
        },
        "demoVideo": "https://youtu.be/q7-eUu7szdc",
        "screenshots": [
            {
                "name": "CCRF - Definition of parameters",
                "source": process.env.PUBLIC_URL + "/images/screenshots/service_s5/CCRF - Definition of parameters.png"
            },
            {"name": "CCRF - Login", "source": process.env.PUBLIC_URL + "/images/screenshots/service_s5/CCRF - Login.png"},
            {
                "name": "CCRF - Results of solar PV production",
                "source": process.env.PUBLIC_URL + "/images/screenshots/service_s5/CCRF - Results of solar PV production.png"
            }
        ]
    },
    {
        "id": "service_s6",
        "title": "Twin4DER",
        "developer": "RWTH",
        "short_description": "Digital Twin simulation service for DER.",
        "full_description": "NA Digital Twin is a virtual model, which can reproduce desired representative characteristics that mimicks the behaviour of real-world physical objects or systems. Twin4DER fullfills this by running a simulation in DPSim, with the data of the electrical network and the data input of the sensors that measure the variables of interest in the circuit. To enable decision making capabilities, it also connects with a load forecasting service that allows the Digital Twin to have a prognosis on the future states of the system.",
        "service_links": [],
        "github_links": [
            {"name": "Code Repository", "link": "https://github.com/I-NERGY/Twin4DER"}
        ],
        "aiod_links": [
            {
                "name": "AI Asset",
                "link": "https://www.ai4europe.eu/research/ai-catalog/twin4der-api-gateway-api-service-power-system-simulations"
            }
        ],
        "category": "I-NET, I-DER",
        "image": {
            "name": "Twin4DER Image",
            "source": "https://via.placeholder.com/400x300"
        }
    },
    // No updates - mallon paei gia founto
    // {
    //     "id": "service_s7",
    //     "title": "Unknown Title",
    //     "developer": "RWTH",
    //     "short_description": "No short description provided.",
    //     "full_description": "No full description provided.",
    //     "service_links": [],
    //     "github_links": [],
    //     "aiod_links": [
    //         {
    //             "name": "www.ai4europe.eu",
    //             "link": "https://www.ai4europe.eu/research/ai-catalog/performance-inverter-system"
    //         },
    //         {
    //             "name": "www.ai4europe.eu",
    //             "link": "https://www.ai4europe.eu/research/ai-catalog/finding-faults-3-phase-electrical-lines-using-lossless-reconstruction"
    //         }
    //     ],
    //     "category": "I-NET, I-DER",
    //     "image": {
    //         "name": "Service C Image",
    //         "source": process.env.PUBLIC_URL + "https://via.placeholder.com/400x300"
    //     }
    // },
    {
        "id": "service_s7",
        "title": "CB Asset Management",
        "developer": "R&D NESTER",
        "short_description": "Dashboard service for Asset Management of Circuit Breakers (CBs), including a set of AI-based analytics for power system fault analysis and predictive maintenance for CBs.",
        "full_description": "The service provides a dashboard for Asset Management of Circuit Breakers (CBs), including a set of AI-based analytics for power system fault analysis and predictive maintenance for CBs, predicting the optimal days of operation before the next maintenance action is required. It is available as web-based application, after contacting info@rdnester.com for the provision of the required credentials.\n\nThe user may build his own Asset Management Database, by uploading the fault events witnessed by HV/MV Circuit Breakers (CBs). The service provides a fast and intuitive visualization of assets' status, triggering a red label whenever the failure probability exceeds a threshold, adjustable by the user. Such probability is computed from statistical analysis of the processed events, considering the CBs to have anomalous operation according to the different ranges of normal operation for different voltages. When uploading a new event, the service will calculate and store as well several incident statistics useful for system and asset management, (e.g. fault detection time, fault elimination time, maximum fault current, etc..) and provide as well a prompt visualization of the voltage and current signals characterizing the event.\n\nContact info@rdnester.com to test or start using the service!",
        "service_links": [
            {
                "name": "Service Page",
                "link": "http://34.240.151.70/"
            }
        ],
        "github_links": [],
        "aiod_links": [
            {
                "name": "AI Asset",
                "link": "https://www.ai4europe.eu/research/ai-catalog/i-nergy-project-circuit-breaker-asset-management"
            }
        ],
        "category": "I-NET",
        "image": {
            "name": "CB Asset Management Image",
            "source": process.env.PUBLIC_URL + "/images/services/service_s7.png"
        },
        "demoVideo": "https://www.youtube.com/watch?v=NqN5IwgzzdE",
        "screenshots": [
            {"name": "Asset Management Table", "source": process.env.PUBLIC_URL + "/images/screenshots/service_s7/Asset Management Table.png"},
            {"name": "Fault Analysis", "source": process.env.PUBLIC_URL + "/images/screenshots/service_s7/Fault Analysis.png"},
            {"name": "Homepage", "source": process.env.PUBLIC_URL + "/images/screenshots/service_s7/Homepage.png"},
            {"name": "Login", "source": process.env.PUBLIC_URL + "/images/screenshots/service_s7/Login.png"},
            {"name": "Upload Fault", "source": process.env.PUBLIC_URL + "/images/screenshots/service_s7/Upload Fault.png"},
        ]
    },
    {
        "id": "service_s8",
        "title": "IPMVP",
        "developer": "CARTIF",
        "short_description": "International Performance Measurement and Verification Protocol (IPMVP) Service.",
        "full_description": "The service supports users in the definition of the Measurement and Verification Plan following the instructions provided in the International Performance Measurement and Verification Protocol (IPMVP). It is divided into two parts, one to define the proper Measurement and Verification Plan, and the other one to calculate the energy savings resulting from the refurbishment works or the introduction of Energy Conservation Measures (ECM) in a building.",
        "service_links": [
            {
                "name": "Service Page",
                "link": "https://tools.cartif.es/inergy-ipmvp"
            }
        ],
        "github_links": [],
        "aiod_links": [
            {
                "name": "AI Asset",
                "link": "https://www.ai4europe.eu/research/ai-catalog/ipmvp-service"
            }
        ],
        "category": "I-DER",
        "image": {
            "name": "IPMVP Image",
            "source": process.env.PUBLIC_URL + "/images/services/service_s8.png"
        },
        "demoVideo": "https://youtu.be/Exlhc9TssrI",
        "screenshots": [
            {"name": "IPMVP - Check results.png", "source": process.env.PUBLIC_URL + "/images/screenshots/service_s8/IPMVP - Check results.png"},
            {"name": "IPMVP - Check savings.png", "source": process.env.PUBLIC_URL + "/images/screenshots/service_s8/IPMVP - Check savings.png"},
            {"name": "IPMVP - Create plan.png", "source": process.env.PUBLIC_URL + "/images/screenshots/service_s8/IPMVP - Create plan.png"},
            {"name": "IPMVP - Define plan.png", "source": process.env.PUBLIC_URL + "/images/screenshots/service_s8/IPMVP - Define plan.png"},
            {
                "name": "IPMVP - Generate model.png",
                "source": process.env.PUBLIC_URL + "/images/screenshots/service_s8/IPMVP - Generate model.png"
            },
            {"name": "IPMVP - Login.png", "source": process.env.PUBLIC_URL + "/images/screenshots/service_s8/IPMVP - Login.png"},
        ]
    },
    {
        "id": "service_s9",
        "title": "FlexDR",
        "developer": "ICCS",
        "short_description": "The machine learning-based application for flexibility forecasting and demand response.",
        "full_description": "FlexDR was designed and developed by ICCS for ASM, which is a municipal enterprise that owns and manages the electricity distribution network in the town of Terni in central Italy. The data comes from 54 smart meters that ASM decided to group into a virtual power plant (VPP) in order to explore the potential of the network's loads for demand response, hence acting as an aggregator. To this end, Flex-DR combines data-driven approaches involving k-means clustering and forecasting based on deep learning to forecast the day-ahead flexibility of prosumers. Subsequently it allows to assess their capacity for demand response, and recommends them actions that are of interest both for them and the aggregator.",
        "service_links": [
            {"name": "Service Page", "link": "https://flexdr.inergy.epu.ntua.gr/"}
        ],
        "github_links": [
            {
                "name": "Back-End",
                "link": "https://github.com/I-NERGY/FlexDR"
            },
            {
                "name": "Front-End",
                "link": "https://github.com/I-NERGY/FlexDR_frontend"
            },
        ],
        "aiod_links": [
            {
                "name": "AI Asset",
                "link": "https://www.ai4europe.eu/research/ai-catalog/flexdr"
            }
        ],
        "category": "I-DER",
        "image": {
            "name": "FlexDR Image",
            "source": process.env.PUBLIC_URL + "/images/services/service_s9.png"
        },
        "demoVideo": "https://www.youtube.com/watch?v=prrDUJGVt00",
        "screenshots": [
            {
                "name": "FlexDR - Assignments page",
                "source": process.env.PUBLIC_URL + "/images/screenshots/service_s9/FlexDR - Assignments page.png"
            },
            {
                "name": "FlexDR - Clusters Profiles page",
                "source": process.env.PUBLIC_URL + "/images/screenshots/service_s9/FlexDR - Clusters Profiles page.png"
            },
            {"name": "FlexDR - Daily Tip page",
                "source": process.env.PUBLIC_URL + "/images/screenshots/service_s9/FlexDR - Daily Tip page.png"},
            {"name": "FlexDR - Homepage",
                "source": process.env.PUBLIC_URL + "/images/screenshots/service_s9/FlexDR - Homepage.png"},
            {
                "name": "FlexDR - New Cluster page",
                "source": process.env.PUBLIC_URL + "/images/screenshots/service_s9/FlexDR - New Cluster page.png"
            },
            {
                "name": "FlexDR - Smart Meters page",
                "source": process.env.PUBLIC_URL + "/images/screenshots/service_s9/FlexDR - Smart meters page.png"
            },
        ]
    },
    {
        "id": "service_s10",
        "title": "DeepTSF",
        "developer": "ICCS",
        "short_description": "Codeless machine learning operations for time series forecasting.",
        "full_description": "DeepTSF automates key aspects of the ML lifecycle, making it an ideal tool for data scientists and MLops engineers engaged in machine learning (ML) and deep learning (DL)-based forecasting. DeepTSF empowers users with a robust and user-friendly solution, while it is designed to seamlessly integrate with existing data analysis workflows, providing enhanced productivity and compatibility. The framework offers a front-end user interface (UI) suitable for data scientists, as well as other higher-level stakeholders, enabling comprehensive understanding through insightful visualizations and evaluation metrics. DeepTSF also prioritizes security through identity management and access authorization mechanisms. The application of DeepTSF in real-life use cases of the I-NERGY project has already proven DeepTSF\u2019s efficacy in DL-based load forecasting, showcasing its significant added value in the electrical power and energy systems domain.",
        "service_links": [
            {"name": "Service Page", "link": "https://deeptsf.inergy.epu.ntua.gr/"}
        ],
        "github_links": [
            {
                "name": "Code Repository",
                "link": "https://github.com/I-NERGY/DeepTSF"
            }
        ],
        "aiod_links": [
            {
                "name": "AI Asset",
                "link": "https://www.ai4europe.eu/research/ai-catalog/deeptsf"
            }
        ],
        "category": "I-NET, I-DER, I-ENEF",
        "image": {
            "name": "DeepTSF Image",
            "source": process.env.PUBLIC_URL + "/images/services/service_s10.png"
        },
        "demoVideo": "https://www.youtube.com/watch?v=NuhHNYefbB8",
        "screenshots": [
            {"name": "DeepTSF - Homepage", "source": process.env.PUBLIC_URL + "/images/screenshots/service_s10/DeepTSF - Homepage.png"},
            {
                "name": "DeepTSF - Codeless Forecast page",
                "source": process.env.PUBLIC_URL + "/images/screenshots/service_s10/DeepTSF - Codeless Forecast.png"
            },
            {
                "name": "DeepTSF - Experiment Tracking page",
                "source": process.env.PUBLIC_URL + "/images/screenshots/service_s10/DeepTSF - Experiment Tracking.png"
            },
            {
                "name": "DeepTSF - Experiment Tracking page (2)",
                "source": process.env.PUBLIC_URL + "/images/screenshots/service_s10/DeepTSF - Experiment Tracking (2).png"
            },
            {
                "name": "DeepTSF - System Monitoring page",
                "source": process.env.PUBLIC_URL + "/images/screenshots/service_s10/DeepTSF - System Monitoring.png"
            },
        ]
    },
    {
        "id": "service_s11",
        "title": "Net Load Forecasting",
        "developer": "R&D NESTER",
        "short_description": "This service improves net load forecasting at the TSO-DSO interface for effective operational planning, using advanced machine learning techniques.",
        "full_description": "This is an AI service for net load at the TSO-DSO interface use two main models: ensemble models based on iterative learning and adaptive models based on incremental learning. Both types of model provide accurate and adaptive day-ahead load forecasts, exploiting different machine learning techniques and adapting to changes in the load patterns. They can be used to effectively plan and manage network operations even with large amounts of behind the meter integration of renewable energy production.\n\nContact info@rdnester.com to test or start using the service!",
        "service_links": [],
        "github_links": [],
        "aiod_links": [
            {
                "name": "AI Asset",
                "link": "https://www.ai4europe.eu/research/ai-catalog/i-nergy-project-net-load-forecasting-tso-dso-interface"
            }
        ],
        "category": "I-NET",
        "image": {
            "name": "Net Load Forecasting Image",
            "source": process.env.PUBLIC_URL + "/images/services/service_s11.png"
        }
    },
    {
        "id": "service_s12",
        "title": "HRSForecast",
        "developer": "CARTIF",
        "short_description": "I-NERGY Heat and Cold Forecasting",
        "full_description": "This is a forecasting service, based on a Random Forest model, for predicting thermal load (heat and cold energy demand) of a Spanish Hospital in hourly basis. The data was provided by VEOLIA, from a hospital complex in C\u00f3rdoba (Spain). The hospital complex has a district heating network. The layout of this district heating network is a ring system composed by two independent pipelines for heating and cooling. This ring provides energy for heating, cooling  and Domestic Hot Water (DHW). Apart from being a district heating network, this system is complex due to the different production sources used for heating and cooling. In this facility heat, cold and steam are produced by using different sources.",
        "service_links": [
            {
                "name": "Service Page",
                "link": "https://aiexp.ai4europe.eu/#/marketSolutions?solutionId=2ef3e3fb-afe9-422a-b037-88168d219a80&revisionId=1aaf2a4e-70e3-41e8-bb4e-7d3f1cb985d8&parentUrl=marketplace#md-model-detail-template, https://aiexp.ai4europe.eu/#/marketSolutions?solutionId=2ef3e3fb-afe9-422a-b037-88168d219a80&revisionId=1aaf2a4e-70e3-41e8-bb4e-7d3f1cb985d8&parentUrl=marketplace#md-model-detail-template "
            }
        ],
        "github_links": [],
        "aiod_links": [
            {
                "name": "AI Asset - Cold Forecasting",
                "link": "https://www.ai4europe.eu/research/ai-catalog/i-nergy-cold-forecasting"
            },
            {
                "name": "AI Asset - Heat Forecasting",
                "link": "https://www.ai4europe.eu/research/ai-catalog/i-nergy-heat-forecasting"
            }
        ],
        "category": "I-NET",
        "image": {
            "name": "HRSForecast Image",
            "source": process.env.PUBLIC_URL + "/images/services/service_s12.png"
        },
        "demoVideo": "https://youtu.be/nVfPDt__ytA",
        "screenshots": [
            {"name": "Screenshot 1", "source": process.env.PUBLIC_URL + "/images/screenshots/service_s12/p1.png"},
            {"name": "Screenshot 2", "source": process.env.PUBLIC_URL + "/images/screenshots/service_s12/p2.png"},
            {"name": "Screenshot 3", "source": process.env.PUBLIC_URL + "/images/screenshots/service_s12/p3.png"}
        ]
    },
    {
        "id": "service_s13",
        "title": "HRSOptim",
        "developer": "CARTIF",
        "short_description": "I-NERGY Heat and Cold Decision.",
        "full_description": "This is a forecasting service, based on a decision support system (DSS), for predicting thermal load (heat and cold energy demand) of a Spanish Hospital in hourly basis. The data was provided by VEOLIA, from a hospital complex in C\u00f3rdoba (Spain). The hospital complex has a district heating network. The layout of this district heating network is a ring system composed by two independent pipelines for heating and cooling. This ring provides energy for heating, cooling and Domestic Hot Water (DHW). Apart from being a district heating network, this system is complex due to the different production sources used for heating and cooling. In this facility heat, cold and steam are produced by using different sources.",
        "service_links": [
            {
                "name": "Service Page",
                "link": "https://aiexp.ai4europe.eu/#/marketSolutions?solutionId=169c308d-3451-4bb9-9fe1-84316863c18b&revisionId=256efc36-cedd-4f61-90e4-263d9af04d36&parentUrl=marketplace#md-model-detail-template, https://aiexp.ai4europe.eu/#/marketSolutions?solutionId=d30263f9-9902-407d-b0c8-f389b541e98d&revisionId=00ba7987-227b-4f64-a3d2-7d056007b6db&parentUrl=marketplace#md-model-detail-template"
            }
        ],
        "github_links": [],
        "aiod_links": [
            {
                "name": "AI Asset - Cold Decision",
                "link": "https://www.ai4europe.eu/research/ai-catalog/i-nergy-cold-decision"
            },
            {
                "name": "AI Asset - Heat Decision",
                "link": "https://www.ai4europe.eu/research/ai-catalog/i-nergy-heat-decision"
            }
        ],
        "category": "I-ENEF",
        "image": {
            "name": "HRSOptim Image",
            "source": process.env.PUBLIC_URL + "/images/services/service_s13.png"
        },
        "demoVideo": "https://youtu.be/nVfPDt__ytA",
    },
    {
        "id": "service_s14",
        "title": "Virtual Workbench",
        "developer": "ENG",
        "short_description": "I-NERGY Virtual Workbench.",
        "full_description": "I-NERGY Virtual Workbench is a tool that helps to create new services at scale based on distributed data and AI models. With dedicated sub-modules, it allows SMEs, developers and potential innovators a range of functionalities to easily define and query data to be processed by AI models. The tool provides a set of functionalities to draw potential dashboards of new services using available data and functions that exploit AI models.",
        "service_links": [
            {
                "name": "Service Page",
                "link": "http://131.154.96.95:8080/knowage"
            }
        ],
        "github_links": [
            {
                "name": "Code Repository",
                "link": "https://github.com/KnowageLabs"
            }
        ],
        "aiod_links": [
            {
                "name": "AI Asset",
                "link": "https://www.ai4europe.eu/research/ai-catalog/knowage-open-source-suite-analytics-and-business-intelligence"
            }
        ],
        "category": "General",
        "image": {
            "name": "Virtual Workbench Image",
            "source": process.env.PUBLIC_URL + "/images/services/service_s14.jpg"
        },
        "demoVideo": "https://youtu.be/IQnnI3NEd3s",
        "screenshots": [
            {"name": "Data source management", "source": process.env.PUBLIC_URL + "/images/screenshots/service_s14/Data source management.jpg"},
            {"name": "Datasets", "source": process.env.PUBLIC_URL + "/images/screenshots/service_s14/Datasets.jpg"},
            {"name": "Datasets ASM", "source": process.env.PUBLIC_URL + "/images/screenshots/service_s14/datasets ASM.jpg"},
            {"name": "Function script", "source": process.env.PUBLIC_URL + "/images/screenshots/service_s14/Function script.jpg"},
            {"name": "ML Function catalogue", "source": process.env.PUBLIC_URL + "/images/screenshots/service_s14/ML Function catalogue.jpg"},
            {"name": "ML Script definition", "source": process.env.PUBLIC_URL + "/images/screenshots/service_s14/ML Script definition.jpg"},
            {"name": "Models metadata", "source": process.env.PUBLIC_URL + "/images/screenshots/service_s14/Models metadata.jpg"},
            {
                "name": "Models resources selection cockpit",
                "source": process.env.PUBLIC_URL + "/images/screenshots/service_s14/Models resources selection cockpit.jpg"
            },
            {
                "name": "Service Cockpit example 1",
                "source": process.env.PUBLIC_URL + "/images/screenshots/service_s14/Service Cockpit example 1.jpg"
            },
            {
                "name": "Service Cockpit example 2",
                "source": process.env.PUBLIC_URL + "/images/screenshots/service_s14/Service Cockpit example 2.jpg"
            },
        ]
    },
    {
        "id": "service_s15",
        "title": "COMSrecast",
        "developer": "COMSENSUS",
        "short_description": "Activity recognition and forecasting service for real time monitoring consumption monitoring.",
        "full_description": "Activity recognition and forecasting service for real time consumption monitoring. The service visualises the real time consumption data and its forecast. At the same time it tracks historical data and converts it into monthly activity diagrams with average hourly consumptions that can be compared by days, months, and years.",
        "service_links": [],
        "github_links": [],
        "aiod_links": [],
        "category": "I-DER",
        "image": {
            "name": "COMSrecast Image",
            "source": process.env.PUBLIC_URL + "/images/services/service_s15.png"
        },
        "demoVideo": "https://www.youtube.com/watch?v=NbIMaeLiU-8",
        "screenshots": [
            {"name": "Anomaly Monitor", "source": process.env.PUBLIC_URL + "/images/screenshots/service_s15/Anomaly Monitor.png"}
        ]
    },
    {
        "id": "service_s16",
        "title": "Anomaly detection",
        "developer": "COMSENSUS",
        "short_description": "Detecting deviations in power consumption.",
        "full_description": "Service detects deviations in power consumption. The algorithm forecasts power consumption based on the historic data and if the real data deviates by more than 25% to the forecast, the measurements are flagged as anomalous.",
        "service_links": [],
        "github_links": [],
        "aiod_links": [],
        "category": "I-DER",
        "image": {
            "name": "COMSrecast Image",
            "source": process.env.PUBLIC_URL + "/images/services/service_s16.png"
        },
        "demoVideo": "https://www.youtube.com/watch?v=NbIMaeLiU-8",
    },
    {
        "id": "service_s17",
        "title": "EEI-DSS",
        "developer": "ICCS",
        "short_description": "Artificial Intelligence for energy efficiency investments decision support.",
        "full_description": "The energy efficiency investments de-risking service has been developed by ICCS, in the context of I-NERGY Horizon 2020 project and specifically for the Riga Energy Agency pilot from Latvia. The purpose of this service is to guide Latvian citizens in creating virtual energy performance certificates for their residential buildings and subsequently explore the costs and benefits that occur by various energy efficiency renovation actions of their preference.",
        "service_links": [
            {"name": "Service Page", "link": "https://eeidss.inergy.epu.ntua.gr"}
        ],
        "github_links": [
            {"name": "Front-End", "link": "Front-end: https://github.com/I-NERGY/EEI_Service_frontend"},
            {"name": "Back-End", "link": "https://github.com/I-NERGY/EEI_Service_backend"},
        ],
        "aiod_links": [
            {
                "name": "AI Asset",
                "link": "https://www.ai4europe.eu/research/ai-catalog/eei-service-deployment"
            }
        ],
        "category": "I-ENEF",
        "image": {
            "name": "EEI-DSS Image",
            "source": process.env.PUBLIC_URL + "/images/services/service_s17.png"
        },
        "demoVideo": "https://www.youtube.com/watch?v=LxWkLm2YKDc",
        "screenshots": [
            {"name": "EEI-DSS - Homepage.", "source": process.env.PUBLIC_URL + "/images/screenshots/service_s17/EEI-DSS - Homepage.png"},
            {
                "name": "EEI-DSS - Plan Investment page.",
                "source": process.env.PUBLIC_URL + "/images/screenshots/service_s17/EEI-DSS - Plan Investment page.png"
            },
            {
                "name": "EEI-DSS - Virtual EPC and Innovation Measures page.",
                "source": process.env.PUBLIC_URL + "/images/screenshots/service_s17/EEI-DSS - Virtual EPC and Innovation Measures page.png"
            },
            {"name": "EEI-DSS - Admin page.", "source": process.env.PUBLIC_URL + "/images/screenshots/service_s17/EEI-DSS - Admin page.png"},
            {
                "name": "EEI-DSS - Energy Measures Addition page.",
                "source": process.env.PUBLIC_URL + "/images/screenshots/service_s17/EEI-DSS - Energy Measures Addition page.png"
            },
        ]

    },
    {
        "id": "service_s18",
        "title": "Model evaluation & serving framework",
        "developer": "ENG",
        "short_description": "A series of integrated online tools (SaaS) providing instruments to evaluate and serve ML models within I-NERGY ecosystem.",
        "full_description": "Model evaluation and serving framework is an online framework deployed as a services (SaaS BM) to provide expert users with a series of fully integrated tools to evaluate and refine their ML/DL models performance and quality and serve ML models to  develop applications.",
        "service_links": [],
        "github_links": [],
        "aiod_links": [],
        "category": "Technical Enablers",
        "image": {
            "name": "Model evaluation & serving framework Image",
            "source": process.env.PUBLIC_URL + "/images/services/service_s18.png"
        },
        "demovideo": "https://youtu.be/FtAPm9itoSo"
    },
    {
        "id": "service_s19",
        "title": "TLWizard",
        "developer": "COMSENSUS",
        "short_description": "Service for building models based on transfer learning.",
        "full_description": "Online service that enables the user to upload their own energy data and build ML based models for forecasting or classification. The service takes already trained models and fine tunes it on the user data.",
        "service_links": [
            {
                "name": "Service Page",
                "link": "http://comsensus.eu:20788/"
            }
        ],
        "github_links": [],
        "aiod_links": [
            {
                "name": "AI Asset",
                "link": "https://www.ai4europe.eu/research/ai-catalog/i-nergy-transfer-learning-wizard"
            }
        ],
        "category": "Technical Enablers",
        "image": {
            "name": "TLWizard Image",
            "source": process.env.PUBLIC_URL + "/images/services/service_s19.png"
        },
        "demoVideo": "https://www.youtube.com/watch?v=2Juspqr49TQ",

    },
    {
        "id": "ml_flow",
        "title": "MLFlow",
        "developer": "ENG/ICCS",
        "short_description": "Trained Models Store (MLFlow).",
        "full_description": "The I-NERGY MLOps platform used for ML experiment logging (including model parameters and evaluation metrics) and model/artifact storage.",
        "service_links": [
            {"name": "Service Page", "link": "https://131.154.97.48:8440/"}
        ],
        "github_links": [
            {"name": "Simple", "link": "https://github.com/I-NERGY/mlflow-tracking-server"},
            {"name": "Secure", "link": "https://github.com/I-NERGY/mlflow-tracking-server-nginx"},
        ],
        "aiod_links": [],
        "category": "Technical Enablers",
        "image": {"name": "MLFlow image", "source": process.env.PUBLIC_URL + "/images/services/mlflow.png"}
    }
]