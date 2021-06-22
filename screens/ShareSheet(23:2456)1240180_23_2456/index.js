import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_140_5515}>
        <View style={styles.View_23_2457}>
          <View style={styles.View_I23_2457_5_19}>
            <View style={styles.View_I23_2457_5_20}>
              <View style={styles.View_I23_2457_5_21} />
              <View style={styles.View_I23_2457_5_22}>
                <Text style={styles.Text_I23_2457_5_22}>Share Sheet</Text>
              </View>
            </View>
            <View style={styles.View_I23_2457_5_23}>
              <Text style={styles.Text_I23_2457_5_23}>
                Human Interface Guidelines: Sharing
              </Text>
            </View>
          </View>
          <View style={styles.View_I23_2457_5_24} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66eb/8f71/e7ca201b5bb276ce298af5b7fbca7f7e"
          }}
          style={styles.ImageBackground_140_5546}
        />
      </View>
      <View style={styles.View_23_2458}>
        <View style={styles.View_I23_2458_10_2304}>
          <Text style={styles.Text_I23_2458_10_2304}>Atoms</Text>
        </View>
        <View style={styles.View_I23_2458_10_2303} />
      </View>
      <View style={styles.View_23_2459}>
        <View style={styles.View_23_2460}>
          <Text style={styles.Text_23_2460}>Share To:</Text>
        </View>
        <View style={styles.View_23_2461}>
          <View style={styles.View_23_2462}>
            <View style={styles.View_23_2463}>
              <View style={styles.View_23_2464}>
                <Text style={styles.Text_23_2464}>Light / Message</Text>
              </View>
              <View style={styles.View_24_1276}>
                <Text style={styles.Text_24_1276}>Light / Group Message</Text>
              </View>
              <View style={styles.View_24_1277}>
                <Text style={styles.Text_24_1277}>Light / AirDrop</Text>
              </View>
              <View style={styles.View_24_1278}>
                <Text style={styles.Text_24_1278}>Light / App</Text>
              </View>
              <View style={styles.View_24_1279}>
                <Text style={styles.Text_24_1279}>Light / Local AirDrop</Text>
              </View>
              <View style={styles.View_24_1280}>
                <Text style={styles.Text_24_1280}>Dark / Message</Text>
              </View>
              <View style={styles.View_24_1281}>
                <Text style={styles.Text_24_1281}>Dark / Group Message</Text>
              </View>
              <View style={styles.View_24_1282}>
                <Text style={styles.Text_24_1282}>Dark / AirDrop</Text>
              </View>
              <View style={styles.View_24_1283}>
                <Text style={styles.Text_24_1283}>Dark / App</Text>
              </View>
              <View style={styles.View_24_1284}>
                <Text style={styles.Text_24_1284}>Dark / Local AirDrop</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_23_2468}>
            <View style={styles.View_24_1285}>
              <View style={styles.View_24_1286}>
                <View style={styles.View_24_1287}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/561b/91a1/672ad7fe28d808a5ab6234d877378537"
                    }}
                    style={styles.ImageBackground_24_1288}
                  />
                </View>
                <View style={styles.View_24_1289}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe2b/e76f/771cc5fe8e60a94a67fad25966fcc222"
                    }}
                    style={styles.ImageBackground_24_1290}
                  />
                </View>
              </View>
              <View style={styles.View_24_1291}>
                <Text style={styles.Text_24_1291}>First Last</Text>
              </View>
            </View>
            <View style={styles.View_24_1469}>
              <View style={styles.View_24_1470}>
                <View style={styles.View_24_1471}>
                  <View style={styles.View_24_1472} />
                  <View style={styles.View_24_1478}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf31/21ff/776b119f720263a261c01228c66c0431"
                      }}
                      style={styles.ImageBackground_24_1479}
                    />
                  </View>
                  <View style={styles.View_24_1483}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bae/a9b1/1edbe60ced548422b79ad1dcd704636c"
                      }}
                      style={styles.ImageBackground_24_1484}
                    />
                  </View>
                  <View style={styles.View_24_1485}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e50/4a9f/529ea171d871c828548370259b591788"
                      }}
                      style={styles.ImageBackground_24_1486}
                    />
                  </View>
                </View>
                <View style={styles.View_24_1473}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe2b/e76f/771cc5fe8e60a94a67fad25966fcc222"
                    }}
                    style={styles.ImageBackground_24_1474}
                  />
                </View>
              </View>
              <View style={styles.View_24_1476}>
                <Text style={styles.Text_24_1476}>Group</Text>
              </View>
              <View style={styles.View_24_1477}>
                <Text style={styles.Text_24_1477}>2 People</Text>
              </View>
            </View>
            <View style={styles.View_24_1303}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19ec/0f92/b336c4cd857e63e18df321b8c1518d78"
                }}
                style={styles.ImageBackground_24_1304}
              />
              <View style={styles.View_24_1311}>
                <Text style={styles.Text_24_1311}>AirDrop</Text>
              </View>
            </View>
            <View style={styles.View_24_1312}>
              <View style={styles.View_24_1313}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce2e/ee7e/423d71ce4feab6cb612e6f4ca5ec62a9"
                  }}
                  style={styles.ImageBackground_24_1314}
                />
              </View>
              <View style={styles.View_24_1315}>
                <Text style={styles.Text_24_1315}>App Name</Text>
              </View>
            </View>
            <View style={styles.View_24_1399}>
              <View style={styles.View_24_1400}>
                <View style={styles.View_24_1401}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5566/7c58/f50fbc1ccb74cbfb54fcdef6f68b13fb"
                    }}
                    style={styles.ImageBackground_24_1402}
                  />
                </View>
                <View style={styles.View_24_1403}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3257/3a5f/14a7c615e9123e73e73d625718091b54"
                    }}
                    style={styles.ImageBackground_24_1404}
                  />
                </View>
              </View>
              <View style={styles.View_24_1405}>
                <Text style={styles.Text_24_1405}>Joey’s Mac Mini</Text>
              </View>
            </View>
            <View style={styles.View_23_2626}>
              <View style={styles.View_23_2627}>
                <View style={styles.View_23_3114}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/561b/91a1/672ad7fe28d808a5ab6234d877378537"
                    }}
                    style={styles.ImageBackground_23_3115}
                  />
                </View>
                <View style={styles.View_23_3111}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe2b/e76f/771cc5fe8e60a94a67fad25966fcc222"
                    }}
                    style={styles.ImageBackground_23_3113}
                  />
                </View>
              </View>
              <View style={styles.View_23_2630}>
                <Text style={styles.Text_23_2630}>First Last</Text>
              </View>
            </View>
            <View style={styles.View_24_1488}>
              <View style={styles.View_24_1489}>
                <View style={styles.View_24_1490}>
                  <View style={styles.View_24_1491} />
                  <View style={styles.View_24_1492}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf31/21ff/776b119f720263a261c01228c66c0431"
                      }}
                      style={styles.ImageBackground_24_1493}
                    />
                  </View>
                  <View style={styles.View_24_1494}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bae/a9b1/1edbe60ced548422b79ad1dcd704636c"
                      }}
                      style={styles.ImageBackground_24_1495}
                    />
                  </View>
                  <View style={styles.View_24_1496}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e50/4a9f/529ea171d871c828548370259b591788"
                      }}
                      style={styles.ImageBackground_24_1497}
                    />
                  </View>
                </View>
                <View style={styles.View_24_1498}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe2b/e76f/771cc5fe8e60a94a67fad25966fcc222"
                    }}
                    style={styles.ImageBackground_24_1499}
                  />
                </View>
              </View>
              <View style={styles.View_24_1500}>
                <Text style={styles.Text_24_1500}>Group</Text>
              </View>
              <View style={styles.View_24_1501}>
                <Text style={styles.Text_24_1501}>2 People</Text>
              </View>
            </View>
            <View style={styles.View_23_2667}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19ec/0f92/b336c4cd857e63e18df321b8c1518d78"
                }}
                style={styles.ImageBackground_23_2668}
              />
              <View style={styles.View_23_2675}>
                <Text style={styles.Text_23_2675}>AirDrop</Text>
              </View>
            </View>
            <View style={styles.View_23_2652}>
              <View style={styles.View_23_3033}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce2e/ee7e/423d71ce4feab6cb612e6f4ca5ec62a9"
                  }}
                  style={styles.ImageBackground_23_3035}
                />
              </View>
              <View style={styles.View_23_2654}>
                <Text style={styles.Text_23_2654}>App Name</Text>
              </View>
            </View>
            <View style={styles.View_23_2684}>
              <View style={styles.View_23_2685}>
                <View style={styles.View_23_3132}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5566/7c58/f50fbc1ccb74cbfb54fcdef6f68b13fb"
                    }}
                    style={styles.ImageBackground_23_3133}
                  />
                </View>
                <View style={styles.View_23_3129}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3257/3a5f/14a7c615e9123e73e73d625718091b54"
                    }}
                    style={styles.ImageBackground_23_3131}
                  />
                </View>
              </View>
              <View style={styles.View_23_2688}>
                <Text style={styles.Text_23_2688}>Joey’s Mac Mini</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_23_2479}>
        <View style={styles.View_I23_2479_10_2311}>
          <Text style={styles.Text_I23_2479_10_2311}>Molecules</Text>
        </View>
        <View style={styles.View_I23_2479_10_2312} />
      </View>
      <View style={styles.View_23_2480}>
        <View style={styles.View_23_2481}>
          <Text style={styles.Text_23_2481}>Share Sheet</Text>
        </View>
        <View style={styles.View_23_2482}>
          <View style={styles.View_23_2483}>
            <View style={styles.View_23_2484}>
              <View style={styles.View_23_2485}>
                <Text style={styles.Text_23_2485}>Light</Text>
              </View>
              <View style={styles.View_23_2486}>
                <Text style={styles.Text_23_2486}>Dark</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_23_2487}>
            <View style={styles.View_23_2726}>
              <View style={styles.View_23_2727}>
                <View style={styles.View_23_2728}>
                  <Text style={styles.Text_23_2728}>iOS 15 Kit for Figma</Text>
                </View>
                <View style={styles.View_23_2729}>
                  <Text style={styles.Text_23_2729}>figma.com</Text>
                </View>
                <View style={styles.View_23_3274}>
                  <View style={styles.View_23_3278}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b66e/72ae/f581deb763547edda50390f6b87d3858"
                      }}
                      style={styles.ImageBackground_23_3280}
                    />
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50bc/3aed/23eff08ca77002d73f54887e305dc643"
                  }}
                  style={styles.ImageBackground_71_6059}
                />
              </View>
              <View style={styles.View_23_2732} />
              <View style={styles.View_23_2733}>
                <View style={styles.View_24_1330}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19ec/0f92/b336c4cd857e63e18df321b8c1518d78"
                    }}
                    style={styles.ImageBackground_I24_1330_24_1304}
                  />
                  <View style={styles.View_I24_1330_24_1311}>
                    <Text style={styles.Text_I24_1330_24_1311}>AirDrop</Text>
                  </View>
                </View>
                <View style={styles.View_24_1316}>
                  <View style={styles.View_I24_1316_24_1286}>
                    <View style={styles.View_I24_1316_24_1287}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/561b/91a1/672ad7fe28d808a5ab6234d877378537"
                        }}
                        style={styles.ImageBackground_I24_1316_24_1288}
                      />
                    </View>
                    <View style={styles.View_I24_1316_24_1289}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe2b/e76f/771cc5fe8e60a94a67fad25966fcc222"
                        }}
                        style={styles.ImageBackground_I24_1316_24_1290}
                      />
                    </View>
                  </View>
                  <View style={styles.View_I24_1316_24_1291}>
                    <Text style={styles.Text_I24_1316_24_1291}>First Last</Text>
                  </View>
                </View>
                <View style={styles.View_24_1323}>
                  <View style={styles.View_I24_1323_24_1470}>
                    <View style={styles.View_I24_1323_24_1471}>
                      <View style={styles.View_I24_1323_24_1472} />
                      <View style={styles.View_I24_1323_24_1478}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf31/21ff/776b119f720263a261c01228c66c0431"
                          }}
                          style={styles.ImageBackground_I24_1323_24_1479}
                        />
                      </View>
                      <View style={styles.View_I24_1323_24_1483}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bae/a9b1/1edbe60ced548422b79ad1dcd704636c"
                          }}
                          style={styles.ImageBackground_I24_1323_24_1484}
                        />
                      </View>
                      <View style={styles.View_I24_1323_24_1485}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e50/4a9f/529ea171d871c828548370259b591788"
                          }}
                          style={styles.ImageBackground_I24_1323_24_1486}
                        />
                      </View>
                    </View>
                    <View style={styles.View_I24_1323_24_1473}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe2b/e76f/771cc5fe8e60a94a67fad25966fcc222"
                        }}
                        style={styles.ImageBackground_I24_1323_24_1474}
                      />
                    </View>
                  </View>
                  <View style={styles.View_I24_1323_24_1476}>
                    <Text style={styles.Text_I24_1323_24_1476}>Group</Text>
                  </View>
                  <View style={styles.View_I24_1323_24_1477}>
                    <Text style={styles.Text_I24_1323_24_1477}>2 People</Text>
                  </View>
                </View>
                <View style={styles.View_24_1337}>
                  <View style={styles.View_I24_1337_24_1286}>
                    <View style={styles.View_I24_1337_24_1287}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f905/70da/ff2a19516ccaba1a336f453f6a2ed943"
                        }}
                        style={styles.ImageBackground_I24_1337_24_1288}
                      />
                    </View>
                    <View style={styles.View_I24_1337_24_1289}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe2b/e76f/771cc5fe8e60a94a67fad25966fcc222"
                        }}
                        style={styles.ImageBackground_I24_1337_24_1290}
                      />
                    </View>
                  </View>
                  <View style={styles.View_I24_1337_24_1291}>
                    <Text style={styles.Text_I24_1337_24_1291}>First Last</Text>
                  </View>
                </View>
                <View style={styles.View_24_1344}>
                  <View style={styles.View_I24_1344_24_1286}>
                    <View style={styles.View_I24_1344_24_1287}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/561b/91a1/672ad7fe28d808a5ab6234d877378537"
                        }}
                        style={styles.ImageBackground_I24_1344_24_1288}
                      />
                    </View>
                    <View style={styles.View_I24_1344_24_1289}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe2b/e76f/771cc5fe8e60a94a67fad25966fcc222"
                        }}
                        style={styles.ImageBackground_I24_1344_24_1290}
                      />
                    </View>
                  </View>
                  <View style={styles.View_I24_1344_24_1291}>
                    <Text style={styles.Text_I24_1344_24_1291}>First Last</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_23_2739} />
              <View style={styles.View_23_2740}>
                <View style={styles.View_24_1420}>
                  <View style={styles.View_I24_1420_24_1313}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce2e/ee7e/423d71ce4feab6cb612e6f4ca5ec62a9"
                      }}
                      style={styles.ImageBackground_I24_1420_24_1314}
                    />
                  </View>
                  <View style={styles.View_I24_1420_24_1315}>
                    <Text style={styles.Text_I24_1420_24_1315}>App Name</Text>
                  </View>
                </View>
                <View style={styles.View_24_1457}>
                  <View style={styles.View_I24_1457_24_1313}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce2e/ee7e/423d71ce4feab6cb612e6f4ca5ec62a9"
                      }}
                      style={styles.ImageBackground_I24_1457_24_1314}
                    />
                  </View>
                  <View style={styles.View_I24_1457_24_1315}>
                    <Text style={styles.Text_I24_1457_24_1315}>App Name</Text>
                  </View>
                </View>
                <View style={styles.View_24_1461}>
                  <View style={styles.View_I24_1461_24_1313}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce2e/ee7e/423d71ce4feab6cb612e6f4ca5ec62a9"
                      }}
                      style={styles.ImageBackground_I24_1461_24_1314}
                    />
                  </View>
                  <View style={styles.View_I24_1461_24_1315}>
                    <Text style={styles.Text_I24_1461_24_1315}>App Name</Text>
                  </View>
                </View>
                <View style={styles.View_24_1465}>
                  <View style={styles.View_I24_1465_24_1313}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce2e/ee7e/423d71ce4feab6cb612e6f4ca5ec62a9"
                      }}
                      style={styles.ImageBackground_I24_1465_24_1314}
                    />
                  </View>
                  <View style={styles.View_I24_1465_24_1315}>
                    <Text style={styles.Text_I24_1465_24_1315}>App Name</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_24_1542}>
                <View style={styles.View_24_1805}>
                  <View style={styles.View_24_1806}>
                    <View style={styles.View_24_1807}>
                      <Text style={styles.Text_24_1807}>Copy Link</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3a9/d72b/f31517c6fa4aabb6972c7a63c75f327a"
                      }}
                      style={styles.ImageBackground_140_11759}
                    />
                  </View>
                </View>
                <View style={styles.View_24_1543}>
                  <View style={styles.View_24_1570}>
                    <View style={styles.View_24_1571}>
                      <Text style={styles.Text_24_1571}>
                        Add to Reading List
                      </Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ba8/a8b3/8948a2cfceb8fcb17630d3bccccafef8"
                      }}
                      style={styles.ImageBackground_140_11760}
                    />
                  </View>
                  <View style={styles.View_24_1545} />
                  <View style={styles.View_24_1567}>
                    <View style={styles.View_24_1568}>
                      <Text style={styles.Text_24_1568}>Add Bookmark</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9275/70b2/7161f5d0cb125e9ccbd764e51a2908a9"
                      }}
                      style={styles.ImageBackground_140_11761}
                    />
                  </View>
                  <View style={styles.View_24_1547} />
                  <View style={styles.View_24_1564}>
                    <View style={styles.View_24_1565}>
                      <Text style={styles.Text_24_1565}>Add to Favorites</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83e0/1531/7f8934110fca4042058c63f996775664"
                      }}
                      style={styles.ImageBackground_140_11762}
                    />
                  </View>
                  <View style={styles.View_24_1549} />
                  <View style={styles.View_24_1561}>
                    <View style={styles.View_24_1562}>
                      <Text style={styles.Text_24_1562}>Find on Page</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/edaf/171c/80469e31c8af922769edaefef139aa1f"
                      }}
                      style={styles.ImageBackground_140_11763}
                    />
                  </View>
                </View>
                <View style={styles.View_24_1551}>
                  <View style={styles.View_24_1552}>
                    <Text style={styles.Text_24_1552}>Edit Actions...</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_24_1665}>
              <View style={styles.View_24_1666}>
                <View style={styles.View_24_1667}>
                  <Text style={styles.Text_24_1667}>iOS 15 Kit for Figma</Text>
                </View>
                <View style={styles.View_24_1668}>
                  <Text style={styles.Text_24_1668}>figma.com</Text>
                </View>
                <View style={styles.View_24_1669}>
                  <View style={styles.View_24_1670}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b66e/72ae/f581deb763547edda50390f6b87d3858"
                      }}
                      style={styles.ImageBackground_24_1671}
                    />
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce57/3e3b/a9f3f4cb2c8cca3bfb4008e2e57d4c97"
                  }}
                  style={styles.ImageBackground_71_6061}
                />
              </View>
              <View style={styles.View_24_1677} />
              <View style={styles.View_24_1678}>
                <View style={styles.View_24_1679}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19ec/0f92/b336c4cd857e63e18df321b8c1518d78"
                    }}
                    style={styles.ImageBackground_I24_1679_23_2668}
                  />
                  <View style={styles.View_I24_1679_23_2675}>
                    <Text style={styles.Text_I24_1679_23_2675}>AirDrop</Text>
                  </View>
                </View>
                <View style={styles.View_24_1680}>
                  <View style={styles.View_I24_1680_23_2627}>
                    <View style={styles.View_I24_1680_23_3114}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/561b/91a1/672ad7fe28d808a5ab6234d877378537"
                        }}
                        style={styles.ImageBackground_I24_1680_23_3115}
                      />
                    </View>
                    <View style={styles.View_I24_1680_23_3111}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe2b/e76f/771cc5fe8e60a94a67fad25966fcc222"
                        }}
                        style={styles.ImageBackground_I24_1680_23_3113}
                      />
                    </View>
                  </View>
                  <View style={styles.View_I24_1680_23_2630}>
                    <Text style={styles.Text_I24_1680_23_2630}>First Last</Text>
                  </View>
                </View>
                <View style={styles.View_24_1681}>
                  <View style={styles.View_I24_1681_24_1489}>
                    <View style={styles.View_I24_1681_24_1490}>
                      <View style={styles.View_I24_1681_24_1491} />
                      <View style={styles.View_I24_1681_24_1492}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf31/21ff/776b119f720263a261c01228c66c0431"
                          }}
                          style={styles.ImageBackground_I24_1681_24_1493}
                        />
                      </View>
                      <View style={styles.View_I24_1681_24_1494}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bae/a9b1/1edbe60ced548422b79ad1dcd704636c"
                          }}
                          style={styles.ImageBackground_I24_1681_24_1495}
                        />
                      </View>
                      <View style={styles.View_I24_1681_24_1496}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e50/4a9f/529ea171d871c828548370259b591788"
                          }}
                          style={styles.ImageBackground_I24_1681_24_1497}
                        />
                      </View>
                    </View>
                    <View style={styles.View_I24_1681_24_1498}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe2b/e76f/771cc5fe8e60a94a67fad25966fcc222"
                        }}
                        style={styles.ImageBackground_I24_1681_24_1499}
                      />
                    </View>
                  </View>
                  <View style={styles.View_I24_1681_24_1500}>
                    <Text style={styles.Text_I24_1681_24_1500}>Group</Text>
                  </View>
                  <View style={styles.View_I24_1681_24_1501}>
                    <Text style={styles.Text_I24_1681_24_1501}>2 People</Text>
                  </View>
                </View>
                <View style={styles.View_24_1682}>
                  <View style={styles.View_I24_1682_23_2627}>
                    <View style={styles.View_I24_1682_23_3114}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f905/70da/ff2a19516ccaba1a336f453f6a2ed943"
                        }}
                        style={styles.ImageBackground_I24_1682_23_3115}
                      />
                    </View>
                    <View style={styles.View_I24_1682_23_3111}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe2b/e76f/771cc5fe8e60a94a67fad25966fcc222"
                        }}
                        style={styles.ImageBackground_I24_1682_23_3113}
                      />
                    </View>
                  </View>
                  <View style={styles.View_I24_1682_23_2630}>
                    <Text style={styles.Text_I24_1682_23_2630}>First Last</Text>
                  </View>
                </View>
                <View style={styles.View_24_1683}>
                  <View style={styles.View_I24_1683_23_2627}>
                    <View style={styles.View_I24_1683_23_3114}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/561b/91a1/672ad7fe28d808a5ab6234d877378537"
                        }}
                        style={styles.ImageBackground_I24_1683_23_3115}
                      />
                    </View>
                    <View style={styles.View_I24_1683_23_3111}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe2b/e76f/771cc5fe8e60a94a67fad25966fcc222"
                        }}
                        style={styles.ImageBackground_I24_1683_23_3113}
                      />
                    </View>
                  </View>
                  <View style={styles.View_I24_1683_23_2630}>
                    <Text style={styles.Text_I24_1683_23_2630}>First Last</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_24_1684} />
              <View style={styles.View_24_1685}>
                <View style={styles.View_24_1686}>
                  <View style={styles.View_I24_1686_23_3033}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce2e/ee7e/423d71ce4feab6cb612e6f4ca5ec62a9"
                      }}
                      style={styles.ImageBackground_I24_1686_23_3035}
                    />
                  </View>
                  <View style={styles.View_I24_1686_23_2654}>
                    <Text style={styles.Text_I24_1686_23_2654}>App Name</Text>
                  </View>
                </View>
                <View style={styles.View_24_1687}>
                  <View style={styles.View_I24_1687_23_3033}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce2e/ee7e/423d71ce4feab6cb612e6f4ca5ec62a9"
                      }}
                      style={styles.ImageBackground_I24_1687_23_3035}
                    />
                  </View>
                  <View style={styles.View_I24_1687_23_2654}>
                    <Text style={styles.Text_I24_1687_23_2654}>App Name</Text>
                  </View>
                </View>
                <View style={styles.View_24_1688}>
                  <View style={styles.View_I24_1688_23_3033}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce2e/ee7e/423d71ce4feab6cb612e6f4ca5ec62a9"
                      }}
                      style={styles.ImageBackground_I24_1688_23_3035}
                    />
                  </View>
                  <View style={styles.View_I24_1688_23_2654}>
                    <Text style={styles.Text_I24_1688_23_2654}>App Name</Text>
                  </View>
                </View>
                <View style={styles.View_24_1689}>
                  <View style={styles.View_I24_1689_23_3033}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce2e/ee7e/423d71ce4feab6cb612e6f4ca5ec62a9"
                      }}
                      style={styles.ImageBackground_I24_1689_23_3035}
                    />
                  </View>
                  <View style={styles.View_I24_1689_23_2654}>
                    <Text style={styles.Text_I24_1689_23_2654}>App Name</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_24_1690}>
                <View style={styles.View_24_1821}>
                  <View style={styles.View_24_1822}>
                    <View style={styles.View_24_1823}>
                      <Text style={styles.Text_24_1823}>Copy Link</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/54b6/ec1b/60325700551fa994b5d312cb74b150c0"
                      }}
                      style={styles.ImageBackground_140_11764}
                    />
                  </View>
                </View>
                <View style={styles.View_24_1691}>
                  <View style={styles.View_24_1692}>
                    <View style={styles.View_24_1693}>
                      <Text style={styles.Text_24_1693}>
                        Add to Reading List
                      </Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f462/0e4c/349e0a281be7a353e5d67badd9282dc3"
                      }}
                      style={styles.ImageBackground_140_11767}
                    />
                  </View>
                  <View style={styles.View_24_1695} />
                  <View style={styles.View_24_1696}>
                    <View style={styles.View_24_1697}>
                      <Text style={styles.Text_24_1697}>Add Bookmark</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bf1/f8fd/808e36058c0cace86c0241dc5945cf28"
                      }}
                      style={styles.ImageBackground_140_11770}
                    />
                  </View>
                  <View style={styles.View_24_1699} />
                  <View style={styles.View_24_1700}>
                    <View style={styles.View_24_1701}>
                      <Text style={styles.Text_24_1701}>Add to Favorites</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d150/c241/0ecaeb3d30a4fe99a10057d04ac091f4"
                      }}
                      style={styles.ImageBackground_140_11773}
                    />
                  </View>
                  <View style={styles.View_24_1703} />
                  <View style={styles.View_24_1704}>
                    <View style={styles.View_24_1705}>
                      <Text style={styles.Text_24_1705}>Find on Page</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/339b/9360/3a8c72d877b13dca8d8bfbcae16b9bf9"
                      }}
                      style={styles.ImageBackground_140_11776}
                    />
                  </View>
                </View>
                <View style={styles.View_24_1707}>
                  <View style={styles.View_24_1708}>
                    <Text style={styles.Text_24_1708}>Edit Actions...</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("367.62295081967216%") },
  View_140_5515: {
    width: wp("86.85831622176592%"),
    minWidth: wp("86.85831622176592%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.570841889117044%"),
    top: hp("8.743169398907105%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_23_2457: {
    flexGrow: 1,
    width: wp("86.85831622176592%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I23_2457_5_19: {
    flexGrow: 1,
    width: wp("86.85831622176592%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I23_2457_5_20: {
    width: wp("51.129363449691986%"),
    minWidth: wp("51.129363449691986%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I23_2457_5_21: {
    width: wp("5.749486652977413%"),
    minWidth: wp("5.749486652977413%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I23_2457_5_22: {
    width: wp("42.09445585215606%"),
    minWidth: wp("42.09445585215606%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.034907597535934%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I23_2457_5_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I23_2457_5_23: {
    width: wp("32.4435318275154%"),
    minWidth: wp("32.4435318275154%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.41478439425052%"),
    top: hp("2.185792349726775%"),
    justifyContent: "center"
  },
  Text_I23_2457_5_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I23_2457_5_24: {
    flexGrow: 1,
    width: wp("86.85831622176592%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.021857923497267%"),
    backgroundColor: "rgba(235, 235, 235, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_140_5546: {
    width: wp("5.749486652977413%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_23_2458: {
    width: wp("86.85831622176592%"),
    minWidth: wp("86.85831622176592%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.570841889117044%"),
    top: hp("29.6448087431694%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I23_2458_10_2304: {
    flexGrow: 1,
    width: wp("7.289527720739219%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I23_2458_10_2304: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I23_2458_10_2303: {
    flexGrow: 1,
    width: wp("86.85831622176592%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.333333333333329%"),
    backgroundColor: "rgba(235, 235, 235, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_23_2459: {
    width: wp("36.75564681724846%"),
    minWidth: wp("36.75564681724846%"),
    height: hp("172.40437158469945%"),
    minHeight: hp("172.40437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.570841889117044%"),
    top: hp("46.85792349726776%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_23_2460: {
    width: wp("10.677618069815194%"),
    minWidth: wp("10.677618069815194%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_23_2460: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_23_2461: {
    width: wp("36.75564681724846%"),
    minWidth: wp("36.75564681724846%"),
    height: hp("164.75409836065575%"),
    minHeight: hp("164.75409836065575%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_23_2462: {
    width: wp("19.50718685831622%"),
    minWidth: wp("19.50718685831622%"),
    height: hp("147.26775956284152%"),
    minHeight: hp("147.26775956284152%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.248459958932237%"),
    top: hp("8.333333333333336%")
  },
  View_23_2463: {
    width: wp("19.50718685831622%"),
    minWidth: wp("19.50718685831622%"),
    height: hp("147.26775956284152%"),
    minHeight: hp("147.26775956284152%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_23_2464: {
    width: wp("13.963039014373715%"),
    minWidth: wp("13.963039014373715%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_23_2464: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_24_1276: {
    width: wp("19.50718685831622%"),
    minWidth: wp("19.50718685831622%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.53005464480875%"),
    justifyContent: "center"
  },
  Text_24_1276: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_24_1277: {
    width: wp("13.963039014373715%"),
    minWidth: wp("13.963039014373715%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32.923497267759565%"),
    justifyContent: "center"
  },
  Text_24_1277: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_24_1278: {
    width: wp("10.164271047227926%"),
    minWidth: wp("10.164271047227926%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("47.814207650273225%"),
    justifyContent: "center"
  },
  Text_24_1278: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_24_1279: {
    width: wp("19.50718685831622%"),
    minWidth: wp("19.50718685831622%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("62.978142076502714%"),
    justifyContent: "center"
  },
  Text_24_1279: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_24_1280: {
    width: wp("13.03901437371663%"),
    minWidth: wp("13.03901437371663%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("80.1912568306011%"),
    justifyContent: "center"
  },
  Text_24_1280: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_24_1281: {
    width: wp("18.583162217659137%"),
    minWidth: wp("18.583162217659137%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("96.72131147540983%"),
    justifyContent: "center"
  },
  Text_24_1281: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_24_1282: {
    width: wp("13.03901437371663%"),
    minWidth: wp("13.03901437371663%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("113.11475409836066%"),
    justifyContent: "center"
  },
  Text_24_1282: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_24_1283: {
    width: wp("9.240246406570842%"),
    minWidth: wp("9.240246406570842%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("128.0054644808743%"),
    justifyContent: "center"
  },
  Text_24_1283: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_24_1284: {
    width: wp("18.583162217659137%"),
    minWidth: wp("18.583162217659137%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("143.98907103825138%"),
    justifyContent: "center"
  },
  Text_24_1284: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_23_2468: {
    width: wp("13.963039014373715%"),
    minWidth: wp("13.963039014373715%"),
    height: hp("164.75409836065575%"),
    minHeight: hp("164.75409836065575%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_24_1285: {
    width: wp("7.392197125256674%"),
    minWidth: wp("7.392197125256674%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2854209445585214%"),
    top: hp("4.371584699453557%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_24_1286: {
    flexGrow: 1,
    width: wp("6.673511293634498%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.35934291581108724%"),
    top: hp("0%")
  },
  View_24_1287: {
    width: wp("6.468172092946893%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_24_1288: {
    width: wp("6.468172092946893%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_24_1289: {
    width: wp("2.0533880903490758%"),
    height: hp("2.73224043715847%"),
    top: hp("6.0109289617486255%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.62012320328542%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_24_1290: {
    width: wp("2.0533880903490758%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_24_1291: {
    flexGrow: 1,
    width: wp("7.392197125256674%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.289617486338791%"),
    justifyContent: "flex-end"
  },
  Text_24_1291: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_24_1469: {
    width: wp("7.392197125256674%"),
    minWidth: wp("7.392197125256674%"),
    height: hp("13.387978142076504%"),
    minHeight: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2854209445585214%"),
    top: hp("19.80874316939891%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_24_1470: {
    flexGrow: 1,
    width: wp("6.673511293634498%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.35934291581108724%"),
    top: hp("0%")
  },
  View_24_1471: {
    width: wp("6.468172092946893%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_24_1472: {
    width: wp("6.468172092946893%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(242, 242, 247, 1)"
  },
  View_24_1478: {
    width: wp("3.0800821355236137%"),
    height: hp("4.098360655737705%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9753593429158105%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_24_1479: {
    width: wp("3.0800821355236137%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_24_1483: {
    width: wp("2.2587268993839835%"),
    height: hp("3.0054644808743167%"),
    top: hp("3.2786885245901516%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.850102669404519%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_24_1484: {
    width: wp("2.2587268993839835%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_24_1485: {
    width: wp("1.8480492813141685%"),
    height: hp("2.459016393442623%"),
    top: hp("5.191256830601091%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8993839835728963%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_24_1486: {
    width: wp("1.8480492813141685%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_24_1473: {
    width: wp("2.0533880903490758%"),
    height: hp("2.73224043715847%"),
    top: hp("6.010928961748633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.62012320328542%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_24_1474: {
    width: wp("2.0533880903490758%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_24_1476: {
    flexGrow: 1,
    width: wp("7.392197125256674%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.289617486338798%"),
    justifyContent: "flex-end"
  },
  Text_24_1476: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_24_1477: {
    flexGrow: 1,
    width: wp("7.392197125256674%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.612021857923494%"),
    justifyContent: "flex-end"
  },
  Text_24_1477: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_24_1303: {
    width: wp("6.160164271047227%"),
    minWidth: wp("6.160164271047227%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.901437371663243%"),
    top: hp("37.568306010928964%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_24_1304: {
    flexGrow: 1,
    width: wp("6.160164271047227%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_24_1311: {
    flexGrow: 1,
    width: wp("4.1067761806981515%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0266940451745388%"),
    top: hp("8.743169398907085%"),
    justifyContent: "flex-end"
  },
  Text_24_1311: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_24_1312: {
    width: wp("6.160164271047227%"),
    minWidth: wp("6.160164271047227%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.901437371663243%"),
    top: hp("52.459016393442624%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_24_1313: {
    flexGrow: 1,
    width: wp("6.160164271047227%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_24_1314: {
    width: wp("6.160164271047227%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_24_1315: {
    flexGrow: 1,
    width: wp("5.646817248459959%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3080082135523625%"),
    top: hp("8.743169398907085%"),
    justifyContent: "flex-end"
  },
  Text_24_1315: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_24_1399: {
    width: wp("7.392197125256674%"),
    minWidth: wp("7.392197125256674%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2854209445585214%"),
    top: hp("67.34972677595628%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_24_1400: {
    flexGrow: 1,
    width: wp("6.673511293634498%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.35934291581108724%"),
    top: hp("0%")
  },
  View_24_1401: {
    width: wp("6.468172092946893%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_24_1402: {
    width: wp("6.468172092946893%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_24_1403: {
    width: wp("2.0533880903490758%"),
    height: hp("2.73224043715847%"),
    top: hp("6.010928961748647%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.62012320328542%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_24_1404: {
    width: wp("2.0533880903490758%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderTopLeftRadius: 4.333333492279053,
    borderTopRightRadius: 4.333333492279053,
    borderBottomLeftRadius: 4.333333492279053,
    borderBottomRightRadius: 4.333333492279053
  },
  View_24_1405: {
    flexGrow: 1,
    width: wp("7.392197125256674%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.289617486338784%"),
    justifyContent: "flex-end"
  },
  Text_24_1405: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_23_2626: {
    width: wp("7.392197125256674%"),
    minWidth: wp("7.392197125256674%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2854209445585214%"),
    top: hp("84.56284153005465%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_23_2627: {
    flexGrow: 1,
    width: wp("6.673511293634498%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.35934291581108724%"),
    top: hp("0%")
  },
  View_23_3114: {
    width: wp("6.468172092946893%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_23_3115: {
    width: wp("6.468172092946893%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_23_3111: {
    width: wp("2.0533880903490758%"),
    height: hp("2.73224043715847%"),
    top: hp("6.010928961748618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.62012320328542%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_23_3113: {
    width: wp("2.0533880903490758%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_23_2630: {
    flexGrow: 1,
    width: wp("7.392197125256674%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.289617486338784%"),
    justifyContent: "flex-end"
  },
  Text_23_2630: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_24_1488: {
    width: wp("7.392197125256674%"),
    minWidth: wp("7.392197125256674%"),
    height: hp("13.387978142076504%"),
    minHeight: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2854209445585214%"),
    top: hp("100.00000000000001%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_24_1489: {
    flexGrow: 1,
    width: wp("6.673511293634498%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.35934291581108724%"),
    top: hp("0%")
  },
  View_24_1490: {
    width: wp("6.468172092946893%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_24_1491: {
    width: wp("6.468172092946893%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(44, 44, 46, 1)"
  },
  View_24_1492: {
    width: wp("3.0800821355236137%"),
    height: hp("4.098360655737705%"),
    top: hp("0.6830601092895847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9753593429158105%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_24_1493: {
    width: wp("3.0800821355236137%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_24_1494: {
    width: wp("2.2587268993839835%"),
    height: hp("3.0054644808743167%"),
    top: hp("3.2786885245901374%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.850102669404519%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_24_1495: {
    width: wp("2.2587268993839835%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_24_1496: {
    width: wp("1.8480492813141685%"),
    height: hp("2.459016393442623%"),
    top: hp("5.191256830601077%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8993839835728963%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_24_1497: {
    width: wp("1.8480492813141685%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_24_1498: {
    width: wp("2.0533880903490758%"),
    height: hp("2.73224043715847%"),
    top: hp("6.010928961748618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.62012320328542%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_24_1499: {
    width: wp("2.0533880903490758%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_24_1500: {
    flexGrow: 1,
    width: wp("7.392197125256674%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.289617486338784%"),
    justifyContent: "flex-end"
  },
  Text_24_1500: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_24_1501: {
    flexGrow: 1,
    width: wp("7.392197125256674%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.61202185792348%"),
    justifyContent: "flex-end"
  },
  Text_24_1501: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_23_2667: {
    width: wp("6.160164271047227%"),
    minWidth: wp("6.160164271047227%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.901437371663243%"),
    top: hp("117.75956284153004%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_23_2668: {
    flexGrow: 1,
    width: wp("6.160164271047227%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_23_2675: {
    flexGrow: 1,
    width: wp("4.1067761806981515%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0266940451745388%"),
    top: hp("8.743169398907128%"),
    justifyContent: "flex-end"
  },
  Text_23_2675: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_23_2652: {
    width: wp("6.160164271047227%"),
    minWidth: wp("6.160164271047227%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.901437371663243%"),
    top: hp("132.6502732240437%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_23_3033: {
    flexGrow: 1,
    width: wp("6.160164271047227%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_23_3035: {
    width: wp("6.160164271047227%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_23_2654: {
    flexGrow: 1,
    width: wp("5.646817248459959%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3080082135523625%"),
    top: hp("8.7431693989071%"),
    justifyContent: "flex-end"
  },
  Text_23_2654: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_23_2684: {
    width: wp("7.392197125256674%"),
    minWidth: wp("7.392197125256674%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2854209445585214%"),
    top: hp("147.5409836065574%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_23_2685: {
    flexGrow: 1,
    width: wp("6.673511293634498%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.35934291581108724%"),
    top: hp("0%")
  },
  View_23_3132: {
    width: wp("6.468172092946893%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_23_3133: {
    width: wp("6.468172092946893%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_23_3129: {
    width: wp("2.0533880903490758%"),
    height: hp("2.73224043715847%"),
    top: hp("6.010928961748618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.62012320328542%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_23_3131: {
    width: wp("2.0533880903490758%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderTopLeftRadius: 4.333333492279053,
    borderTopRightRadius: 4.333333492279053,
    borderBottomLeftRadius: 4.333333492279053,
    borderBottomRightRadius: 4.333333492279053
  },
  View_23_2688: {
    flexGrow: 1,
    width: wp("7.392197125256674%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.289617486338784%"),
    justifyContent: "flex-end"
  },
  Text_23_2688: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_23_2479: {
    width: wp("86.85831622176592%"),
    minWidth: wp("86.85831622176592%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.570841889117044%"),
    top: hp("228.0054644808743%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I23_2479_10_2311: {
    flexGrow: 1,
    width: wp("11.498973305954825%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I23_2479_10_2311: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I23_2479_10_2312: {
    flexGrow: 1,
    width: wp("86.85831622176592%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.333333333333343%"),
    backgroundColor: "rgba(235, 235, 235, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_23_2480: {
    width: wp("86.85831622176592%"),
    minWidth: wp("86.85831622176592%"),
    height: hp("113.66120218579235%"),
    minHeight: hp("113.66120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.570841889117044%"),
    top: hp("245.21857923497268%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_23_2481: {
    width: wp("13.03901437371663%"),
    minWidth: wp("13.03901437371663%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_23_2481: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_23_2482: {
    width: wp("86.85831622176592%"),
    minWidth: wp("86.85831622176592%"),
    height: hp("106.01092896174865%"),
    minHeight: hp("106.01092896174865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.65027322404373%")
  },
  View_23_2483: {
    width: wp("45.48254620123203%"),
    minWidth: wp("45.48254620123203%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2854209445585214%"),
    top: hp("0%")
  },
  View_23_2484: {
    width: wp("45.48254620123203%"),
    minWidth: wp("45.48254620123203%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_23_2485: {
    width: wp("4.620123203285421%"),
    minWidth: wp("4.620123203285421%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_23_2485: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_23_2486: {
    width: wp("3.696098562628337%"),
    minWidth: wp("3.696098562628337%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.7864476386037%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_23_2486: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_23_2487: {
    width: wp("86.85831622176592%"),
    minWidth: wp("86.85831622176592%"),
    height: hp("98.36065573770492%"),
    minHeight: hp("98.36065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043701%")
  },
  View_23_2726: {
    width: wp("38.50102669404517%"),
    minWidth: wp("38.50102669404517%"),
    height: hp("89.61748633879782%"),
    minHeight: hp("89.61748633879782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2854209445585214%"),
    top: hp("4.371584699453592%"),
    backgroundColor: "rgba(250, 250, 250, 0.9300000071525574)",
    overflow: "hidden"
  },
  View_23_2727: {
    flexGrow: 1,
    width: wp("35.21560574948665%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6427104722792603%"),
    top: hp("2.1857923497267393%")
  },
  View_23_2728: {
    width: wp("15.297741273100614%"),
    minWidth: wp("15.297741273100614%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.928131416837781%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_23_2728: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_23_2729: {
    width: wp("6.570841889117044%"),
    minWidth: wp("6.570841889117044%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.928131416837781%"),
    top: hp("2.7322404371584526%"),
    justifyContent: "flex-start"
  },
  Text_23_2729: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_23_3274: {
    width: wp("4.1067761806981515%"),
    minWidth: wp("4.1067761806981515%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_23_3278: {
    width: wp("1.8480494771405165%"),
    minWidth: wp("1.8480494771405165%"),
    height: hp("2.459016654009376%"),
    minHeight: hp("2.459016654009376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1293634496919935%"),
    top: hp("1.502732240437183%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_23_3280: {
    width: wp("1.8480494771405165%"),
    height: hp("2.459016654009376%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 3.90000057220459,
    borderTopRightRadius: 3.90000057220459,
    borderBottomLeftRadius: 3.90000057220459,
    borderBottomRightRadius: 3.90000057220459
  },
  ImageBackground_71_6059: {
    width: wp("3.0800821355236137%"),
    height: hp("4.098360655737705%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.13552361396304%")
  },
  View_23_2732: {
    flexGrow: 1,
    width: wp("38.50102669404517%"),
    height: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.90437158469939%"),
    backgroundColor: "rgba(60, 60, 67, 1)",
    opacity: 0.36000001430511475
  },
  View_23_2733: {
    flexGrow: 1,
    width: wp("38.50102669404517%"),
    height: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.70491803278685%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_24_1330: {
    width: wp("6.160164271047227%"),
    minWidth: wp("6.160164271047227%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6427104722792603%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I24_1330_24_1304: {
    flexGrow: 1,
    width: wp("6.160164271047227%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I24_1330_24_1311: {
    flexGrow: 1,
    width: wp("4.1067761806981515%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.026694045174537%"),
    top: hp("8.743169398907128%"),
    justifyContent: "flex-end"
  },
  Text_I24_1330_24_1311: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_24_1316: {
    width: wp("7.392197125256674%"),
    minWidth: wp("7.392197125256674%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.650924024640656%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I24_1316_24_1286: {
    flexGrow: 1,
    width: wp("6.673511293634498%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.35934291581108724%"),
    top: hp("0%")
  },
  View_I24_1316_24_1287: {
    width: wp("6.468172092946893%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I24_1316_24_1288: {
    width: wp("6.468172092946893%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I24_1316_24_1289: {
    width: wp("2.0533880903490758%"),
    height: hp("2.73224043715847%"),
    top: hp("6.010928961748618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.620123203285424%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I24_1316_24_1290: {
    width: wp("2.0533880903490758%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I24_1316_24_1291: {
    flexGrow: 1,
    width: wp("7.392197125256674%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.289617486338784%"),
    justifyContent: "flex-end"
  },
  Text_I24_1316_24_1291: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_24_1323: {
    width: wp("7.392197125256674%"),
    minWidth: wp("7.392197125256674%"),
    height: hp("13.387978142076504%"),
    minHeight: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.891170431211496%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I24_1323_24_1470: {
    flexGrow: 1,
    width: wp("6.673511293634498%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3593429158110908%"),
    top: hp("0%")
  },
  View_I24_1323_24_1471: {
    width: wp("6.468172092946893%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I24_1323_24_1472: {
    width: wp("6.468172092946893%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(242, 242, 247, 1)"
  },
  View_I24_1323_24_1478: {
    width: wp("3.0800821355236137%"),
    height: hp("4.098360655737705%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9753593429158123%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I24_1323_24_1479: {
    width: wp("3.0800821355236137%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I24_1323_24_1483: {
    width: wp("2.2587268993839835%"),
    height: hp("3.0054644808743167%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8501026694045173%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I24_1323_24_1484: {
    width: wp("2.2587268993839835%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I24_1323_24_1485: {
    width: wp("1.8480492813141685%"),
    height: hp("2.459016393442623%"),
    top: hp("5.191256830601105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8993839835728927%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I24_1323_24_1486: {
    width: wp("1.8480492813141685%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I24_1323_24_1473: {
    width: wp("2.0533880903490758%"),
    height: hp("2.73224043715847%"),
    top: hp("6.010928961748618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.62012320328542%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I24_1323_24_1474: {
    width: wp("2.0533880903490758%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I24_1323_24_1476: {
    flexGrow: 1,
    width: wp("7.392197125256674%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.289617486338784%"),
    justifyContent: "flex-end"
  },
  Text_I24_1323_24_1476: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_I24_1323_24_1477: {
    flexGrow: 1,
    width: wp("7.392197125256674%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.61202185792348%"),
    justifyContent: "flex-end"
  },
  Text_I24_1323_24_1477: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_24_1337: {
    width: wp("7.392197125256674%"),
    minWidth: wp("7.392197125256674%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.131416837782346%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I24_1337_24_1286: {
    flexGrow: 1,
    width: wp("6.673511293634498%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3593429158110837%"),
    top: hp("0%")
  },
  View_I24_1337_24_1287: {
    width: wp("6.468172092946893%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I24_1337_24_1288: {
    width: wp("6.468172092946893%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I24_1337_24_1289: {
    width: wp("2.0533880903490758%"),
    height: hp("2.73224043715847%"),
    top: hp("6.010928961748618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.620123203285424%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I24_1337_24_1290: {
    width: wp("2.0533880903490758%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I24_1337_24_1291: {
    flexGrow: 1,
    width: wp("7.392197125256674%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.289617486338784%"),
    justifyContent: "flex-end"
  },
  Text_I24_1337_24_1291: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_24_1344: {
    width: wp("7.392197125256674%"),
    minWidth: wp("7.392197125256674%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.37166324435318%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I24_1344_24_1286: {
    flexGrow: 1,
    width: wp("6.673511293634498%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3593429158110908%"),
    top: hp("0%")
  },
  View_I24_1344_24_1287: {
    width: wp("6.468172092946893%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I24_1344_24_1288: {
    width: wp("6.468172092946893%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I24_1344_24_1289: {
    width: wp("2.0533880903490758%"),
    height: hp("2.73224043715847%"),
    top: hp("6.010928961748618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.620123203285424%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I24_1344_24_1290: {
    width: wp("2.0533880903490758%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I24_1344_24_1291: {
    flexGrow: 1,
    width: wp("7.392197125256674%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.289617486338784%"),
    justifyContent: "flex-end"
  },
  Text_I24_1344_24_1291: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_23_2739: {
    flexGrow: 1,
    width: wp("38.50102669404517%"),
    height: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28.346994535519116%"),
    backgroundColor: "rgba(60, 60, 67, 1)",
    opacity: 0.36000001430511475
  },
  View_23_2740: {
    flexGrow: 1,
    width: wp("38.50102669404517%"),
    height: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.14754098360652%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_24_1420: {
    width: wp("6.160164271047227%"),
    minWidth: wp("6.160164271047227%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6427104722792603%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I24_1420_24_1313: {
    flexGrow: 1,
    width: wp("6.160164271047227%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I24_1420_24_1314: {
    width: wp("6.160164271047227%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I24_1420_24_1315: {
    flexGrow: 1,
    width: wp("5.646817248459959%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.30800821355236074%"),
    top: hp("8.743169398907128%"),
    justifyContent: "flex-end"
  },
  Text_I24_1420_24_1315: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_24_1457: {
    width: wp("6.160164271047227%"),
    minWidth: wp("6.160164271047227%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.088295687885008%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I24_1457_24_1313: {
    flexGrow: 1,
    width: wp("6.160164271047227%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I24_1457_24_1314: {
    width: wp("6.160164271047227%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I24_1457_24_1315: {
    flexGrow: 1,
    width: wp("5.646817248459959%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3080082135523661%"),
    top: hp("8.743169398907128%"),
    justifyContent: "flex-end"
  },
  Text_I24_1457_24_1315: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_24_1461: {
    width: wp("6.160164271047227%"),
    minWidth: wp("6.160164271047227%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.53388090349076%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I24_1461_24_1313: {
    flexGrow: 1,
    width: wp("6.160164271047227%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I24_1461_24_1314: {
    width: wp("6.160164271047227%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I24_1461_24_1315: {
    flexGrow: 1,
    width: wp("5.646817248459959%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3080082135523625%"),
    top: hp("8.743169398907128%"),
    justifyContent: "flex-end"
  },
  Text_I24_1461_24_1315: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_24_1465: {
    width: wp("6.160164271047227%"),
    minWidth: wp("6.160164271047227%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.979466119096507%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I24_1465_24_1313: {
    flexGrow: 1,
    width: wp("6.160164271047227%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I24_1465_24_1314: {
    width: wp("6.160164271047227%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I24_1465_24_1315: {
    flexGrow: 1,
    width: wp("5.646817248459959%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3080082135523625%"),
    top: hp("8.743169398907128%"),
    justifyContent: "flex-end"
  },
  Text_I24_1465_24_1315: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_24_1542: {
    flexGrow: 1,
    width: wp("35.21560574948665%"),
    height: hp("40.36885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6427104722792603%"),
    top: hp("44.945355191256795%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_24_1805: {
    flexGrow: 1,
    width: wp("35.21560574948665%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_24_1806: {
    flexGrow: 1,
    width: wp("35.21560574948665%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_24_1807: {
    width: wp("7.905544147843943%"),
    minWidth: wp("7.905544147843943%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.642710472279262%"),
    top: hp("1.7759562841530396%"),
    justifyContent: "flex-start"
  },
  Text_24_1807: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_140_11759: {
    width: wp("1.742823167992813%"),
    minWidth: wp("1.742823167992813%"),
    height: hp("2.853110058060109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.830122240759756%"),
    top: hp("1.8521334955601105%")
  },
  View_24_1543: {
    flexGrow: 1,
    width: wp("35.21560574948665%"),
    height: hp("26.434426229508194%"),
    minHeight: hp("26.434426229508194%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.743169398907128%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_24_1570: {
    flexGrow: 1,
    width: wp("35.21560574948665%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_24_1571: {
    width: wp("15.297741273100614%"),
    minWidth: wp("15.297741273100614%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.642710472279262%"),
    top: hp("1.7759562841529828%"),
    justifyContent: "flex-start"
  },
  Text_24_1571: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_140_11760: {
    width: wp("2.419498764758727%"),
    minWidth: wp("2.419498764758727%"),
    height: hp("1.2609929986338797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.153346380903486%"),
    top: hp("2.648192025273204%")
  },
  View_24_1545: {
    flexGrow: 1,
    width: wp("35.21560574948665%"),
    height: hp("0.06830601092896176%"),
    minHeight: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.557377049180275%"),
    backgroundColor: "rgba(60, 60, 67, 1)",
    opacity: 0.36000001430511475
  },
  View_24_1567: {
    flexGrow: 1,
    width: wp("35.21560574948665%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.6256830601092815%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_24_1568: {
    width: wp("11.601642710472278%"),
    minWidth: wp("11.601642710472278%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.642710472279262%"),
    top: hp("1.7759562841529828%"),
    justifyContent: "flex-start"
  },
  Text_24_1568: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_140_11761: {
    width: wp("1.892816751155031%"),
    minWidth: wp("1.892816751155031%"),
    height: hp("2.1704501793032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.680128657597535%"),
    top: hp("2.193463434938508%")
  },
  View_24_1547: {
    flexGrow: 1,
    width: wp("35.21560574948665%"),
    height: hp("0.06830601092896176%"),
    minHeight: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.183060109289556%"),
    backgroundColor: "rgba(60, 60, 67, 1)",
    opacity: 0.36000001430511475
  },
  View_24_1564: {
    flexGrow: 1,
    width: wp("35.21560574948665%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.251366120218563%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_24_1565: {
    width: wp("12.73100616016427%"),
    minWidth: wp("12.73100616016427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.642710472279262%"),
    top: hp("1.7759562841529828%"),
    justifyContent: "flex-start"
  },
  Text_24_1565: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_140_11762: {
    width: wp("1.89265421528591%"),
    minWidth: wp("1.89265421528591%"),
    height: hp("2.406720385525396%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.680329183778227%"),
    top: hp("2.0753287226775683%")
  },
  View_24_1549: {
    flexGrow: 1,
    width: wp("35.21560574948665%"),
    height: hp("0.06830601092896176%"),
    minHeight: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.808743169398838%"),
    backgroundColor: "rgba(60, 60, 67, 1)",
    opacity: 0.36000001430511475
  },
  View_24_1561: {
    flexGrow: 1,
    width: wp("35.21560574948665%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.877049180327845%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_24_1562: {
    width: wp("10.266940451745379%"),
    minWidth: wp("10.266940451745379%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.642710472279262%"),
    top: hp("1.7759562841529828%"),
    justifyContent: "flex-start"
  },
  Text_24_1562: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_140_11763: {
    width: wp("1.6047608925821355%"),
    minWidth: wp("1.6047608925821355%"),
    height: hp("2.155708354678962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.96808425308008%"),
    top: hp("2.200834347250634%")
  },
  View_24_1551: {
    width: wp("35.21560574948665%"),
    minWidth: wp("35.21560574948665%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37.36338797814204%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_24_1552: {
    width: wp("33.572895277207394%"),
    minWidth: wp("33.572895277207394%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.642710472279262%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_24_1552: {
    color: "rgba(0, 122, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_24_1665: {
    width: wp("38.50102669404517%"),
    minWidth: wp("38.50102669404517%"),
    height: hp("89.61748633879782%"),
    minHeight: hp("89.61748633879782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.07186858316222%"),
    top: hp("4.371584699453592%"),
    backgroundColor: "rgba(28, 28, 30, 1)",
    overflow: "hidden"
  },
  View_24_1666: {
    flexGrow: 1,
    width: wp("35.21560574948665%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.642710472279262%"),
    top: hp("2.1857923497267393%")
  },
  View_24_1667: {
    width: wp("15.297741273100614%"),
    minWidth: wp("15.297741273100614%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.928131416837779%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_24_1667: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_24_1668: {
    width: wp("6.570841889117044%"),
    minWidth: wp("6.570841889117044%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.928131416837779%"),
    top: hp("2.7322404371584526%"),
    justifyContent: "flex-start"
  },
  Text_24_1668: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_24_1669: {
    width: wp("4.1067761806981515%"),
    minWidth: wp("4.1067761806981515%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(44, 44, 46, 1)"
  },
  View_24_1670: {
    width: wp("1.8480494771405165%"),
    minWidth: wp("1.8480494771405165%"),
    height: hp("2.459016654009376%"),
    minHeight: hp("2.459016654009376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1293634496919935%"),
    top: hp("1.502732240437183%"),
    backgroundColor: "rgba(55, 27, 27, 1)",
    overflow: "hidden"
  },
  ImageBackground_24_1671: {
    width: wp("1.8480494771405165%"),
    height: hp("2.459016654009376%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 3.90000057220459,
    borderTopRightRadius: 3.90000057220459,
    borderBottomLeftRadius: 3.90000057220459,
    borderBottomRightRadius: 3.90000057220459
  },
  ImageBackground_71_6061: {
    width: wp("3.0800821355236137%"),
    height: hp("4.098360655737705%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.13552361396303%")
  },
  View_24_1677: {
    flexGrow: 1,
    width: wp("38.50102669404517%"),
    height: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.90437158469939%"),
    backgroundColor: "rgba(84, 84, 88, 1)",
    opacity: 0.6499999761581421
  },
  View_24_1678: {
    flexGrow: 1,
    width: wp("38.50102669404517%"),
    height: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12.70491803278685%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_24_1679: {
    width: wp("6.160164271047227%"),
    minWidth: wp("6.160164271047227%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.642710472279262%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I24_1679_23_2668: {
    flexGrow: 1,
    width: wp("6.160164271047227%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I24_1679_23_2675: {
    flexGrow: 1,
    width: wp("4.1067761806981515%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.026694045174537%"),
    top: hp("8.743169398907128%"),
    justifyContent: "flex-end"
  },
  Text_I24_1679_23_2675: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_24_1680: {
    width: wp("7.392197125256674%"),
    minWidth: wp("7.392197125256674%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.650924024640652%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I24_1680_23_2627: {
    flexGrow: 1,
    width: wp("6.673511293634498%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3593429158110908%"),
    top: hp("0%")
  },
  View_I24_1680_23_3114: {
    width: wp("6.468172092946893%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I24_1680_23_3115: {
    width: wp("6.468172092946893%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I24_1680_23_3111: {
    width: wp("2.0533880903490758%"),
    height: hp("2.73224043715847%"),
    top: hp("6.010928961748618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.6201232032854165%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I24_1680_23_3113: {
    width: wp("2.0533880903490758%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I24_1680_23_2630: {
    flexGrow: 1,
    width: wp("7.392197125256674%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.289617486338784%"),
    justifyContent: "flex-end"
  },
  Text_I24_1680_23_2630: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_24_1681: {
    width: wp("7.392197125256674%"),
    minWidth: wp("7.392197125256674%"),
    height: hp("13.387978142076504%"),
    minHeight: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.891170431211506%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I24_1681_24_1489: {
    flexGrow: 1,
    width: wp("6.673511293634498%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3593429158110695%"),
    top: hp("0%")
  },
  View_I24_1681_24_1490: {
    width: wp("6.468172092946893%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I24_1681_24_1491: {
    width: wp("6.468172092946893%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(44, 44, 46, 1)"
  },
  View_I24_1681_24_1492: {
    width: wp("3.0800821355236137%"),
    height: hp("4.098360655737705%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9753593429158229%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I24_1681_24_1493: {
    width: wp("3.0800821355236137%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I24_1681_24_1494: {
    width: wp("2.2587268993839835%"),
    height: hp("3.0054644808743167%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.850102669404521%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I24_1681_24_1495: {
    width: wp("2.2587268993839835%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I24_1681_24_1496: {
    width: wp("1.8480492813141685%"),
    height: hp("2.459016393442623%"),
    top: hp("5.191256830601105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8993839835729034%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I24_1681_24_1497: {
    width: wp("1.8480492813141685%"),
    height: hp("2.459016393442623%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I24_1681_24_1498: {
    width: wp("2.0533880903490758%"),
    height: hp("2.73224043715847%"),
    top: hp("6.010928961748618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.620123203285431%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I24_1681_24_1499: {
    width: wp("2.0533880903490758%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I24_1681_24_1500: {
    flexGrow: 1,
    width: wp("7.392197125256674%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.289617486338784%"),
    justifyContent: "flex-end"
  },
  Text_I24_1681_24_1500: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_I24_1681_24_1501: {
    flexGrow: 1,
    width: wp("7.392197125256674%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.61202185792348%"),
    justifyContent: "flex-end"
  },
  Text_I24_1681_24_1501: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_24_1682: {
    width: wp("7.392197125256674%"),
    minWidth: wp("7.392197125256674%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.13141683778234%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I24_1682_23_2627: {
    flexGrow: 1,
    width: wp("6.673511293634498%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3593429158110979%"),
    top: hp("0%")
  },
  View_I24_1682_23_3114: {
    width: wp("6.468172092946893%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I24_1682_23_3115: {
    width: wp("6.468172092946893%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I24_1682_23_3111: {
    width: wp("2.0533880903490758%"),
    height: hp("2.73224043715847%"),
    top: hp("6.010928961748618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.6201232032854165%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I24_1682_23_3113: {
    width: wp("2.0533880903490758%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I24_1682_23_2630: {
    flexGrow: 1,
    width: wp("7.392197125256674%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.289617486338784%"),
    justifyContent: "flex-end"
  },
  Text_I24_1682_23_2630: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_24_1683: {
    width: wp("7.392197125256674%"),
    minWidth: wp("7.392197125256674%"),
    height: hp("11.065573770491802%"),
    minHeight: hp("11.065573770491802%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.371663244353186%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I24_1683_23_2627: {
    flexGrow: 1,
    width: wp("6.673511293634498%"),
    height: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3593429158110837%"),
    top: hp("0%")
  },
  View_I24_1683_23_3114: {
    width: wp("6.468172092946893%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I24_1683_23_3115: {
    width: wp("6.468172092946893%"),
    height: hp("8.606556855915674%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I24_1683_23_3111: {
    width: wp("2.0533880903490758%"),
    height: hp("2.73224043715847%"),
    top: hp("6.010928961748618%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.6201232032854165%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I24_1683_23_3113: {
    width: wp("2.0533880903490758%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I24_1683_23_2630: {
    flexGrow: 1,
    width: wp("7.392197125256674%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.289617486338784%"),
    justifyContent: "flex-end"
  },
  Text_I24_1683_23_2630: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_24_1684: {
    flexGrow: 1,
    width: wp("38.50102669404517%"),
    height: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28.346994535519116%"),
    backgroundColor: "rgba(84, 84, 88, 1)",
    opacity: 0.6499999761581421
  },
  View_24_1685: {
    flexGrow: 1,
    width: wp("38.50102669404517%"),
    height: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.14754098360652%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_24_1686: {
    width: wp("6.160164271047227%"),
    minWidth: wp("6.160164271047227%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.642710472279262%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I24_1686_23_3033: {
    flexGrow: 1,
    width: wp("6.160164271047227%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I24_1686_23_3035: {
    width: wp("6.160164271047227%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I24_1686_23_2654: {
    flexGrow: 1,
    width: wp("5.646817248459959%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3080082135523625%"),
    top: hp("8.743169398907128%"),
    justifyContent: "flex-end"
  },
  Text_I24_1686_23_2654: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_24_1687: {
    width: wp("6.160164271047227%"),
    minWidth: wp("6.160164271047227%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.088295687885008%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I24_1687_23_3033: {
    flexGrow: 1,
    width: wp("6.160164271047227%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I24_1687_23_3035: {
    width: wp("6.160164271047227%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I24_1687_23_2654: {
    flexGrow: 1,
    width: wp("5.646817248459959%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3080082135523554%"),
    top: hp("8.743169398907128%"),
    justifyContent: "flex-end"
  },
  Text_I24_1687_23_2654: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_24_1688: {
    width: wp("6.160164271047227%"),
    minWidth: wp("6.160164271047227%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.533880903490754%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I24_1688_23_3033: {
    flexGrow: 1,
    width: wp("6.160164271047227%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I24_1688_23_3035: {
    width: wp("6.160164271047227%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I24_1688_23_2654: {
    flexGrow: 1,
    width: wp("5.646817248459959%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3080082135523696%"),
    top: hp("8.743169398907128%"),
    justifyContent: "flex-end"
  },
  Text_I24_1688_23_2654: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_24_1689: {
    width: wp("6.160164271047227%"),
    minWidth: wp("6.160164271047227%"),
    height: hp("10.51912568306011%"),
    minHeight: hp("10.51912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.979466119096514%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I24_1689_23_3033: {
    flexGrow: 1,
    width: wp("6.160164271047227%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I24_1689_23_3035: {
    width: wp("6.160164271047227%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  View_I24_1689_23_2654: {
    flexGrow: 1,
    width: wp("5.646817248459959%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3080082135523554%"),
    top: hp("8.743169398907128%"),
    justifyContent: "flex-end"
  },
  Text_I24_1689_23_2654: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.06599999964237213,
    textTransform: "none"
  },
  View_24_1690: {
    flexGrow: 1,
    width: wp("35.21560574948665%"),
    height: hp("40.36885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.642710472279262%"),
    top: hp("44.945355191256795%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_24_1821: {
    flexGrow: 1,
    width: wp("35.21560574948665%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(44, 44, 46, 1)",
    overflow: "hidden"
  },
  View_24_1822: {
    flexGrow: 1,
    width: wp("35.21560574948665%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(44, 44, 46, 1)"
  },
  View_24_1823: {
    width: wp("7.905544147843943%"),
    minWidth: wp("7.905544147843943%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.642710472279255%"),
    top: hp("1.7759562841530396%"),
    justifyContent: "flex-start"
  },
  Text_24_1823: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_140_11764: {
    width: wp("1.742823167992813%"),
    minWidth: wp("1.742823167992813%"),
    height: hp("2.853110058060109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.83012224075975%"),
    top: hp("1.8521334955601105%")
  },
  View_24_1691: {
    flexGrow: 1,
    width: wp("35.21560574948665%"),
    height: hp("26.434426229508194%"),
    minHeight: hp("26.434426229508194%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.743169398907128%"),
    backgroundColor: "rgba(44, 44, 46, 1)",
    overflow: "hidden"
  },
  View_24_1692: {
    flexGrow: 1,
    width: wp("35.21560574948665%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(44, 44, 46, 1)"
  },
  View_24_1693: {
    width: wp("15.297741273100614%"),
    minWidth: wp("15.297741273100614%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.642710472279255%"),
    top: hp("1.7759562841529828%"),
    justifyContent: "flex-start"
  },
  Text_24_1693: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_140_11767: {
    width: wp("2.419498764758727%"),
    minWidth: wp("2.419498764758727%"),
    height: hp("1.2609929986338797%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.153346380903486%"),
    top: hp("2.648192025273204%")
  },
  View_24_1695: {
    flexGrow: 1,
    width: wp("35.21560574948665%"),
    height: hp("0.06830601092896176%"),
    minHeight: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.557377049180275%"),
    backgroundColor: "rgba(84, 84, 88, 1)",
    opacity: 0.6499999761581421
  },
  View_24_1696: {
    flexGrow: 1,
    width: wp("35.21560574948665%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.6256830601092815%"),
    backgroundColor: "rgba(44, 44, 46, 1)"
  },
  View_24_1697: {
    width: wp("11.601642710472278%"),
    minWidth: wp("11.601642710472278%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.642710472279255%"),
    top: hp("1.7759562841529828%"),
    justifyContent: "flex-start"
  },
  Text_24_1697: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_140_11770: {
    width: wp("1.892816751155031%"),
    minWidth: wp("1.892816751155031%"),
    height: hp("2.1704501793032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.680128657597535%"),
    top: hp("2.193463434938508%")
  },
  View_24_1699: {
    flexGrow: 1,
    width: wp("35.21560574948665%"),
    height: hp("0.06830601092896176%"),
    minHeight: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.183060109289556%"),
    backgroundColor: "rgba(84, 84, 88, 1)",
    opacity: 0.6499999761581421
  },
  View_24_1700: {
    flexGrow: 1,
    width: wp("35.21560574948665%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.251366120218563%"),
    backgroundColor: "rgba(44, 44, 46, 1)"
  },
  View_24_1701: {
    width: wp("12.73100616016427%"),
    minWidth: wp("12.73100616016427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.642710472279255%"),
    top: hp("1.7759562841529828%"),
    justifyContent: "flex-start"
  },
  Text_24_1701: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_140_11773: {
    width: wp("1.89265421528591%"),
    minWidth: wp("1.89265421528591%"),
    height: hp("2.406720385525396%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.68032918377824%"),
    top: hp("2.0753287226775683%")
  },
  View_24_1703: {
    flexGrow: 1,
    width: wp("35.21560574948665%"),
    height: hp("0.06830601092896176%"),
    minHeight: hp("0.06830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.808743169398838%"),
    backgroundColor: "rgba(84, 84, 88, 1)",
    opacity: 0.6499999761581421
  },
  View_24_1704: {
    flexGrow: 1,
    width: wp("35.21560574948665%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19.877049180327845%"),
    backgroundColor: "rgba(44, 44, 46, 1)"
  },
  View_24_1705: {
    width: wp("10.266940451745379%"),
    minWidth: wp("10.266940451745379%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.642710472279255%"),
    top: hp("1.7759562841529828%"),
    justifyContent: "flex-start"
  },
  Text_24_1705: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_140_11776: {
    width: wp("1.6047608925821355%"),
    minWidth: wp("1.6047608925821355%"),
    height: hp("2.155708354678962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.96808425308008%"),
    top: hp("2.200834347250634%")
  },
  View_24_1707: {
    width: wp("35.21560574948665%"),
    minWidth: wp("35.21560574948665%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37.36338797814204%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_24_1708: {
    width: wp("33.572895277207394%"),
    minWidth: wp("33.572895277207394%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.642710472279255%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_24_1708: {
    color: "rgba(10, 132, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
