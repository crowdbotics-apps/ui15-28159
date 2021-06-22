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
      <View style={styles.View_140_5524}>
        <View style={styles.View_74_2921}>
          <View style={styles.View_I74_2921_5_19}>
            <View style={styles.View_I74_2921_5_20}>
              <View style={styles.View_I74_2921_5_21} />
              <View style={styles.View_I74_2921_5_22}>
                <Text style={styles.Text_I74_2921_5_22}>Apple Pay</Text>
              </View>
            </View>
            <View style={styles.View_I74_2921_5_23}>
              <Text style={styles.Text_I74_2921_5_23}>
                Human Interface Guidelines: Apple Pay
              </Text>
            </View>
          </View>
          <View style={styles.View_I74_2921_5_24} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b95b/de52/6ffb3f9704012f70a31209d46b074fcc"
          }}
          style={styles.ImageBackground_140_5564}
        />
      </View>
      <View style={styles.View_126_5826}>
        <View style={styles.View_I126_5826_10_2304}>
          <Text style={styles.Text_I126_5826_10_2304}>Atoms</Text>
        </View>
        <View style={styles.View_I126_5826_10_2303} />
      </View>
      <View style={styles.View_126_6635}>
        <View style={styles.View_126_6020}>
          <View style={styles.View_126_6021}>
            <Text style={styles.Text_126_6021}>Detail Card</Text>
          </View>
          <View style={styles.View_126_6022}>
            <View style={styles.View_126_6023}>
              <View style={styles.View_126_6024}>
                <View style={styles.View_126_6025}>
                  <Text style={styles.Text_126_6025}>Light / Contact</Text>
                </View>
                <View style={styles.View_126_6026}>
                  <Text style={styles.Text_126_6026}>Light / Shipping</Text>
                </View>
                <View style={styles.View_126_6348}>
                  <Text style={styles.Text_126_6348}>Light / Shipping</Text>
                </View>
                <View style={styles.View_126_6417}>
                  <Text style={styles.Text_126_6417}>
                    Light / Shipping Method
                  </Text>
                </View>
                <View style={styles.View_126_6418}>
                  <Text style={styles.Text_126_6418}>Dark / Contact</Text>
                </View>
                <View style={styles.View_126_6419}>
                  <Text style={styles.Text_126_6419}>Dark / Shipping</Text>
                </View>
                <View style={styles.View_126_6420}>
                  <Text style={styles.Text_126_6420}>Dark / Shipping</Text>
                </View>
                <View style={styles.View_126_6421}>
                  <Text style={styles.Text_126_6421}>
                    Dark / Shipping Method
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_126_6029}>
              <View style={styles.View_126_5717}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c07/07f3/7c167ce39152f3e3a7e02eac4a633237"
                  }}
                  style={styles.ImageBackground_126_6408}
                />
                <View style={styles.View_126_5711}>
                  <View style={styles.View_126_5712}>
                    <View style={styles.View_126_5713}>
                      <Text style={styles.Text_126_5713}>Apple Card</Text>
                    </View>
                    <View style={styles.View_126_5714}>
                      <Text style={styles.Text_126_5714}>
                        10880 Malibu Point Malibu Cal...
                      </Text>
                    </View>
                    <View style={styles.View_126_5715}>
                      <Text style={styles.Text_126_5715}>•••• 1234</Text>
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a63e/acfe/0ed31e8e78d51c6f0114367ff561a8e4"
                    }}
                    style={styles.ImageBackground_140_12075}
                  />
                </View>
              </View>
              <View style={styles.View_126_6398}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbca/886b/dabf7fe6472e47c59264ad78c897c90a"
                  }}
                  style={styles.ImageBackground_126_6399}
                />
                <View style={styles.View_126_6401}>
                  <View style={styles.View_126_6402}>
                    <View style={styles.View_126_6403}>
                      <Text style={styles.Text_126_6403}>Contact</Text>
                    </View>
                    <View style={styles.View_126_6404}>
                      <Text style={styles.Text_126_6404}>
                        astark@starkindustries.com
                      </Text>
                    </View>
                    <View style={styles.View_126_6405}>
                      <Text style={styles.Text_126_6405}>(123) 456-7890</Text>
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a63e/acfe/0ed31e8e78d51c6f0114367ff561a8e4"
                    }}
                    style={styles.ImageBackground_140_12059}
                  />
                </View>
              </View>
              <View style={styles.View_126_6101}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f65b/a5c5/b5729a377a8d02e9aa6a594aadbff48c"
                  }}
                  style={styles.ImageBackground_126_6102}
                />
                <View style={styles.View_126_6104}>
                  <View style={styles.View_126_6105}>
                    <View style={styles.View_126_6106}>
                      <Text style={styles.Text_126_6106}>Shipping</Text>
                    </View>
                    <View style={styles.View_126_6107}>
                      <Text style={styles.Text_126_6107}>Anthony Stark</Text>
                    </View>
                    <View style={styles.View_126_6108}>
                      <Text style={styles.Text_126_6108}>
                        10880 Malibu Point
                      </Text>
                    </View>
                    <View style={styles.View_126_6119}>
                      <Text style={styles.Text_126_6119}>Malibu CA 90263</Text>
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a63e/acfe/0ed31e8e78d51c6f0114367ff561a8e4"
                    }}
                    style={styles.ImageBackground_140_12040}
                  />
                </View>
              </View>
              <View style={styles.View_126_6316}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1e6/131f/b2e1f2a3a7a191da751952b7420146ee"
                  }}
                  style={styles.ImageBackground_126_6317}
                />
                <View style={styles.View_126_6319}>
                  <View style={styles.View_126_6320}>
                    <View style={styles.View_126_6321}>
                      <Text style={styles.Text_126_6321}>Shipping</Text>
                    </View>
                    <View style={styles.View_126_6322}>
                      <Text style={styles.Text_126_6322}>Arrives 5-7 days</Text>
                    </View>
                  </View>
                  <View style={styles.View_126_6327}>
                    <View style={styles.View_126_6326}>
                      <Text style={styles.Text_126_6326}>$0.00</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a63e/acfe/0ed31e8e78d51c6f0114367ff561a8e4"
                      }}
                      style={styles.ImageBackground_140_12033}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_126_6409}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c07/07f3/7c167ce39152f3e3a7e02eac4a633237"
                  }}
                  style={styles.ImageBackground_126_6410}
                />
                <View style={styles.View_126_6411}>
                  <View style={styles.View_126_6412}>
                    <View style={styles.View_126_6413}>
                      <Text style={styles.Text_126_6413}>Apple Card</Text>
                    </View>
                    <View style={styles.View_126_6414}>
                      <Text style={styles.Text_126_6414}>
                        10880 Malibu Point Malibu Cal...
                      </Text>
                    </View>
                    <View style={styles.View_126_6415}>
                      <Text style={styles.Text_126_6415}>•••• 1234</Text>
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3276/55d5/40a5bd75e1aaf90a271963eadfdc5412"
                    }}
                    style={styles.ImageBackground_140_12161}
                  />
                </View>
              </View>
              <View style={styles.View_126_6092}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ca/ab1e/4c63b6157c301c65f862525a34a1afb6"
                  }}
                  style={styles.ImageBackground_126_6093}
                />
                <View style={styles.View_126_6095}>
                  <View style={styles.View_126_6096}>
                    <View style={styles.View_126_6097}>
                      <Text style={styles.Text_126_6097}>Contact</Text>
                    </View>
                    <View style={styles.View_126_6098}>
                      <Text style={styles.Text_126_6098}>
                        astark@starkindustries.com
                      </Text>
                    </View>
                    <View style={styles.View_126_6099}>
                      <Text style={styles.Text_126_6099}>(123) 456-7890</Text>
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3276/55d5/40a5bd75e1aaf90a271963eadfdc5412"
                    }}
                    style={styles.ImageBackground_140_12140}
                  />
                </View>
              </View>
              <View style={styles.View_126_6130}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dca2/fccd/dd09c75d64626dd284a434c2795d5fbe"
                  }}
                  style={styles.ImageBackground_126_6131}
                />
                <View style={styles.View_126_6133}>
                  <View style={styles.View_126_6134}>
                    <View style={styles.View_126_6135}>
                      <Text style={styles.Text_126_6135}>Shipping</Text>
                    </View>
                    <View style={styles.View_126_6136}>
                      <Text style={styles.Text_126_6136}>Anthony Stark</Text>
                    </View>
                    <View style={styles.View_126_6137}>
                      <Text style={styles.Text_126_6137}>
                        10880 Malibu Point
                      </Text>
                    </View>
                    <View style={styles.View_126_6138}>
                      <Text style={styles.Text_126_6138}>Malibu CA 90263</Text>
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3276/55d5/40a5bd75e1aaf90a271963eadfdc5412"
                    }}
                    style={styles.ImageBackground_140_12115}
                  />
                </View>
              </View>
              <View style={styles.View_126_6338}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f924/ee38/3f98395eefebf7187804a0b7134f7b2b"
                  }}
                  style={styles.ImageBackground_126_6339}
                />
                <View style={styles.View_126_6341}>
                  <View style={styles.View_126_6342}>
                    <View style={styles.View_126_6343}>
                      <Text style={styles.Text_126_6343}>Shipping</Text>
                    </View>
                    <View style={styles.View_126_6344}>
                      <Text style={styles.Text_126_6344}>Arrives 5-7 days</Text>
                    </View>
                  </View>
                  <View style={styles.View_126_6345}>
                    <View style={styles.View_126_6346}>
                      <Text style={styles.Text_126_6346}>$0.00</Text>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3276/55d5/40a5bd75e1aaf90a271963eadfdc5412"
                      }}
                      style={styles.ImageBackground_140_12106}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_126_6438}>
          <View style={styles.View_126_6439}>
            <Text style={styles.Text_126_6439}>Payment Details</Text>
          </View>
          <View style={styles.View_126_6440}>
            <View style={styles.View_126_6441}>
              <View style={styles.View_126_6442}>
                <View style={styles.View_126_6443}>
                  <Text style={styles.Text_126_6443}>Light / FaceID</Text>
                </View>
                <View style={styles.View_126_6444}>
                  <Text style={styles.Text_126_6444}>Light / TouchID</Text>
                </View>
                <View style={styles.View_126_6445}>
                  <Text style={styles.Text_126_6445}>Dark / FaceID</Text>
                </View>
                <View style={styles.View_126_6446}>
                  <Text style={styles.Text_126_6446}>Dark / TouchID</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_126_6447}>
              <View style={styles.View_126_6448}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb31/4327/4e8f08c947a089ec2a52188e5d7d485d"
                  }}
                  style={styles.ImageBackground_126_7050}
                />
                <View style={styles.View_126_6449}>
                  <View style={styles.View_126_6450}>
                    <View style={styles.View_126_6451}>
                      <Text style={styles.Text_126_6451}>
                        Pay Stark Industries
                      </Text>
                    </View>
                    <View style={styles.View_126_6452}>
                      <Text style={styles.Text_126_6452}>$1.99</Text>
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a63e/acfe/0ed31e8e78d51c6f0114367ff561a8e4"
                    }}
                    style={styles.ImageBackground_140_12207}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb31/4327/4e8f08c947a089ec2a52188e5d7d485d"
                  }}
                  style={styles.ImageBackground_126_6454}
                />
                <View style={styles.View_126_6455}>
                  <View style={styles.View_126_6456}>
                    <View style={styles.View_126_6457}>
                      <View style={styles.View_126_6458}>
                        <View style={styles.View_126_6459} />
                        <View style={styles.View_126_6460} />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f55/74bb/b3813a93d9cd7f1245b429a0fea92180"
                          }}
                          style={styles.ImageBackground_126_6461}
                        />
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34be/91fb/1e80a2becd07d93b0ca42f3f6cb4e661"
                        }}
                        style={styles.ImageBackground_126_6462}
                      />
                    </View>
                    <View style={styles.View_126_6463}>
                      <Text style={styles.Text_126_6463}>
                        Confirm with Side Button
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_126_6464}>
                    <View style={styles.View_I126_6464_5_3093} />
                  </View>
                </View>
              </View>
              <View style={styles.View_126_6465}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb31/4327/4e8f08c947a089ec2a52188e5d7d485d"
                  }}
                  style={styles.ImageBackground_126_7048}
                />
                <View style={styles.View_126_6466}>
                  <View style={styles.View_126_6467}>
                    <View style={styles.View_126_6468}>
                      <Text style={styles.Text_126_6468}>
                        Pay Stark Industries
                      </Text>
                    </View>
                    <View style={styles.View_126_6469}>
                      <Text style={styles.Text_126_6469}>$1.99</Text>
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a63e/acfe/0ed31e8e78d51c6f0114367ff561a8e4"
                    }}
                    style={styles.ImageBackground_140_12202}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb31/4327/4e8f08c947a089ec2a52188e5d7d485d"
                  }}
                  style={styles.ImageBackground_126_6471}
                />
                <View style={styles.View_126_6472}>
                  <View style={styles.View_126_6473}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b019/8e84/2a7196470c9c2e8881e319c113479859"
                      }}
                      style={styles.ImageBackground_140_12182}
                    />
                    <View style={styles.View_126_6475}>
                      <Text style={styles.Text_126_6475}>Pay with TouchID</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_126_6477}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6659/ec4a/a897a60fa45d348d73380a9b7a77563c"
                  }}
                  style={styles.ImageBackground_126_7049}
                />
                <View style={styles.View_126_6478}>
                  <View style={styles.View_126_6479}>
                    <View style={styles.View_126_6480}>
                      <Text style={styles.Text_126_6480}>
                        Pay Stark Industries
                      </Text>
                    </View>
                    <View style={styles.View_126_6481}>
                      <Text style={styles.Text_126_6481}>$1.99</Text>
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3276/55d5/40a5bd75e1aaf90a271963eadfdc5412"
                    }}
                    style={styles.ImageBackground_140_12193}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6659/ec4a/a897a60fa45d348d73380a9b7a77563c"
                  }}
                  style={styles.ImageBackground_126_6483}
                />
                <View style={styles.View_126_6484}>
                  <View style={styles.View_126_6485}>
                    <View style={styles.View_126_6486}>
                      <View style={styles.View_126_6487}>
                        <View style={styles.View_126_6488} />
                        <View style={styles.View_126_6489} />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1585/8efa/349d780d1950b774df9d5feb8ee164dd"
                          }}
                          style={styles.ImageBackground_126_6490}
                        />
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78e8/dc82/1a066b2074074aa9878db4dec4692a82"
                        }}
                        style={styles.ImageBackground_126_6491}
                      />
                    </View>
                    <View style={styles.View_126_6492}>
                      <Text style={styles.Text_126_6492}>
                        Confirm with Side Button
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_126_6493}>
                    <View style={styles.View_I126_6493_36_10050} />
                  </View>
                </View>
              </View>
              <View style={styles.View_126_6494}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6659/ec4a/a897a60fa45d348d73380a9b7a77563c"
                  }}
                  style={styles.ImageBackground_126_7267}
                />
                <View style={styles.View_126_6495}>
                  <View style={styles.View_126_6496}>
                    <View style={styles.View_126_6497}>
                      <Text style={styles.Text_126_6497}>
                        Pay Stark Industries
                      </Text>
                    </View>
                    <View style={styles.View_126_6498}>
                      <Text style={styles.Text_126_6498}>$1.99</Text>
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3276/55d5/40a5bd75e1aaf90a271963eadfdc5412"
                    }}
                    style={styles.ImageBackground_140_12188}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6659/ec4a/a897a60fa45d348d73380a9b7a77563c"
                  }}
                  style={styles.ImageBackground_126_6500}
                />
                <View style={styles.View_126_6501}>
                  <View style={styles.View_126_6502}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b019/8e84/2a7196470c9c2e8881e319c113479859"
                      }}
                      style={styles.ImageBackground_140_12185}
                    />
                    <View style={styles.View_126_6504}>
                      <Text style={styles.Text_126_6504}>Pay with TouchID</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_126_6217}>
          <View style={styles.View_126_6218}>
            <Text style={styles.Text_126_6218}>Summary Sheet</Text>
          </View>
          <View style={styles.View_126_6219}>
            <View style={styles.View_126_6220}>
              <View style={styles.View_126_6221}>
                <View style={styles.View_126_6222}>
                  <Text style={styles.Text_126_6222}>Light</Text>
                </View>
                <View style={styles.View_126_6223}>
                  <Text style={styles.Text_126_6223}>Dark</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_126_6226}>
              <View style={styles.View_126_5489}>
                <View style={styles.View_126_5468}>
                  <View style={styles.View_126_5469}>
                    <View style={styles.View_126_5470}>
                      <Text style={styles.Text_126_5470}>Pay</Text>
                    </View>
                    <View style={styles.View_126_5471}>
                      <Text style={styles.Text_126_5471}>􀣺</Text>
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50bc/3aed/23eff08ca77002d73f54887e305dc643"
                    }}
                    style={styles.ImageBackground_126_6588}
                  />
                </View>
                <View style={styles.View_126_6352}>
                  <View style={styles.View_126_6289}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c07/07f3/7c167ce39152f3e3a7e02eac4a633237"
                      }}
                      style={styles.ImageBackground_I126_6289_126_6408}
                    />
                    <View style={styles.View_I126_6289_126_5711}>
                      <View style={styles.View_I126_6289_126_5712}>
                        <View style={styles.View_I126_6289_126_5713}>
                          <Text style={styles.Text_I126_6289_126_5713}>
                            Apple Card
                          </Text>
                        </View>
                        <View style={styles.View_I126_6289_126_5714}>
                          <Text style={styles.Text_I126_6289_126_5714}>
                            10880 Malibu Point Malibu Cal...
                          </Text>
                        </View>
                        <View style={styles.View_I126_6289_126_5715}>
                          <Text style={styles.Text_I126_6289_126_5715}>
                            •••• 1234
                          </Text>
                        </View>
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a63e/acfe/0ed31e8e78d51c6f0114367ff561a8e4"
                        }}
                        style={styles.ImageBackground_I126_6289_140_12075}
                      />
                    </View>
                  </View>
                  <View style={styles.View_126_6422}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbca/886b/dabf7fe6472e47c59264ad78c897c90a"
                      }}
                      style={styles.ImageBackground_I126_6422_126_6399}
                    />
                    <View style={styles.View_I126_6422_126_6401}>
                      <View style={styles.View_I126_6422_126_6402}>
                        <View style={styles.View_I126_6422_126_6403}>
                          <Text style={styles.Text_I126_6422_126_6403}>
                            Contact
                          </Text>
                        </View>
                        <View style={styles.View_I126_6422_126_6404}>
                          <Text style={styles.Text_I126_6422_126_6404}>
                            astark@starkindustries.com
                          </Text>
                        </View>
                        <View style={styles.View_I126_6422_126_6405}>
                          <Text style={styles.Text_I126_6422_126_6405}>
                            (123) 456-7890
                          </Text>
                        </View>
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a63e/acfe/0ed31e8e78d51c6f0114367ff561a8e4"
                        }}
                        style={styles.ImageBackground_I126_6422_140_12059}
                      />
                    </View>
                  </View>
                  <View style={styles.View_126_6298}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f65b/a5c5/b5729a377a8d02e9aa6a594aadbff48c"
                      }}
                      style={styles.ImageBackground_I126_6298_126_6102}
                    />
                    <View style={styles.View_I126_6298_126_6104}>
                      <View style={styles.View_I126_6298_126_6105}>
                        <View style={styles.View_I126_6298_126_6106}>
                          <Text style={styles.Text_I126_6298_126_6106}>
                            Shipping
                          </Text>
                        </View>
                        <View style={styles.View_I126_6298_126_6107}>
                          <Text style={styles.Text_I126_6298_126_6107}>
                            Anthony Stark
                          </Text>
                        </View>
                        <View style={styles.View_I126_6298_126_6108}>
                          <Text style={styles.Text_I126_6298_126_6108}>
                            10880 Malibu Point
                          </Text>
                        </View>
                        <View style={styles.View_I126_6298_126_6119}>
                          <Text style={styles.Text_I126_6298_126_6119}>
                            Malibu CA 90263
                          </Text>
                        </View>
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a63e/acfe/0ed31e8e78d51c6f0114367ff561a8e4"
                        }}
                        style={styles.ImageBackground_I126_6298_140_12040}
                      />
                    </View>
                  </View>
                  <View style={styles.View_126_6353}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1e6/131f/b2e1f2a3a7a191da751952b7420146ee"
                      }}
                      style={styles.ImageBackground_I126_6353_126_6317}
                    />
                    <View style={styles.View_I126_6353_126_6319}>
                      <View style={styles.View_I126_6353_126_6320}>
                        <View style={styles.View_I126_6353_126_6321}>
                          <Text style={styles.Text_I126_6353_126_6321}>
                            Shipping
                          </Text>
                        </View>
                        <View style={styles.View_I126_6353_126_6322}>
                          <Text style={styles.Text_I126_6353_126_6322}>
                            Arrives 5-7 days
                          </Text>
                        </View>
                      </View>
                      <View style={styles.View_I126_6353_126_6327}>
                        <View style={styles.View_I126_6353_126_6326}>
                          <Text style={styles.Text_I126_6353_126_6326}>
                            $0.00
                          </Text>
                        </View>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a63e/acfe/0ed31e8e78d51c6f0114367ff561a8e4"
                          }}
                          style={styles.ImageBackground_I126_6353_140_12033}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_126_6510}>
                <View style={styles.View_126_6511}>
                  <View style={styles.View_126_6512}>
                    <View style={styles.View_126_6513}>
                      <Text style={styles.Text_126_6513}>Pay</Text>
                    </View>
                    <View style={styles.View_126_6514}>
                      <Text style={styles.Text_126_6514}>􀣺</Text>
                    </View>
                  </View>
                  <View style={styles.View_126_6515}>
                    <View style={styles.View_126_6516}>
                      <Text style={styles.Text_126_6516}>􀆄</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_126_6517}>
                  <View style={styles.View_126_6518}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c07/07f3/7c167ce39152f3e3a7e02eac4a633237"
                      }}
                      style={styles.ImageBackground_I126_6518_126_6410}
                    />
                    <View style={styles.View_I126_6518_126_6411}>
                      <View style={styles.View_I126_6518_126_6412}>
                        <View style={styles.View_I126_6518_126_6413}>
                          <Text style={styles.Text_I126_6518_126_6413}>
                            Apple Card
                          </Text>
                        </View>
                        <View style={styles.View_I126_6518_126_6414}>
                          <Text style={styles.Text_I126_6518_126_6414}>
                            10880 Malibu Point Malibu Cal...
                          </Text>
                        </View>
                        <View style={styles.View_I126_6518_126_6415}>
                          <Text style={styles.Text_I126_6518_126_6415}>
                            •••• 1234
                          </Text>
                        </View>
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3276/55d5/40a5bd75e1aaf90a271963eadfdc5412"
                        }}
                        style={styles.ImageBackground_I126_6518_140_12161}
                      />
                    </View>
                  </View>
                  <View style={styles.View_126_6519}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ca/ab1e/4c63b6157c301c65f862525a34a1afb6"
                      }}
                      style={styles.ImageBackground_I126_6519_126_6093}
                    />
                    <View style={styles.View_I126_6519_126_6095}>
                      <View style={styles.View_I126_6519_126_6096}>
                        <View style={styles.View_I126_6519_126_6097}>
                          <Text style={styles.Text_I126_6519_126_6097}>
                            Contact
                          </Text>
                        </View>
                        <View style={styles.View_I126_6519_126_6098}>
                          <Text style={styles.Text_I126_6519_126_6098}>
                            astark@starkindustries.com
                          </Text>
                        </View>
                        <View style={styles.View_I126_6519_126_6099}>
                          <Text style={styles.Text_I126_6519_126_6099}>
                            (123) 456-7890
                          </Text>
                        </View>
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3276/55d5/40a5bd75e1aaf90a271963eadfdc5412"
                        }}
                        style={styles.ImageBackground_I126_6519_140_12140}
                      />
                    </View>
                  </View>
                  <View style={styles.View_126_6520}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dca2/fccd/dd09c75d64626dd284a434c2795d5fbe"
                      }}
                      style={styles.ImageBackground_I126_6520_126_6131}
                    />
                    <View style={styles.View_I126_6520_126_6133}>
                      <View style={styles.View_I126_6520_126_6134}>
                        <View style={styles.View_I126_6520_126_6135}>
                          <Text style={styles.Text_I126_6520_126_6135}>
                            Shipping
                          </Text>
                        </View>
                        <View style={styles.View_I126_6520_126_6136}>
                          <Text style={styles.Text_I126_6520_126_6136}>
                            Anthony Stark
                          </Text>
                        </View>
                        <View style={styles.View_I126_6520_126_6137}>
                          <Text style={styles.Text_I126_6520_126_6137}>
                            10880 Malibu Point
                          </Text>
                        </View>
                        <View style={styles.View_I126_6520_126_6138}>
                          <Text style={styles.Text_I126_6520_126_6138}>
                            Malibu CA 90263
                          </Text>
                        </View>
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3276/55d5/40a5bd75e1aaf90a271963eadfdc5412"
                        }}
                        style={styles.ImageBackground_I126_6520_140_12115}
                      />
                    </View>
                  </View>
                  <View style={styles.View_126_6521}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f924/ee38/3f98395eefebf7187804a0b7134f7b2b"
                      }}
                      style={styles.ImageBackground_I126_6521_126_6339}
                    />
                    <View style={styles.View_I126_6521_126_6341}>
                      <View style={styles.View_I126_6521_126_6342}>
                        <View style={styles.View_I126_6521_126_6343}>
                          <Text style={styles.Text_I126_6521_126_6343}>
                            Shipping
                          </Text>
                        </View>
                        <View style={styles.View_I126_6521_126_6344}>
                          <Text style={styles.Text_I126_6521_126_6344}>
                            Arrives 5-7 days
                          </Text>
                        </View>
                      </View>
                      <View style={styles.View_I126_6521_126_6345}>
                        <View style={styles.View_I126_6521_126_6346}>
                          <Text style={styles.Text_I126_6521_126_6346}>
                            $0.00
                          </Text>
                        </View>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3276/55d5/40a5bd75e1aaf90a271963eadfdc5412"
                          }}
                          style={styles.ImageBackground_I126_6521_140_12106}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_74_2922}>
        <View style={styles.View_I74_2922_10_2318}>
          <Text style={styles.Text_I74_2922_10_2318}>Templates</Text>
        </View>
        <View style={styles.View_I74_2922_10_2319} />
      </View>
      <View style={styles.View_74_2923}>
        <View style={styles.View_74_2924}>
          <Text style={styles.Text_74_2924}>Apple Pay</Text>
        </View>
        <View style={styles.View_74_2925}>
          <View style={styles.View_74_2926}>
            <View style={styles.View_74_2927}>
              <View style={styles.View_74_2928}>
                <Text style={styles.Text_74_2928}>Light / FaceID</Text>
              </View>
              <View style={styles.View_75_9144}>
                <Text style={styles.Text_75_9144}>Light / TouchID</Text>
              </View>
              <View style={styles.View_75_9145}>
                <Text style={styles.Text_75_9145}>Dark / FaceID</Text>
              </View>
              <View style={styles.View_75_9146}>
                <Text style={styles.Text_75_9146}>Dark / TouchID</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_74_2934}>
            <View style={styles.View_118_3931}>
              <View style={styles.View_118_3976}>
                <View style={styles.View_118_3977}>
                  <Text style={styles.Text_118_3977}>Double Click to Pay</Text>
                </View>
                <View style={styles.View_118_3978} />
              </View>
              <View style={styles.View_126_6642}>
                <View style={styles.View_I126_6642_126_5468}>
                  <View style={styles.View_I126_6642_126_5469}>
                    <View style={styles.View_I126_6642_126_5470}>
                      <Text style={styles.Text_I126_6642_126_5470}>Pay</Text>
                    </View>
                    <View style={styles.View_I126_6642_126_5471}>
                      <Text style={styles.Text_I126_6642_126_5471}>􀣺</Text>
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50bc/3aed/23eff08ca77002d73f54887e305dc643"
                    }}
                    style={styles.ImageBackground_I126_6642_126_6588}
                  />
                </View>
                <View style={styles.View_I126_6642_126_6352}>
                  <View style={styles.View_I126_6642_126_6289}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c07/07f3/7c167ce39152f3e3a7e02eac4a633237"
                      }}
                      style={styles.ImageBackground_I126_6642_126_6289_126_6408}
                    />
                    <View style={styles.View_I126_6642_126_6289_126_5711}>
                      <View style={styles.View_I126_6642_126_6289_126_5712}>
                        <View style={styles.View_I126_6642_126_6289_126_5713}>
                          <Text style={styles.Text_I126_6642_126_6289_126_5713}>
                            Apple Card
                          </Text>
                        </View>
                        <View style={styles.View_I126_6642_126_6289_126_5714}>
                          <Text style={styles.Text_I126_6642_126_6289_126_5714}>
                            10880 Malibu Point Malibu Cal...
                          </Text>
                        </View>
                        <View style={styles.View_I126_6642_126_6289_126_5715}>
                          <Text style={styles.Text_I126_6642_126_6289_126_5715}>
                            •••• 1234
                          </Text>
                        </View>
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a63e/acfe/0ed31e8e78d51c6f0114367ff561a8e4"
                        }}
                        style={
                          styles.ImageBackground_I126_6642_126_6289_140_12075
                        }
                      />
                    </View>
                  </View>
                  <View style={styles.View_I126_6642_126_6422}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbca/886b/dabf7fe6472e47c59264ad78c897c90a"
                      }}
                      style={styles.ImageBackground_I126_6642_126_6422_126_6399}
                    />
                    <View style={styles.View_I126_6642_126_6422_126_6401}>
                      <View style={styles.View_I126_6642_126_6422_126_6402}>
                        <View style={styles.View_I126_6642_126_6422_126_6403}>
                          <Text style={styles.Text_I126_6642_126_6422_126_6403}>
                            Contact
                          </Text>
                        </View>
                        <View style={styles.View_I126_6642_126_6422_126_6404}>
                          <Text style={styles.Text_I126_6642_126_6422_126_6404}>
                            astark@starkindustries.com
                          </Text>
                        </View>
                        <View style={styles.View_I126_6642_126_6422_126_6405}>
                          <Text style={styles.Text_I126_6642_126_6422_126_6405}>
                            (123) 456-7890
                          </Text>
                        </View>
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a63e/acfe/0ed31e8e78d51c6f0114367ff561a8e4"
                        }}
                        style={
                          styles.ImageBackground_I126_6642_126_6422_140_12059
                        }
                      />
                    </View>
                  </View>
                  <View style={styles.View_I126_6642_126_6298}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f65b/a5c5/b5729a377a8d02e9aa6a594aadbff48c"
                      }}
                      style={styles.ImageBackground_I126_6642_126_6298_126_6102}
                    />
                    <View style={styles.View_I126_6642_126_6298_126_6104}>
                      <View style={styles.View_I126_6642_126_6298_126_6105}>
                        <View style={styles.View_I126_6642_126_6298_126_6106}>
                          <Text style={styles.Text_I126_6642_126_6298_126_6106}>
                            Shipping
                          </Text>
                        </View>
                        <View style={styles.View_I126_6642_126_6298_126_6107}>
                          <Text style={styles.Text_I126_6642_126_6298_126_6107}>
                            Anthony Stark
                          </Text>
                        </View>
                        <View style={styles.View_I126_6642_126_6298_126_6108}>
                          <Text style={styles.Text_I126_6642_126_6298_126_6108}>
                            10880 Malibu Point
                          </Text>
                        </View>
                        <View style={styles.View_I126_6642_126_6298_126_6119}>
                          <Text style={styles.Text_I126_6642_126_6298_126_6119}>
                            Malibu CA 90263
                          </Text>
                        </View>
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a63e/acfe/0ed31e8e78d51c6f0114367ff561a8e4"
                        }}
                        style={
                          styles.ImageBackground_I126_6642_126_6298_140_12040
                        }
                      />
                    </View>
                  </View>
                  <View style={styles.View_I126_6642_126_6353}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1e6/131f/b2e1f2a3a7a191da751952b7420146ee"
                      }}
                      style={styles.ImageBackground_I126_6642_126_6353_126_6317}
                    />
                    <View style={styles.View_I126_6642_126_6353_126_6319}>
                      <View style={styles.View_I126_6642_126_6353_126_6320}>
                        <View style={styles.View_I126_6642_126_6353_126_6321}>
                          <Text style={styles.Text_I126_6642_126_6353_126_6321}>
                            Shipping
                          </Text>
                        </View>
                        <View style={styles.View_I126_6642_126_6353_126_6322}>
                          <Text style={styles.Text_I126_6642_126_6353_126_6322}>
                            Arrives 5-7 days
                          </Text>
                        </View>
                      </View>
                      <View style={styles.View_I126_6642_126_6353_126_6327}>
                        <View style={styles.View_I126_6642_126_6353_126_6326}>
                          <Text style={styles.Text_I126_6642_126_6353_126_6326}>
                            $0.00
                          </Text>
                        </View>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a63e/acfe/0ed31e8e78d51c6f0114367ff561a8e4"
                          }}
                          style={
                            styles.ImageBackground_I126_6642_126_6353_140_12033
                          }
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_126_6832}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb31/4327/4e8f08c947a089ec2a52188e5d7d485d"
                  }}
                  style={styles.ImageBackground_I126_6832_126_7050}
                />
                <View style={styles.View_I126_6832_126_6449}>
                  <View style={styles.View_I126_6832_126_6450}>
                    <View style={styles.View_I126_6832_126_6451}>
                      <Text style={styles.Text_I126_6832_126_6451}>
                        Pay Stark Industries
                      </Text>
                    </View>
                    <View style={styles.View_I126_6832_126_6452}>
                      <Text style={styles.Text_I126_6832_126_6452}>$1.99</Text>
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a63e/acfe/0ed31e8e78d51c6f0114367ff561a8e4"
                    }}
                    style={styles.ImageBackground_I126_6832_140_12207}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb31/4327/4e8f08c947a089ec2a52188e5d7d485d"
                  }}
                  style={styles.ImageBackground_I126_6832_126_6454}
                />
                <View style={styles.View_I126_6832_126_6455}>
                  <View style={styles.View_I126_6832_126_6456}>
                    <View style={styles.View_I126_6832_126_6457}>
                      <View style={styles.View_I126_6832_126_6458}>
                        <View style={styles.View_I126_6832_126_6459} />
                        <View style={styles.View_I126_6832_126_6460} />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d10c/2454/61bddf8dafa2acc923a125606916e68c"
                          }}
                          style={styles.ImageBackground_I126_6832_126_6461}
                        />
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/34be/91fb/1e80a2becd07d93b0ca42f3f6cb4e661"
                        }}
                        style={styles.ImageBackground_I126_6832_126_6462}
                      />
                    </View>
                    <View style={styles.View_I126_6832_126_6463}>
                      <Text style={styles.Text_I126_6832_126_6463}>
                        Confirm with Side Button
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I126_6832_126_6464}>
                    <View style={styles.View_I126_6832_126_6464_5_3093} />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_75_8372}>
              <View style={styles.View_126_7336}>
                <View style={styles.View_I126_7336_126_5468}>
                  <View style={styles.View_I126_7336_126_5469}>
                    <View style={styles.View_I126_7336_126_5470}>
                      <Text style={styles.Text_I126_7336_126_5470}>Pay</Text>
                    </View>
                    <View style={styles.View_I126_7336_126_5471}>
                      <Text style={styles.Text_I126_7336_126_5471}>􀣺</Text>
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50bc/3aed/23eff08ca77002d73f54887e305dc643"
                    }}
                    style={styles.ImageBackground_I126_7336_126_6588}
                  />
                </View>
                <View style={styles.View_I126_7336_126_6352}>
                  <View style={styles.View_I126_7336_126_6289}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c07/07f3/7c167ce39152f3e3a7e02eac4a633237"
                      }}
                      style={styles.ImageBackground_I126_7336_126_6289_126_6408}
                    />
                    <View style={styles.View_I126_7336_126_6289_126_5711}>
                      <View style={styles.View_I126_7336_126_6289_126_5712}>
                        <View style={styles.View_I126_7336_126_6289_126_5713}>
                          <Text style={styles.Text_I126_7336_126_6289_126_5713}>
                            Apple Card
                          </Text>
                        </View>
                        <View style={styles.View_I126_7336_126_6289_126_5714}>
                          <Text style={styles.Text_I126_7336_126_6289_126_5714}>
                            10880 Malibu Point Malibu Cal...
                          </Text>
                        </View>
                        <View style={styles.View_I126_7336_126_6289_126_5715}>
                          <Text style={styles.Text_I126_7336_126_6289_126_5715}>
                            •••• 1234
                          </Text>
                        </View>
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a63e/acfe/0ed31e8e78d51c6f0114367ff561a8e4"
                        }}
                        style={
                          styles.ImageBackground_I126_7336_126_6289_140_12075
                        }
                      />
                    </View>
                  </View>
                  <View style={styles.View_I126_7336_126_6422}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbca/886b/dabf7fe6472e47c59264ad78c897c90a"
                      }}
                      style={styles.ImageBackground_I126_7336_126_6422_126_6399}
                    />
                    <View style={styles.View_I126_7336_126_6422_126_6401}>
                      <View style={styles.View_I126_7336_126_6422_126_6402}>
                        <View style={styles.View_I126_7336_126_6422_126_6403}>
                          <Text style={styles.Text_I126_7336_126_6422_126_6403}>
                            Contact
                          </Text>
                        </View>
                        <View style={styles.View_I126_7336_126_6422_126_6404}>
                          <Text style={styles.Text_I126_7336_126_6422_126_6404}>
                            astark@starkindustries.com
                          </Text>
                        </View>
                        <View style={styles.View_I126_7336_126_6422_126_6405}>
                          <Text style={styles.Text_I126_7336_126_6422_126_6405}>
                            (123) 456-7890
                          </Text>
                        </View>
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a63e/acfe/0ed31e8e78d51c6f0114367ff561a8e4"
                        }}
                        style={
                          styles.ImageBackground_I126_7336_126_6422_140_12059
                        }
                      />
                    </View>
                  </View>
                  <View style={styles.View_I126_7336_126_6298}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f65b/a5c5/b5729a377a8d02e9aa6a594aadbff48c"
                      }}
                      style={styles.ImageBackground_I126_7336_126_6298_126_6102}
                    />
                    <View style={styles.View_I126_7336_126_6298_126_6104}>
                      <View style={styles.View_I126_7336_126_6298_126_6105}>
                        <View style={styles.View_I126_7336_126_6298_126_6106}>
                          <Text style={styles.Text_I126_7336_126_6298_126_6106}>
                            Shipping
                          </Text>
                        </View>
                        <View style={styles.View_I126_7336_126_6298_126_6107}>
                          <Text style={styles.Text_I126_7336_126_6298_126_6107}>
                            Anthony Stark
                          </Text>
                        </View>
                        <View style={styles.View_I126_7336_126_6298_126_6108}>
                          <Text style={styles.Text_I126_7336_126_6298_126_6108}>
                            10880 Malibu Point
                          </Text>
                        </View>
                        <View style={styles.View_I126_7336_126_6298_126_6119}>
                          <Text style={styles.Text_I126_7336_126_6298_126_6119}>
                            Malibu CA 90263
                          </Text>
                        </View>
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a63e/acfe/0ed31e8e78d51c6f0114367ff561a8e4"
                        }}
                        style={
                          styles.ImageBackground_I126_7336_126_6298_140_12040
                        }
                      />
                    </View>
                  </View>
                  <View style={styles.View_I126_7336_126_6353}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1e6/131f/b2e1f2a3a7a191da751952b7420146ee"
                      }}
                      style={styles.ImageBackground_I126_7336_126_6353_126_6317}
                    />
                    <View style={styles.View_I126_7336_126_6353_126_6319}>
                      <View style={styles.View_I126_7336_126_6353_126_6320}>
                        <View style={styles.View_I126_7336_126_6353_126_6321}>
                          <Text style={styles.Text_I126_7336_126_6353_126_6321}>
                            Shipping
                          </Text>
                        </View>
                        <View style={styles.View_I126_7336_126_6353_126_6322}>
                          <Text style={styles.Text_I126_7336_126_6353_126_6322}>
                            Arrives 5-7 days
                          </Text>
                        </View>
                      </View>
                      <View style={styles.View_I126_7336_126_6353_126_6327}>
                        <View style={styles.View_I126_7336_126_6353_126_6326}>
                          <Text style={styles.Text_I126_7336_126_6353_126_6326}>
                            $0.00
                          </Text>
                        </View>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a63e/acfe/0ed31e8e78d51c6f0114367ff561a8e4"
                          }}
                          style={
                            styles.ImageBackground_I126_7336_126_6353_140_12033
                          }
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_126_7337}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb31/4327/4e8f08c947a089ec2a52188e5d7d485d"
                  }}
                  style={styles.ImageBackground_I126_7337_126_7048}
                />
                <View style={styles.View_I126_7337_126_6466}>
                  <View style={styles.View_I126_7337_126_6467}>
                    <View style={styles.View_I126_7337_126_6468}>
                      <Text style={styles.Text_I126_7337_126_6468}>
                        Pay Stark Industries
                      </Text>
                    </View>
                    <View style={styles.View_I126_7337_126_6469}>
                      <Text style={styles.Text_I126_7337_126_6469}>$1.99</Text>
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a63e/acfe/0ed31e8e78d51c6f0114367ff561a8e4"
                    }}
                    style={styles.ImageBackground_I126_7337_140_12202}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb31/4327/4e8f08c947a089ec2a52188e5d7d485d"
                  }}
                  style={styles.ImageBackground_I126_7337_126_6471}
                />
                <View style={styles.View_I126_7337_126_6472}>
                  <View style={styles.View_I126_7337_126_6473}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b019/8e84/2a7196470c9c2e8881e319c113479859"
                      }}
                      style={styles.ImageBackground_I126_7337_140_12182}
                    />
                    <View style={styles.View_I126_7337_126_6475}>
                      <Text style={styles.Text_I126_7337_126_6475}>
                        Pay with TouchID
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_126_7481}>
              <View style={styles.View_126_7482}>
                <View style={styles.View_126_7483}>
                  <Text style={styles.Text_126_7483}>Double Click to Pay</Text>
                </View>
                <View style={styles.View_126_7484} />
              </View>
              <View style={styles.View_126_7485}>
                <View style={styles.View_I126_7485_126_6511}>
                  <View style={styles.View_I126_7485_126_6512}>
                    <View style={styles.View_I126_7485_126_6513}>
                      <Text style={styles.Text_I126_7485_126_6513}>Pay</Text>
                    </View>
                    <View style={styles.View_I126_7485_126_6514}>
                      <Text style={styles.Text_I126_7485_126_6514}>􀣺</Text>
                    </View>
                  </View>
                  <View style={styles.View_I126_7485_126_6515}>
                    <View style={styles.View_I126_7485_126_6516}>
                      <Text style={styles.Text_I126_7485_126_6516}>􀆄</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I126_7485_126_6517}>
                  <View style={styles.View_I126_7485_126_6518}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c07/07f3/7c167ce39152f3e3a7e02eac4a633237"
                      }}
                      style={styles.ImageBackground_I126_7485_126_6518_126_6410}
                    />
                    <View style={styles.View_I126_7485_126_6518_126_6411}>
                      <View style={styles.View_I126_7485_126_6518_126_6412}>
                        <View style={styles.View_I126_7485_126_6518_126_6413}>
                          <Text style={styles.Text_I126_7485_126_6518_126_6413}>
                            Apple Card
                          </Text>
                        </View>
                        <View style={styles.View_I126_7485_126_6518_126_6414}>
                          <Text style={styles.Text_I126_7485_126_6518_126_6414}>
                            10880 Malibu Point Malibu Cal...
                          </Text>
                        </View>
                        <View style={styles.View_I126_7485_126_6518_126_6415}>
                          <Text style={styles.Text_I126_7485_126_6518_126_6415}>
                            •••• 1234
                          </Text>
                        </View>
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3276/55d5/40a5bd75e1aaf90a271963eadfdc5412"
                        }}
                        style={
                          styles.ImageBackground_I126_7485_126_6518_140_12161
                        }
                      />
                    </View>
                  </View>
                  <View style={styles.View_I126_7485_126_6519}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ca/ab1e/4c63b6157c301c65f862525a34a1afb6"
                      }}
                      style={styles.ImageBackground_I126_7485_126_6519_126_6093}
                    />
                    <View style={styles.View_I126_7485_126_6519_126_6095}>
                      <View style={styles.View_I126_7485_126_6519_126_6096}>
                        <View style={styles.View_I126_7485_126_6519_126_6097}>
                          <Text style={styles.Text_I126_7485_126_6519_126_6097}>
                            Contact
                          </Text>
                        </View>
                        <View style={styles.View_I126_7485_126_6519_126_6098}>
                          <Text style={styles.Text_I126_7485_126_6519_126_6098}>
                            astark@starkindustries.com
                          </Text>
                        </View>
                        <View style={styles.View_I126_7485_126_6519_126_6099}>
                          <Text style={styles.Text_I126_7485_126_6519_126_6099}>
                            (123) 456-7890
                          </Text>
                        </View>
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3276/55d5/40a5bd75e1aaf90a271963eadfdc5412"
                        }}
                        style={
                          styles.ImageBackground_I126_7485_126_6519_140_12140
                        }
                      />
                    </View>
                  </View>
                  <View style={styles.View_I126_7485_126_6520}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dca2/fccd/dd09c75d64626dd284a434c2795d5fbe"
                      }}
                      style={styles.ImageBackground_I126_7485_126_6520_126_6131}
                    />
                    <View style={styles.View_I126_7485_126_6520_126_6133}>
                      <View style={styles.View_I126_7485_126_6520_126_6134}>
                        <View style={styles.View_I126_7485_126_6520_126_6135}>
                          <Text style={styles.Text_I126_7485_126_6520_126_6135}>
                            Shipping
                          </Text>
                        </View>
                        <View style={styles.View_I126_7485_126_6520_126_6136}>
                          <Text style={styles.Text_I126_7485_126_6520_126_6136}>
                            Anthony Stark
                          </Text>
                        </View>
                        <View style={styles.View_I126_7485_126_6520_126_6137}>
                          <Text style={styles.Text_I126_7485_126_6520_126_6137}>
                            10880 Malibu Point
                          </Text>
                        </View>
                        <View style={styles.View_I126_7485_126_6520_126_6138}>
                          <Text style={styles.Text_I126_7485_126_6520_126_6138}>
                            Malibu CA 90263
                          </Text>
                        </View>
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3276/55d5/40a5bd75e1aaf90a271963eadfdc5412"
                        }}
                        style={
                          styles.ImageBackground_I126_7485_126_6520_140_12115
                        }
                      />
                    </View>
                  </View>
                  <View style={styles.View_I126_7485_126_6521}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f924/ee38/3f98395eefebf7187804a0b7134f7b2b"
                      }}
                      style={styles.ImageBackground_I126_7485_126_6521_126_6339}
                    />
                    <View style={styles.View_I126_7485_126_6521_126_6341}>
                      <View style={styles.View_I126_7485_126_6521_126_6342}>
                        <View style={styles.View_I126_7485_126_6521_126_6343}>
                          <Text style={styles.Text_I126_7485_126_6521_126_6343}>
                            Shipping
                          </Text>
                        </View>
                        <View style={styles.View_I126_7485_126_6521_126_6344}>
                          <Text style={styles.Text_I126_7485_126_6521_126_6344}>
                            Arrives 5-7 days
                          </Text>
                        </View>
                      </View>
                      <View style={styles.View_I126_7485_126_6521_126_6345}>
                        <View style={styles.View_I126_7485_126_6521_126_6346}>
                          <Text style={styles.Text_I126_7485_126_6521_126_6346}>
                            $0.00
                          </Text>
                        </View>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3276/55d5/40a5bd75e1aaf90a271963eadfdc5412"
                          }}
                          style={
                            styles.ImageBackground_I126_7485_126_6521_140_12106
                          }
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_126_7486}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6659/ec4a/a897a60fa45d348d73380a9b7a77563c"
                  }}
                  style={styles.ImageBackground_I126_7486_126_7049}
                />
                <View style={styles.View_I126_7486_126_6478}>
                  <View style={styles.View_I126_7486_126_6479}>
                    <View style={styles.View_I126_7486_126_6480}>
                      <Text style={styles.Text_I126_7486_126_6480}>
                        Pay Stark Industries
                      </Text>
                    </View>
                    <View style={styles.View_I126_7486_126_6481}>
                      <Text style={styles.Text_I126_7486_126_6481}>$1.99</Text>
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3276/55d5/40a5bd75e1aaf90a271963eadfdc5412"
                    }}
                    style={styles.ImageBackground_I126_7486_140_12193}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6659/ec4a/a897a60fa45d348d73380a9b7a77563c"
                  }}
                  style={styles.ImageBackground_I126_7486_126_6483}
                />
                <View style={styles.View_I126_7486_126_6484}>
                  <View style={styles.View_I126_7486_126_6485}>
                    <View style={styles.View_I126_7486_126_6486}>
                      <View style={styles.View_I126_7486_126_6487}>
                        <View style={styles.View_I126_7486_126_6488} />
                        <View style={styles.View_I126_7486_126_6489} />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0aa/23e0/ad0355f4abf65d2788186696a3deb1d9"
                          }}
                          style={styles.ImageBackground_I126_7486_126_6490}
                        />
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78e8/dc82/1a066b2074074aa9878db4dec4692a82"
                        }}
                        style={styles.ImageBackground_I126_7486_126_6491}
                      />
                    </View>
                    <View style={styles.View_I126_7486_126_6492}>
                      <Text style={styles.Text_I126_7486_126_6492}>
                        Confirm with Side Button
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I126_7486_126_6493}>
                    <View style={styles.View_I126_7486_126_6493_36_10050} />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_126_7487}>
              <View style={styles.View_126_7488}>
                <View style={styles.View_I126_7488_126_6511}>
                  <View style={styles.View_I126_7488_126_6512}>
                    <View style={styles.View_I126_7488_126_6513}>
                      <Text style={styles.Text_I126_7488_126_6513}>Pay</Text>
                    </View>
                    <View style={styles.View_I126_7488_126_6514}>
                      <Text style={styles.Text_I126_7488_126_6514}>􀣺</Text>
                    </View>
                  </View>
                  <View style={styles.View_I126_7488_126_6515}>
                    <View style={styles.View_I126_7488_126_6516}>
                      <Text style={styles.Text_I126_7488_126_6516}>􀆄</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I126_7488_126_6517}>
                  <View style={styles.View_I126_7488_126_6518}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c07/07f3/7c167ce39152f3e3a7e02eac4a633237"
                      }}
                      style={styles.ImageBackground_I126_7488_126_6518_126_6410}
                    />
                    <View style={styles.View_I126_7488_126_6518_126_6411}>
                      <View style={styles.View_I126_7488_126_6518_126_6412}>
                        <View style={styles.View_I126_7488_126_6518_126_6413}>
                          <Text style={styles.Text_I126_7488_126_6518_126_6413}>
                            Apple Card
                          </Text>
                        </View>
                        <View style={styles.View_I126_7488_126_6518_126_6414}>
                          <Text style={styles.Text_I126_7488_126_6518_126_6414}>
                            10880 Malibu Point Malibu Cal...
                          </Text>
                        </View>
                        <View style={styles.View_I126_7488_126_6518_126_6415}>
                          <Text style={styles.Text_I126_7488_126_6518_126_6415}>
                            •••• 1234
                          </Text>
                        </View>
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3276/55d5/40a5bd75e1aaf90a271963eadfdc5412"
                        }}
                        style={
                          styles.ImageBackground_I126_7488_126_6518_140_12161
                        }
                      />
                    </View>
                  </View>
                  <View style={styles.View_I126_7488_126_6519}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4ca/ab1e/4c63b6157c301c65f862525a34a1afb6"
                      }}
                      style={styles.ImageBackground_I126_7488_126_6519_126_6093}
                    />
                    <View style={styles.View_I126_7488_126_6519_126_6095}>
                      <View style={styles.View_I126_7488_126_6519_126_6096}>
                        <View style={styles.View_I126_7488_126_6519_126_6097}>
                          <Text style={styles.Text_I126_7488_126_6519_126_6097}>
                            Contact
                          </Text>
                        </View>
                        <View style={styles.View_I126_7488_126_6519_126_6098}>
                          <Text style={styles.Text_I126_7488_126_6519_126_6098}>
                            astark@starkindustries.com
                          </Text>
                        </View>
                        <View style={styles.View_I126_7488_126_6519_126_6099}>
                          <Text style={styles.Text_I126_7488_126_6519_126_6099}>
                            (123) 456-7890
                          </Text>
                        </View>
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3276/55d5/40a5bd75e1aaf90a271963eadfdc5412"
                        }}
                        style={
                          styles.ImageBackground_I126_7488_126_6519_140_12140
                        }
                      />
                    </View>
                  </View>
                  <View style={styles.View_I126_7488_126_6520}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dca2/fccd/dd09c75d64626dd284a434c2795d5fbe"
                      }}
                      style={styles.ImageBackground_I126_7488_126_6520_126_6131}
                    />
                    <View style={styles.View_I126_7488_126_6520_126_6133}>
                      <View style={styles.View_I126_7488_126_6520_126_6134}>
                        <View style={styles.View_I126_7488_126_6520_126_6135}>
                          <Text style={styles.Text_I126_7488_126_6520_126_6135}>
                            Shipping
                          </Text>
                        </View>
                        <View style={styles.View_I126_7488_126_6520_126_6136}>
                          <Text style={styles.Text_I126_7488_126_6520_126_6136}>
                            Anthony Stark
                          </Text>
                        </View>
                        <View style={styles.View_I126_7488_126_6520_126_6137}>
                          <Text style={styles.Text_I126_7488_126_6520_126_6137}>
                            10880 Malibu Point
                          </Text>
                        </View>
                        <View style={styles.View_I126_7488_126_6520_126_6138}>
                          <Text style={styles.Text_I126_7488_126_6520_126_6138}>
                            Malibu CA 90263
                          </Text>
                        </View>
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3276/55d5/40a5bd75e1aaf90a271963eadfdc5412"
                        }}
                        style={
                          styles.ImageBackground_I126_7488_126_6520_140_12115
                        }
                      />
                    </View>
                  </View>
                  <View style={styles.View_I126_7488_126_6521}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f924/ee38/3f98395eefebf7187804a0b7134f7b2b"
                      }}
                      style={styles.ImageBackground_I126_7488_126_6521_126_6339}
                    />
                    <View style={styles.View_I126_7488_126_6521_126_6341}>
                      <View style={styles.View_I126_7488_126_6521_126_6342}>
                        <View style={styles.View_I126_7488_126_6521_126_6343}>
                          <Text style={styles.Text_I126_7488_126_6521_126_6343}>
                            Shipping
                          </Text>
                        </View>
                        <View style={styles.View_I126_7488_126_6521_126_6344}>
                          <Text style={styles.Text_I126_7488_126_6521_126_6344}>
                            Arrives 5-7 days
                          </Text>
                        </View>
                      </View>
                      <View style={styles.View_I126_7488_126_6521_126_6345}>
                        <View style={styles.View_I126_7488_126_6521_126_6346}>
                          <Text style={styles.Text_I126_7488_126_6521_126_6346}>
                            $0.00
                          </Text>
                        </View>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3276/55d5/40a5bd75e1aaf90a271963eadfdc5412"
                          }}
                          style={
                            styles.ImageBackground_I126_7488_126_6521_140_12106
                          }
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_126_7489}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6659/ec4a/a897a60fa45d348d73380a9b7a77563c"
                  }}
                  style={styles.ImageBackground_I126_7489_126_7267}
                />
                <View style={styles.View_I126_7489_126_6495}>
                  <View style={styles.View_I126_7489_126_6496}>
                    <View style={styles.View_I126_7489_126_6497}>
                      <Text style={styles.Text_I126_7489_126_6497}>
                        Pay Stark Industries
                      </Text>
                    </View>
                    <View style={styles.View_I126_7489_126_6498}>
                      <Text style={styles.Text_I126_7489_126_6498}>$1.99</Text>
                    </View>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3276/55d5/40a5bd75e1aaf90a271963eadfdc5412"
                    }}
                    style={styles.ImageBackground_I126_7489_140_12188}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6659/ec4a/a897a60fa45d348d73380a9b7a77563c"
                  }}
                  style={styles.ImageBackground_I126_7489_126_6500}
                />
                <View style={styles.View_I126_7489_126_6501}>
                  <View style={styles.View_I126_7489_126_6502}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b019/8e84/2a7196470c9c2e8881e319c113479859"
                      }}
                      style={styles.ImageBackground_I126_7489_140_12185}
                    />
                    <View style={styles.View_I126_7489_126_6504}>
                      <Text style={styles.Text_I126_7489_126_6504}>
                        Pay with TouchID
                      </Text>
                    </View>
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
  View_2: { height: hp("369.53551912568304%") },
  View_140_5524: {
    width: wp("93.78036929057338%"),
    minWidth: wp("93.78036929057338%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1098153547133136%"),
    top: hp("8.743169398907105%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_74_2921: {
    flexGrow: 1,
    width: wp("93.78036929057338%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I74_2921_5_19: {
    flexGrow: 1,
    width: wp("93.78036929057338%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I74_2921_5_20: {
    width: wp("75.99611273080662%"),
    minWidth: wp("75.99611273080662%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I74_2921_5_21: {
    width: wp("2.7210884353741496%"),
    minWidth: wp("2.7210884353741496%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I74_2921_5_22: {
    width: wp("71.7201166180758%"),
    minWidth: wp("71.7201166180758%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.275996112730807%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I74_2921_5_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I74_2921_5_23: {
    width: wp("16.229348882410108%"),
    minWidth: wp("16.229348882410108%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.55102040816327%"),
    top: hp("2.185792349726775%"),
    justifyContent: "center"
  },
  Text_I74_2921_5_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I74_2921_5_24: {
    flexGrow: 1,
    width: wp("93.78036929057338%"),
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
  ImageBackground_140_5564: {
    width: wp("2.7210884353741496%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_126_5826: {
    width: wp("93.78036929057338%"),
    minWidth: wp("93.78036929057338%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1098153547133136%"),
    top: hp("29.6448087431694%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_5826_10_2304: {
    flexGrow: 1,
    width: wp("3.4499514091350827%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I126_5826_10_2304: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I126_5826_10_2303: {
    flexGrow: 1,
    width: wp("93.78036929057338%"),
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
  View_126_6635: {
    width: wp("93.78036929057338%"),
    minWidth: wp("93.78036929057338%"),
    height: hp("153.0054644808743%"),
    minHeight: hp("153.0054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1098153547133136%"),
    top: hp("46.85792349726776%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_6020: {
    width: wp("32.99319727891156%"),
    minWidth: wp("32.99319727891156%"),
    height: hp("149.18032786885246%"),
    minHeight: hp("149.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_6021: {
    width: wp("6.171039844509233%"),
    minWidth: wp("6.171039844509233%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_126_6021: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_126_6022: {
    width: wp("32.99319727891156%"),
    minWidth: wp("32.99319727891156%"),
    height: hp("141.53005464480876%"),
    minHeight: hp("141.53005464480876%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_126_6023: {
    width: wp("10.10689990281827%"),
    minWidth: wp("10.10689990281827%"),
    height: hp("125.68306010928963%"),
    minHeight: hp("125.68306010928963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.886297376093296%"),
    top: hp("9.289617486338791%")
  },
  View_126_6024: {
    width: wp("10.10689990281827%"),
    minWidth: wp("10.10689990281827%"),
    height: hp("125.68306010928963%"),
    minHeight: hp("125.68306010928963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_126_6025: {
    width: wp("6.608357628765791%"),
    minWidth: wp("6.608357628765791%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_126_6025: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_126_6026: {
    width: wp("7.0456754130223525%"),
    minWidth: wp("7.0456754130223525%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.34972677595629%"),
    justifyContent: "center"
  },
  Text_126_6026: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_126_6348: {
    width: wp("7.0456754130223525%"),
    minWidth: wp("7.0456754130223525%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36.06557377049182%"),
    justifyContent: "center"
  },
  Text_126_6348: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_126_6417: {
    width: wp("10.10689990281827%"),
    minWidth: wp("10.10689990281827%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53.27868852459017%"),
    justifyContent: "center"
  },
  Text_126_6417: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_126_6418: {
    width: wp("6.171039844509233%"),
    minWidth: wp("6.171039844509233%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("69.12568306010928%"),
    justifyContent: "center"
  },
  Text_126_6418: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_126_6419: {
    width: wp("6.608357628765791%"),
    minWidth: wp("6.608357628765791%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("86.47540983606555%"),
    justifyContent: "center"
  },
  Text_126_6419: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_126_6420: {
    width: wp("6.608357628765791%"),
    minWidth: wp("6.608357628765791%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("105.19125683060108%"),
    justifyContent: "center"
  },
  Text_126_6420: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_126_6421: {
    width: wp("9.66958211856171%"),
    minWidth: wp("9.66958211856171%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("122.40437158469945%"),
    justifyContent: "center"
  },
  Text_126_6421: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_126_6029: {
    width: wp("21.33138969873664%"),
    minWidth: wp("21.33138969873664%"),
    height: hp("141.53005464480876%"),
    minHeight: hp("141.53005464480876%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_126_5717: {
    width: wp("18.221574344023324%"),
    minWidth: wp("18.221574344023324%"),
    height: hp("12.568306010928962%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5549076773566575%"),
    top: hp("4.371584699453557%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_126_6408: {
    flexGrow: 1,
    width: wp("1.9436345966958213%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783281%"),
    top: hp("2.1857923497267606%")
  },
  View_126_5711: {
    flexGrow: 1,
    width: wp("14.237123420796891%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2069970845481057%"),
    top: hp("2.1857923497267606%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_5712: {
    width: wp("9.523809523809524%"),
    minWidth: wp("9.523809523809524%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_5713: {
    width: wp("3.741496598639456%"),
    minWidth: wp("3.741496598639456%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_126_5713: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_126_5714: {
    width: wp("9.523809523809524%"),
    minWidth: wp("9.523809523809524%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.0054644808743234%"),
    justifyContent: "center"
  },
  Text_126_5714: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_126_5715: {
    width: wp("2.818270165208941%"),
    minWidth: wp("2.818270165208941%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.73770491803279%"),
    justifyContent: "center"
  },
  Text_126_5715: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  ImageBackground_140_12075: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.849535349854227%"),
    top: hp("3.15168203551913%")
  },
  View_126_6398: {
    width: wp("18.221574344023324%"),
    minWidth: wp("18.221574344023324%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5549076773566575%"),
    top: hp("21.311475409836063%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_126_6399: {
    flexGrow: 1,
    width: wp("1.5549076773566568%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783281%"),
    top: hp("2.185792349726782%")
  },
  View_126_6401: {
    flexGrow: 1,
    width: wp("14.625850340136054%"),
    height: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.818270165208941%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_6402: {
    width: wp("9.280855199222545%"),
    minWidth: wp("9.280855199222545%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_6403: {
    width: wp("2.380952380952381%"),
    minWidth: wp("2.380952380952381%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_126_6403: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_126_6404: {
    width: wp("9.280855199222545%"),
    minWidth: wp("9.280855199222545%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584526%"),
    justifyContent: "center"
  },
  Text_126_6404: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_126_6405: {
    width: wp("5.393586005830904%"),
    minWidth: wp("5.393586005830904%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.737704918032776%"),
    justifyContent: "center"
  },
  Text_126_6405: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_140_12059: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.238262269193392%"),
    top: hp("3.288294057377044%")
  },
  View_126_6101: {
    width: wp("18.221574344023324%"),
    minWidth: wp("18.221574344023324%"),
    height: hp("15.846994535519126%"),
    minHeight: hp("15.846994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5549076773566575%"),
    top: hp("38.52459016393442%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_126_6102: {
    flexGrow: 1,
    width: wp("1.5549076773566568%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783281%"),
    top: hp("2.185792349726782%")
  },
  View_126_6104: {
    flexGrow: 1,
    width: wp("14.625850340136054%"),
    height: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.818270165208941%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_6105: {
    width: wp("6.462585034013606%"),
    minWidth: wp("6.462585034013606%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_6106: {
    width: wp("2.623906705539359%"),
    minWidth: wp("2.623906705539359%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_126_6106: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_126_6107: {
    width: wp("4.761904761904762%"),
    minWidth: wp("4.761904761904762%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584668%"),
    justifyContent: "center"
  },
  Text_126_6107: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_126_6108: {
    width: wp("6.462585034013606%"),
    minWidth: wp("6.462585034013606%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.737704918032776%"),
    justifyContent: "center"
  },
  Text_126_6108: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_126_6119: {
    width: wp("5.830903790087463%"),
    minWidth: wp("5.830903790087463%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.743169398907114%"),
    justifyContent: "center"
  },
  Text_126_6119: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_140_12040: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.238262269193392%"),
    top: hp("4.791026297814199%")
  },
  View_126_6316: {
    width: wp("18.221574344023324%"),
    minWidth: wp("18.221574344023324%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5549076773566575%"),
    top: hp("58.7431693989071%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_126_6317: {
    flexGrow: 1,
    width: wp("1.5549076773566568%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783281%"),
    top: hp("2.185792349726782%")
  },
  View_126_6319: {
    flexGrow: 1,
    width: wp("14.625850340136054%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.818270165208941%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_6320: {
    width: wp("5.4907677356656945%"),
    minWidth: wp("5.4907677356656945%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_6321: {
    width: wp("2.623906705539359%"),
    minWidth: wp("2.623906705539359%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_126_6321: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_126_6322: {
    width: wp("5.4907677356656945%"),
    minWidth: wp("5.4907677356656945%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584668%"),
    justifyContent: "center"
  },
  Text_126_6322: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_126_6327: {
    width: wp("2.525586127308066%"),
    minWidth: wp("2.525586127308066%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.100264212827987%"),
    top: hp("1.5027322404371546%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_6326: {
    width: wp("1.749271137026239%"),
    minWidth: wp("1.749271137026239%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_126_6326: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  ImageBackground_140_12033: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1379980563654044%"),
    top: hp("0.2828295765027349%")
  },
  View_126_6409: {
    width: wp("18.221574344023324%"),
    minWidth: wp("18.221574344023324%"),
    height: hp("12.568306010928962%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5549076773566575%"),
    top: hp("72.95081967213113%"),
    backgroundColor: "rgba(44, 44, 46, 1)",
    overflow: "hidden"
  },
  ImageBackground_126_6410: {
    flexGrow: 1,
    width: wp("1.9436345966958213%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783281%"),
    top: hp("2.185792349726782%")
  },
  View_126_6411: {
    flexGrow: 1,
    width: wp("14.237123420796891%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2069970845481057%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_6412: {
    width: wp("9.523809523809524%"),
    minWidth: wp("9.523809523809524%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_6413: {
    width: wp("3.741496598639456%"),
    minWidth: wp("3.741496598639456%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_126_6413: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_126_6414: {
    width: wp("9.523809523809524%"),
    minWidth: wp("9.523809523809524%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.0054644808743376%"),
    justifyContent: "center"
  },
  Text_126_6414: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_126_6415: {
    width: wp("2.818270165208941%"),
    minWidth: wp("2.818270165208941%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.73770491803279%"),
    justifyContent: "center"
  },
  Text_126_6415: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  ImageBackground_140_12161: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.849535349854227%"),
    top: hp("3.1516820355191157%")
  },
  View_126_6092: {
    width: wp("18.221574344023324%"),
    minWidth: wp("18.221574344023324%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5549076773566575%"),
    top: hp("89.89071038251366%"),
    backgroundColor: "rgba(44, 44, 46, 1)",
    overflow: "hidden"
  },
  ImageBackground_126_6093: {
    flexGrow: 1,
    width: wp("1.5549076773566568%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783281%"),
    top: hp("2.1857923497267677%")
  },
  View_126_6095: {
    flexGrow: 1,
    width: wp("14.625850340136054%"),
    height: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.818270165208941%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_6096: {
    width: wp("9.280855199222545%"),
    minWidth: wp("9.280855199222545%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_6097: {
    width: wp("2.380952380952381%"),
    minWidth: wp("2.380952380952381%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_126_6097: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_126_6098: {
    width: wp("9.280855199222545%"),
    minWidth: wp("9.280855199222545%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.732240437158481%"),
    justifyContent: "center"
  },
  Text_126_6098: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_126_6099: {
    width: wp("5.393586005830904%"),
    minWidth: wp("5.393586005830904%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.73770491803279%"),
    justifyContent: "center"
  },
  Text_126_6099: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_140_12140: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.238262269193392%"),
    top: hp("3.288294057377044%")
  },
  View_126_6130: {
    width: wp("18.221574344023324%"),
    minWidth: wp("18.221574344023324%"),
    height: hp("15.846994535519126%"),
    minHeight: hp("15.846994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5549076773566575%"),
    top: hp("107.103825136612%"),
    backgroundColor: "rgba(44, 44, 46, 1)",
    overflow: "hidden"
  },
  ImageBackground_126_6131: {
    flexGrow: 1,
    width: wp("1.5549076773566568%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783281%"),
    top: hp("2.185792349726796%")
  },
  View_126_6133: {
    flexGrow: 1,
    width: wp("14.625850340136054%"),
    height: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.818270165208941%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_6134: {
    width: wp("6.462585034013606%"),
    minWidth: wp("6.462585034013606%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_6135: {
    width: wp("2.623906705539359%"),
    minWidth: wp("2.623906705539359%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_126_6135: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_126_6136: {
    width: wp("4.761904761904762%"),
    minWidth: wp("4.761904761904762%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.732240437158481%"),
    justifyContent: "center"
  },
  Text_126_6136: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_126_6137: {
    width: wp("6.462585034013606%"),
    minWidth: wp("6.462585034013606%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.73770491803279%"),
    justifyContent: "center"
  },
  Text_126_6137: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_126_6138: {
    width: wp("5.830903790087463%"),
    minWidth: wp("5.830903790087463%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.7431693989071%"),
    justifyContent: "center"
  },
  Text_126_6138: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_140_12115: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.238262269193392%"),
    top: hp("4.791026297814199%")
  },
  View_126_6338: {
    width: wp("18.221574344023324%"),
    minWidth: wp("18.221574344023324%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5549076773566575%"),
    top: hp("127.32240437158468%"),
    backgroundColor: "rgba(44, 44, 46, 1)",
    overflow: "hidden"
  },
  ImageBackground_126_6339: {
    flexGrow: 1,
    width: wp("1.5549076773566568%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783281%"),
    top: hp("2.185792349726796%")
  },
  View_126_6341: {
    flexGrow: 1,
    width: wp("14.625850340136054%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.818270165208941%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_6342: {
    width: wp("5.4907677356656945%"),
    minWidth: wp("5.4907677356656945%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_6343: {
    width: wp("2.623906705539359%"),
    minWidth: wp("2.623906705539359%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_126_6343: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_126_6344: {
    width: wp("5.4907677356656945%"),
    minWidth: wp("5.4907677356656945%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.732240437158481%"),
    justifyContent: "center"
  },
  Text_126_6344: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_126_6345: {
    width: wp("2.525586127308066%"),
    minWidth: wp("2.525586127308066%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.100264212827987%"),
    top: hp("1.5027322404371546%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_6346: {
    width: wp("1.749271137026239%"),
    minWidth: wp("1.749271137026239%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_126_6346: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  ImageBackground_140_12106: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1379980563654044%"),
    top: hp("0.2828295765027349%")
  },
  View_126_6438: {
    width: wp("29.494655004859087%"),
    minWidth: wp("29.494655004859087%"),
    height: hp("126.84201099833503%"),
    minHeight: hp("126.84201099833503%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.103012633624886%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_6439: {
    width: wp("8.406219630709428%"),
    minWidth: wp("8.406219630709428%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_126_6439: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_126_6440: {
    width: wp("29.494655004859087%"),
    minWidth: wp("29.494655004859087%"),
    height: hp("119.19173777429133%"),
    minHeight: hp("119.19173777429133%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_126_6441: {
    width: wp("6.608357628765791%"),
    minWidth: wp("6.608357628765791%"),
    height: hp("93.85245901639344%"),
    minHeight: hp("93.85245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.88629737609329%"),
    top: hp("15.710382513661202%")
  },
  View_126_6442: {
    width: wp("6.608357628765791%"),
    minWidth: wp("6.608357628765791%"),
    height: hp("93.85245901639344%"),
    minHeight: hp("93.85245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_126_6443: {
    width: wp("6.171039844509233%"),
    minWidth: wp("6.171039844509233%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_126_6443: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_126_6444: {
    width: wp("6.608357628765791%"),
    minWidth: wp("6.608357628765791%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30.19125683060109%"),
    justifyContent: "center"
  },
  Text_126_6444: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_126_6445: {
    width: wp("5.733722060252672%"),
    minWidth: wp("5.733722060252672%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60.38251366120218%"),
    justifyContent: "center"
  },
  Text_126_6445: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_126_6446: {
    width: wp("6.171039844509233%"),
    minWidth: wp("6.171039844509233%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("90.57377049180329%"),
    justifyContent: "center"
  },
  Text_126_6446: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_126_6447: {
    width: wp("21.33138969873664%"),
    minWidth: wp("21.33138969873664%"),
    height: hp("119.19173777429133%"),
    minHeight: hp("119.19173777429133%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_126_6448: {
    width: wp("18.221574344023324%"),
    minWidth: wp("18.221574344023324%"),
    height: hp("25.81967213114754%"),
    minHeight: hp("25.81967213114754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5549076773566526%"),
    top: hp("4.371584699453557%"),
    backgroundColor: "rgba(250, 250, 250, 0.9300000071525574)"
  },
  ImageBackground_126_7050: {
    flexGrow: 1,
    width: wp("18.221574344023324%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_126_6449: {
    flexGrow: 1,
    width: wp("18.221574344023324%"),
    height: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.1857923497267606%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_6450: {
    width: wp("5.8794946550048595%"),
    minWidth: wp("5.8794946550048595%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783263%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_6451: {
    width: wp("5.8794946550048595%"),
    minWidth: wp("5.8794946550048595%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_126_6451: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_126_6452: {
    width: wp("3.498542274052478%"),
    minWidth: wp("3.498542274052478%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4590163934426315%"),
    justifyContent: "center"
  },
  Text_126_6452: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  ImageBackground_140_12207: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.056532434402335%"),
    top: hp("2.536927937158474%")
  },
  ImageBackground_126_6454: {
    flexGrow: 1,
    width: wp("18.221574344023324%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.338797814207645%")
  },
  View_126_6455: {
    flexGrow: 1,
    width: wp("18.221574344023324%"),
    height: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.524590163934427%")
  },
  View_126_6456: {
    width: wp("7.38581146744412%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.417881438289598%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_6457: {
    width: wp("1.5549076773566568%"),
    minWidth: wp("1.5549076773566568%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9154518950437307%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_126_6458: {
    width: wp("0.8884825674044031%"),
    minWidth: wp("0.8884825674044031%"),
    height: hp("4.163414011887514%"),
    minHeight: hp("4.163414011887514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.14805029154518934%"),
    top: hp("0.8326796234631075%")
  },
  View_126_6459: {
    width: wp("0.8514970569962779%"),
    minWidth: wp("0.8514970569962779%"),
    height: hp("4.163414011887514%"),
    minHeight: hp("4.163414011887514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(10, 132, 255, 1)",
    opacity: 0.10000000149011612,
    borderColor: "rgba(0, 122, 255, 1)",
    borderWidth: 1.1428571939468384,
    borderTopLeftRadius: 3.047619104385376,
    borderTopRightRadius: 3.047619104385376,
    borderBottomLeftRadius: 3.047619104385376,
    borderBottomRightRadius: 3.047619104385376
  },
  View_126_6460: {
    width: wp("0.03702161205521594%"),
    height: hp("0.9367681591888595%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8514789844509281%"),
    top: hp("0.8326796234631075%"),
    backgroundColor: "rgba(0, 122, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0.380952388048172,
    borderBottomLeftRadius: 0.380952388048172,
    borderBottomRightRadius: 0
  },
  ImageBackground_126_6461: {
    width: wp("0.5553241837244803%"),
    height: hp("0.3122560639199012%"),
    minHeight: hp("0.3122560639199012%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07402514577259467%"),
    top: hp("0.05204664553448879%")
  },
  ImageBackground_126_6462: {
    width: wp("0.44425935624755625%"),
    height: hp("1.1449389118965858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8700801749271179%"),
    top: hp("1.5612826321294335%")
  },
  View_126_6463: {
    width: wp("7.38581146744412%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.191256830601077%"),
    justifyContent: "center"
  },
  Text_126_6463: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_126_6464: {
    width: wp("18.221574344023324%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043701%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_6464_5_3093: {
    flexGrow: 1,
    width: wp("6.511175898931001%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.879494655004855%"),
    top: hp("2.868852459016395%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_126_6465: {
    width: wp("18.221574344023324%"),
    minWidth: wp("18.221574344023324%"),
    height: hp("22.84723500736424%"),
    minHeight: hp("22.84723500736424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5549076773566526%"),
    top: hp("34.56284153005464%"),
    backgroundColor: "rgba(250, 250, 250, 0.9300000071525574)"
  },
  ImageBackground_126_7048: {
    flexGrow: 1,
    width: wp("18.221574344023324%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_126_6466: {
    flexGrow: 1,
    width: wp("18.221574344023324%"),
    height: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_6467: {
    width: wp("5.8794946550048595%"),
    minWidth: wp("5.8794946550048595%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783263%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_6468: {
    width: wp("5.8794946550048595%"),
    minWidth: wp("5.8794946550048595%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_126_6468: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_126_6469: {
    width: wp("3.498542274052478%"),
    minWidth: wp("3.498542274052478%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "center"
  },
  Text_126_6469: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  ImageBackground_140_12202: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.056532434402335%"),
    top: hp("2.5369279371584668%")
  },
  ImageBackground_126_6471: {
    flexGrow: 1,
    width: wp("18.221574344023324%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.338797814207652%")
  },
  View_126_6472: {
    flexGrow: 1,
    width: wp("5.053449951409135%"),
    height: hp("7.1368519725695325%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.584062196307094%"),
    top: hp("13.52459016393442%")
  },
  View_126_6473: {
    width: wp("5.053449951409135%"),
    height: hp("7.1368519725695325%"),
    minHeight: hp("7.1368519725695325%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_140_12182: {
    width: wp("1.395795505178913%"),
    minWidth: wp("1.395795505178913%"),
    height: hp("3.8581634479793694%"),
    minHeight: hp("3.8581634479793694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8288007167152571%"),
    top: hp("0%")
  },
  View_126_6475: {
    width: wp("5.053449951409135%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.677827762124309%"),
    justifyContent: "center"
  },
  Text_126_6475: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_126_6477: {
    width: wp("18.221574344023324%"),
    minWidth: wp("18.221574344023324%"),
    height: hp("25.81967213114754%"),
    minHeight: hp("25.81967213114754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5549076773566526%"),
    top: hp("61.78165289873634%"),
    backgroundColor: "rgba(44, 44, 46, 1)"
  },
  ImageBackground_126_7049: {
    flexGrow: 1,
    width: wp("18.221574344023324%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_126_6478: {
    flexGrow: 1,
    width: wp("18.221574344023324%"),
    height: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_6479: {
    width: wp("5.8794946550048595%"),
    minWidth: wp("5.8794946550048595%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783263%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_6480: {
    width: wp("5.8794946550048595%"),
    minWidth: wp("5.8794946550048595%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_126_6480: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_126_6481: {
    width: wp("3.498542274052478%"),
    minWidth: wp("3.498542274052478%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4590163934426386%"),
    justifyContent: "center"
  },
  Text_126_6481: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  ImageBackground_140_12193: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.056532434402335%"),
    top: hp("2.5369279371584668%")
  },
  ImageBackground_126_6483: {
    flexGrow: 1,
    width: wp("18.221574344023324%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.338797814207638%")
  },
  View_126_6484: {
    flexGrow: 1,
    width: wp("18.221574344023324%"),
    height: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.52459016393442%")
  },
  View_126_6485: {
    width: wp("7.38581146744412%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.417881438289598%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_6486: {
    width: wp("1.5549076773566568%"),
    minWidth: wp("1.5549076773566568%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9154518950437307%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_126_6487: {
    width: wp("0.8884825674044031%"),
    minWidth: wp("0.8884825674044031%"),
    height: hp("4.163414011887514%"),
    minHeight: hp("4.163414011887514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.14805029154518934%"),
    top: hp("0.8326796234631217%")
  },
  View_126_6488: {
    width: wp("0.8514970569962779%"),
    minWidth: wp("0.8514970569962779%"),
    height: hp("4.163414011887514%"),
    minHeight: hp("4.163414011887514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(10, 132, 255, 1)",
    opacity: 0.10000000149011612,
    borderColor: "rgba(10, 132, 255, 1)",
    borderWidth: 1.1428571939468384,
    borderTopLeftRadius: 3.047619104385376,
    borderTopRightRadius: 3.047619104385376,
    borderBottomLeftRadius: 3.047619104385376,
    borderBottomRightRadius: 3.047619104385376
  },
  View_126_6489: {
    width: wp("0.03702161205521594%"),
    height: hp("0.9367681591888595%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8514789844509281%"),
    top: hp("0.8326796234631217%"),
    backgroundColor: "rgba(10, 132, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0.380952388048172,
    borderBottomLeftRadius: 0.380952388048172,
    borderBottomRightRadius: 0
  },
  ImageBackground_126_6490: {
    width: wp("0.5553241837244803%"),
    height: hp("0.3122560639199012%"),
    minHeight: hp("0.3122560639199012%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07402514577259467%"),
    top: hp("0.05204664553448879%")
  },
  ImageBackground_126_6491: {
    width: wp("0.44425935624755625%"),
    height: hp("1.1449389118965858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8700801749271179%"),
    top: hp("1.5612826321294335%")
  },
  View_126_6492: {
    width: wp("7.38581146744412%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.191256830601077%"),
    justifyContent: "center"
  },
  Text_126_6492: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_126_6493: {
    width: wp("18.221574344023324%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.65027322404373%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_6493_36_10050: {
    flexGrow: 1,
    width: wp("6.511175898931001%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.879494655004855%"),
    top: hp("2.868852459016381%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_126_6494: {
    width: wp("18.221574344023324%"),
    minWidth: wp("18.221574344023324%"),
    height: hp("22.84723500736424%"),
    minHeight: hp("22.84723500736424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5549076773566526%"),
    top: hp("91.97290972933745%"),
    backgroundColor: "rgba(44, 44, 46, 1)"
  },
  ImageBackground_126_7267: {
    flexGrow: 1,
    width: wp("18.221574344023324%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_126_6495: {
    flexGrow: 1,
    width: wp("18.221574344023324%"),
    height: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_6496: {
    width: wp("5.8794946550048595%"),
    minWidth: wp("5.8794946550048595%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783263%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_6497: {
    width: wp("5.8794946550048595%"),
    minWidth: wp("5.8794946550048595%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_126_6497: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_126_6498: {
    width: wp("3.498542274052478%"),
    minWidth: wp("3.498542274052478%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "center"
  },
  Text_126_6498: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  ImageBackground_140_12188: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.056532434402335%"),
    top: hp("2.536927937158481%")
  },
  ImageBackground_126_6500: {
    flexGrow: 1,
    width: wp("18.221574344023324%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.338797814207624%")
  },
  View_126_6501: {
    flexGrow: 1,
    width: wp("5.053449951409135%"),
    height: hp("7.1368519725695325%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.584062196307094%"),
    top: hp("13.524590163934391%")
  },
  View_126_6502: {
    width: wp("5.053449951409135%"),
    height: hp("7.1368519725695325%"),
    minHeight: hp("7.1368519725695325%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_140_12185: {
    width: wp("1.395795505178913%"),
    minWidth: wp("1.395795505178913%"),
    height: hp("3.8581634479793694%"),
    minHeight: hp("3.8581634479793694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8288007167152571%"),
    top: hp("0%")
  },
  View_126_6504: {
    width: wp("5.053449951409135%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.677827762124338%"),
    justifyContent: "center"
  },
  Text_126_6504: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_126_6217: {
    width: wp("25.072886297376094%"),
    minWidth: wp("25.072886297376094%"),
    height: hp("153.0054644808743%"),
    minHeight: hp("153.0054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.70748299319727%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_6218: {
    width: wp("7.288629737609329%"),
    minWidth: wp("7.288629737609329%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_126_6218: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_126_6219: {
    width: wp("25.072886297376094%"),
    minWidth: wp("25.072886297376094%"),
    height: hp("145.3551912568306%"),
    minHeight: hp("145.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_126_6220: {
    width: wp("2.186588921282799%"),
    minWidth: wp("2.186588921282799%"),
    height: hp("73.77049180327869%"),
    minHeight: hp("73.77049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.886297376093296%"),
    top: hp("35.79234972677595%")
  },
  View_126_6221: {
    width: wp("2.186588921282799%"),
    minWidth: wp("2.186588921282799%"),
    height: hp("73.77049180327869%"),
    minHeight: hp("73.77049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_126_6222: {
    width: wp("2.186588921282799%"),
    minWidth: wp("2.186588921282799%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_126_6222: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_126_6223: {
    width: wp("1.749271137026239%"),
    minWidth: wp("1.749271137026239%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("70.49180327868854%"),
    justifyContent: "center"
  },
  Text_126_6223: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_126_6226: {
    width: wp("21.33138969873664%"),
    minWidth: wp("21.33138969873664%"),
    height: hp("145.3551912568306%"),
    minHeight: hp("145.3551912568306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_126_5489: {
    width: wp("18.221574344023324%"),
    minWidth: wp("18.221574344023324%"),
    height: hp("66.12021857923497%"),
    minHeight: hp("66.12021857923497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5549076773566526%"),
    top: hp("4.371584699453557%"),
    backgroundColor: "rgba(250, 250, 250, 0.9300000071525574)",
    overflow: "hidden"
  },
  View_126_5468: {
    flexGrow: 1,
    width: wp("16.666666666666664%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783405%"),
    top: hp("2.1857923497267606%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_5469: {
    width: wp("2.818270165208941%"),
    minWidth: wp("2.818270165208941%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185793542%")
  },
  View_126_5470: {
    width: wp("1.84645286686103%"),
    minWidth: wp("1.84645286686103%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9718172983479008%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_126_5470: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_126_5471: {
    width: wp("0.8746355685131195%"),
    minWidth: wp("0.8746355685131195%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737636%"),
    justifyContent: "center"
  },
  Text_126_5471: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_126_6588: {
    width: wp("1.4577259475218658%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.208940719144792%")
  },
  View_126_6352: {
    flexGrow: 1,
    width: wp("16.666666666666664%"),
    height: hp("54.37158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783405%"),
    top: hp("9.562841530054648%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_6289: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    height: hp("12.568306010928962%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I126_6289_126_6408: {
    flexGrow: 1,
    width: wp("1.9436345966958213%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783121%"),
    top: hp("2.1857923497267535%")
  },
  View_I126_6289_126_5711: {
    flexGrow: 1,
    width: wp("12.682215743440233%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2069970845480924%"),
    top: hp("2.1857923497267535%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_6289_126_5712: {
    width: wp("9.523809523809524%"),
    minWidth: wp("9.523809523809524%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_6289_126_5713: {
    width: wp("3.741496598639456%"),
    minWidth: wp("3.741496598639456%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I126_6289_126_5713: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I126_6289_126_5714: {
    width: wp("9.523809523809524%"),
    minWidth: wp("9.523809523809524%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.0054644808743234%"),
    justifyContent: "center"
  },
  Text_I126_6289_126_5714: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I126_6289_126_5715: {
    width: wp("2.818270165208941%"),
    minWidth: wp("2.818270165208941%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.737704918032804%"),
    justifyContent: "center"
  },
  Text_I126_6289_126_5715: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  ImageBackground_I126_6289_140_12075: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.294627672497583%"),
    top: hp("3.151682035519144%")
  },
  View_126_6422: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.661202185792334%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I126_6422_126_6399: {
    flexGrow: 1,
    width: wp("1.5549076773566568%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783121%"),
    top: hp("2.185792349726782%")
  },
  View_I126_6422_126_6401: {
    flexGrow: 1,
    width: wp("13.070942662779398%"),
    height: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8182701652089293%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_6422_126_6402: {
    width: wp("9.280855199222545%"),
    minWidth: wp("9.280855199222545%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_6422_126_6403: {
    width: wp("2.380952380952381%"),
    minWidth: wp("2.380952380952381%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I126_6422_126_6403: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I126_6422_126_6404: {
    width: wp("9.280855199222545%"),
    minWidth: wp("9.280855199222545%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584668%"),
    justifyContent: "center"
  },
  Text_I126_6422_126_6404: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I126_6422_126_6405: {
    width: wp("5.393586005830904%"),
    minWidth: wp("5.393586005830904%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.737704918032776%"),
    justifyContent: "center"
  },
  Text_I126_6422_126_6405: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_I126_6422_140_12059: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.683354591836746%"),
    top: hp("3.288294057377044%")
  },
  View_126_6298: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    height: hp("15.846994535519126%"),
    minHeight: hp("15.846994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27.59562841530054%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I126_6298_126_6102: {
    flexGrow: 1,
    width: wp("1.5549076773566568%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783121%"),
    top: hp("2.185792349726782%")
  },
  View_I126_6298_126_6104: {
    flexGrow: 1,
    width: wp("13.070942662779398%"),
    height: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8182701652089293%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_6298_126_6105: {
    width: wp("6.462585034013606%"),
    minWidth: wp("6.462585034013606%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_6298_126_6106: {
    width: wp("2.623906705539359%"),
    minWidth: wp("2.623906705539359%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I126_6298_126_6106: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I126_6298_126_6107: {
    width: wp("4.761904761904762%"),
    minWidth: wp("4.761904761904762%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584526%"),
    justifyContent: "center"
  },
  Text_I126_6298_126_6107: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I126_6298_126_6108: {
    width: wp("6.462585034013606%"),
    minWidth: wp("6.462585034013606%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.73770491803279%"),
    justifyContent: "center"
  },
  Text_I126_6298_126_6108: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I126_6298_126_6119: {
    width: wp("5.830903790087463%"),
    minWidth: wp("5.830903790087463%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.7431693989071%"),
    justifyContent: "center"
  },
  Text_I126_6298_126_6119: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_I126_6298_140_12040: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.683354591836746%"),
    top: hp("4.791026297814184%")
  },
  View_126_6353: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44.53551912568305%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I126_6353_126_6317: {
    flexGrow: 1,
    width: wp("1.5549076773566568%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783121%"),
    top: hp("2.1857923497267677%")
  },
  View_I126_6353_126_6319: {
    flexGrow: 1,
    width: wp("13.070942662779398%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8182701652089293%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_6353_126_6320: {
    width: wp("5.4907677356656945%"),
    minWidth: wp("5.4907677356656945%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_6353_126_6321: {
    width: wp("2.623906705539359%"),
    minWidth: wp("2.623906705539359%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I126_6353_126_6321: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I126_6353_126_6322: {
    width: wp("5.4907677356656945%"),
    minWidth: wp("5.4907677356656945%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584668%"),
    justifyContent: "center"
  },
  Text_I126_6353_126_6322: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I126_6353_126_6327: {
    width: wp("2.525586127308066%"),
    minWidth: wp("2.525586127308066%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.545356535471328%"),
    top: hp("1.5027322404371688%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_6353_126_6326: {
    width: wp("1.749271137026239%"),
    minWidth: wp("1.749271137026239%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I126_6353_126_6326: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  ImageBackground_I126_6353_140_12033: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1379980563654186%"),
    top: hp("0.28282957650272067%")
  },
  View_126_6510: {
    width: wp("18.221574344023324%"),
    minWidth: wp("18.221574344023324%"),
    height: hp("66.12021857923497%"),
    minHeight: hp("66.12021857923497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5549076773566526%"),
    top: hp("74.86338797814209%"),
    backgroundColor: "rgba(28, 28, 30, 1)",
    overflow: "hidden"
  },
  View_126_6511: {
    flexGrow: 1,
    width: wp("16.666666666666664%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783405%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_6512: {
    width: wp("2.818270165208941%"),
    minWidth: wp("2.818270165208941%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218578999%")
  },
  View_126_6513: {
    width: wp("1.84645286686103%"),
    minWidth: wp("1.84645286686103%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9718172983479008%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_126_6513: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_126_6514: {
    width: wp("0.8746355685131195%"),
    minWidth: wp("0.8746355685131195%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.40983606557378494%"),
    justifyContent: "center"
  },
  Text_126_6514: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_126_6515: {
    width: wp("1.4577259475218658%"),
    minWidth: wp("1.4577259475218658%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.208940719144792%"),
    top: hp("0%"),
    backgroundColor: "rgba(44, 44, 46, 1)"
  },
  View_126_6516: {
    width: wp("0.6802721088435374%"),
    top: hp("0.8196721311475414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.38872691933916315%"),
    justifyContent: "center"
  },
  Text_126_6516: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_126_6517: {
    flexGrow: 1,
    width: wp("16.666666666666664%"),
    height: hp("54.37158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783405%"),
    top: hp("9.56284153005464%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_6518: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    height: hp("12.568306010928962%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(44, 44, 46, 1)",
    overflow: "hidden"
  },
  ImageBackground_I126_6518_126_6410: {
    flexGrow: 1,
    width: wp("1.9436345966958213%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783121%"),
    top: hp("2.1857923497267677%")
  },
  View_I126_6518_126_6411: {
    flexGrow: 1,
    width: wp("12.682215743440233%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2069970845480924%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_6518_126_6412: {
    width: wp("9.523809523809524%"),
    minWidth: wp("9.523809523809524%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_6518_126_6413: {
    width: wp("3.741496598639456%"),
    minWidth: wp("3.741496598639456%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I126_6518_126_6413: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I126_6518_126_6414: {
    width: wp("9.523809523809524%"),
    minWidth: wp("9.523809523809524%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.005464480874309%"),
    justifyContent: "center"
  },
  Text_I126_6518_126_6414: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I126_6518_126_6415: {
    width: wp("2.818270165208941%"),
    minWidth: wp("2.818270165208941%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.73770491803279%"),
    justifyContent: "center"
  },
  Text_I126_6518_126_6415: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  ImageBackground_I126_6518_140_12161: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.294627672497583%"),
    top: hp("3.1516820355191157%")
  },
  View_126_6519: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.661202185792348%"),
    backgroundColor: "rgba(44, 44, 46, 1)",
    overflow: "hidden"
  },
  ImageBackground_I126_6519_126_6093: {
    flexGrow: 1,
    width: wp("1.5549076773566568%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783121%"),
    top: hp("2.1857923497267677%")
  },
  View_I126_6519_126_6095: {
    flexGrow: 1,
    width: wp("13.070942662779398%"),
    height: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8182701652089293%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_6519_126_6096: {
    width: wp("9.280855199222545%"),
    minWidth: wp("9.280855199222545%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_6519_126_6097: {
    width: wp("2.380952380952381%"),
    minWidth: wp("2.380952380952381%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I126_6519_126_6097: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I126_6519_126_6098: {
    width: wp("9.280855199222545%"),
    minWidth: wp("9.280855199222545%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.732240437158481%"),
    justifyContent: "center"
  },
  Text_I126_6519_126_6098: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I126_6519_126_6099: {
    width: wp("5.393586005830904%"),
    minWidth: wp("5.393586005830904%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.73770491803279%"),
    justifyContent: "center"
  },
  Text_I126_6519_126_6099: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_I126_6519_140_12140: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.683354591836746%"),
    top: hp("3.288294057377044%")
  },
  View_126_6520: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    height: hp("15.846994535519126%"),
    minHeight: hp("15.846994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27.595628415300553%"),
    backgroundColor: "rgba(44, 44, 46, 1)",
    overflow: "hidden"
  },
  ImageBackground_I126_6520_126_6131: {
    flexGrow: 1,
    width: wp("1.5549076773566568%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783121%"),
    top: hp("2.1857923497267677%")
  },
  View_I126_6520_126_6133: {
    flexGrow: 1,
    width: wp("13.070942662779398%"),
    height: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8182701652089293%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_6520_126_6134: {
    width: wp("6.462585034013606%"),
    minWidth: wp("6.462585034013606%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_6520_126_6135: {
    width: wp("2.623906705539359%"),
    minWidth: wp("2.623906705539359%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I126_6520_126_6135: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I126_6520_126_6136: {
    width: wp("4.761904761904762%"),
    minWidth: wp("4.761904761904762%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.732240437158481%"),
    justifyContent: "center"
  },
  Text_I126_6520_126_6136: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I126_6520_126_6137: {
    width: wp("6.462585034013606%"),
    minWidth: wp("6.462585034013606%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.73770491803279%"),
    justifyContent: "center"
  },
  Text_I126_6520_126_6137: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I126_6520_126_6138: {
    width: wp("5.830903790087463%"),
    minWidth: wp("5.830903790087463%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.7431693989071%"),
    justifyContent: "center"
  },
  Text_I126_6520_126_6138: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_I126_6520_140_12115: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.683354591836746%"),
    top: hp("4.791026297814199%")
  },
  View_126_6521: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44.53551912568304%"),
    backgroundColor: "rgba(44, 44, 46, 1)",
    overflow: "hidden"
  },
  ImageBackground_I126_6521_126_6339: {
    flexGrow: 1,
    width: wp("1.5549076773566568%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783121%"),
    top: hp("2.185792349726796%")
  },
  View_I126_6521_126_6341: {
    flexGrow: 1,
    width: wp("13.070942662779398%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8182701652089293%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_6521_126_6342: {
    width: wp("5.4907677356656945%"),
    minWidth: wp("5.4907677356656945%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_6521_126_6343: {
    width: wp("2.623906705539359%"),
    minWidth: wp("2.623906705539359%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I126_6521_126_6343: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I126_6521_126_6344: {
    width: wp("5.4907677356656945%"),
    minWidth: wp("5.4907677356656945%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.732240437158481%"),
    justifyContent: "center"
  },
  Text_I126_6521_126_6344: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I126_6521_126_6345: {
    width: wp("2.525586127308066%"),
    minWidth: wp("2.525586127308066%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.545356535471328%"),
    top: hp("1.5027322404371546%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_6521_126_6346: {
    width: wp("1.749271137026239%"),
    minWidth: wp("1.749271137026239%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I126_6521_126_6346: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  ImageBackground_I126_6521_140_12106: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1379980563654186%"),
    top: hp("0.2828295765027349%")
  },
  View_74_2922: {
    width: wp("93.78036929057338%"),
    minWidth: wp("93.78036929057338%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1098153547133136%"),
    top: hp("208.60655737704917%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I74_2922_10_2318: {
    flexGrow: 1,
    width: wp("5.4907677356656945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I74_2922_10_2318: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I74_2922_10_2319: {
    flexGrow: 1,
    width: wp("93.78036929057338%"),
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
  View_74_2923: {
    width: wp("80.66083576287659%"),
    minWidth: wp("80.66083576287659%"),
    height: hp("134.9726775956284%"),
    minHeight: hp("134.9726775956284%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1098153547133136%"),
    top: hp("225.81967213114754%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_74_2924: {
    width: wp("5.053449951409135%"),
    minWidth: wp("5.053449951409135%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_74_2924: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_74_2925: {
    width: wp("80.66083576287659%"),
    minWidth: wp("80.66083576287659%"),
    height: hp("127.32240437158471%"),
    minHeight: hp("127.32240437158471%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043701%")
  },
  View_74_2926: {
    width: wp("65.50048590864918%"),
    minWidth: wp("65.50048590864918%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5549076773566575%"),
    top: hp("0%")
  },
  View_74_2927: {
    width: wp("65.50048590864918%"),
    minWidth: wp("65.50048590864918%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_74_2928: {
    width: wp("6.171039844509233%"),
    minWidth: wp("6.171039844509233%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_74_2928: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_75_9144: {
    width: wp("6.608357628765791%"),
    minWidth: wp("6.608357628765791%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.77648202137998%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_75_9144: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_75_9145: {
    width: wp("5.733722060252672%"),
    minWidth: wp("5.733722060252672%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.55296404275996%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_75_9145: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_75_9146: {
    width: wp("6.171039844509233%"),
    minWidth: wp("6.171039844509233%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.32944606413994%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_75_9146: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_74_2934: {
    width: wp("80.66083576287659%"),
    minWidth: wp("80.66083576287659%"),
    height: hp("119.67213114754098%"),
    minHeight: hp("119.67213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.65027322404373%")
  },
  View_118_3931: {
    width: wp("18.221574344023324%"),
    minWidth: wp("18.221574344023324%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5549076773566575%"),
    top: hp("4.371584699453564%"),
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    overflow: "hidden"
  },
  View_118_3976: {
    flexGrow: 1,
    width: wp("6.802721088435375%"),
    height: hp("14.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.147716229348884%"),
    top: hp("21.31147540983605%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_118_3977: {
    width: wp("5.393586005830904%"),
    minWidth: wp("5.393586005830904%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.961748633879779%"),
    justifyContent: "center"
  },
  Text_118_3977: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_118_3978: {
    width: wp("1.0204081632653061%"),
    minWidth: wp("1.0204081632653061%"),
    height: hp("14.48087431693989%"),
    minHeight: hp("14.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.782312925170064%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_126_6642: {
    flexGrow: 1,
    width: wp("18.221574344023324%"),
    height: hp("66.12021857923497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44.80874316939892%"),
    backgroundColor: "rgba(250, 250, 250, 0.9300000071525574)",
    overflow: "hidden"
  },
  View_I126_6642_126_5468: {
    flexGrow: 1,
    width: wp("16.666666666666664%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783281%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_6642_126_5469: {
    width: wp("2.818270165208941%"),
    minWidth: wp("2.818270165208941%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218578999%")
  },
  View_I126_6642_126_5470: {
    width: wp("1.84645286686103%"),
    minWidth: wp("1.84645286686103%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9718172983479105%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I126_6642_126_5470: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I126_6642_126_5471: {
    width: wp("0.8746355685131195%"),
    minWidth: wp("0.8746355685131195%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737565%"),
    justifyContent: "center"
  },
  Text_I126_6642_126_5471: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I126_6642_126_6588: {
    width: wp("1.4577259475218658%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.208940719144803%")
  },
  View_I126_6642_126_6352: {
    flexGrow: 1,
    width: wp("16.666666666666664%"),
    height: hp("54.37158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783281%"),
    top: hp("9.56284153005464%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_6642_126_6289: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    height: hp("12.568306010928962%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I126_6642_126_6289_126_6408: {
    flexGrow: 1,
    width: wp("1.9436345966958213%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783281%"),
    top: hp("2.185792349726796%")
  },
  View_I126_6642_126_6289_126_5711: {
    flexGrow: 1,
    width: wp("12.682215743440233%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2069970845481057%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_6642_126_6289_126_5712: {
    width: wp("9.523809523809524%"),
    minWidth: wp("9.523809523809524%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_6642_126_6289_126_5713: {
    width: wp("3.741496598639456%"),
    minWidth: wp("3.741496598639456%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I126_6642_126_6289_126_5713: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I126_6642_126_6289_126_5714: {
    width: wp("9.523809523809524%"),
    minWidth: wp("9.523809523809524%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.005464480874309%"),
    justifyContent: "center"
  },
  Text_I126_6642_126_6289_126_5714: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I126_6642_126_6289_126_5715: {
    width: wp("2.818270165208941%"),
    minWidth: wp("2.818270165208941%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.737704918032762%"),
    justifyContent: "center"
  },
  Text_I126_6642_126_6289_126_5715: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  ImageBackground_I126_6642_126_6289_140_12075: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.294627672497572%"),
    top: hp("3.1516820355191157%")
  },
  View_I126_6642_126_6422: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.66120218579232%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I126_6642_126_6422_126_6399: {
    flexGrow: 1,
    width: wp("1.5549076773566568%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783281%"),
    top: hp("2.185792349726796%")
  },
  View_I126_6642_126_6422_126_6401: {
    flexGrow: 1,
    width: wp("13.070942662779398%"),
    height: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.818270165208941%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_6642_126_6422_126_6402: {
    width: wp("9.280855199222545%"),
    minWidth: wp("9.280855199222545%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_6642_126_6422_126_6403: {
    width: wp("2.380952380952381%"),
    minWidth: wp("2.380952380952381%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I126_6642_126_6422_126_6403: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I126_6642_126_6422_126_6404: {
    width: wp("9.280855199222545%"),
    minWidth: wp("9.280855199222545%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584526%"),
    justifyContent: "center"
  },
  Text_I126_6642_126_6422_126_6404: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I126_6642_126_6422_126_6405: {
    width: wp("5.393586005830904%"),
    minWidth: wp("5.393586005830904%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.737704918032762%"),
    justifyContent: "center"
  },
  Text_I126_6642_126_6422_126_6405: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_I126_6642_126_6422_140_12059: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.683354591836737%"),
    top: hp("3.2882940573770156%")
  },
  View_I126_6642_126_6298: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    height: hp("15.846994535519126%"),
    minHeight: hp("15.846994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27.595628415300553%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I126_6642_126_6298_126_6102: {
    flexGrow: 1,
    width: wp("1.5549076773566568%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783281%"),
    top: hp("2.1857923497267393%")
  },
  View_I126_6642_126_6298_126_6104: {
    flexGrow: 1,
    width: wp("13.070942662779398%"),
    height: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.818270165208941%"),
    top: hp("2.1857923497267393%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_6642_126_6298_126_6105: {
    width: wp("6.462585034013606%"),
    minWidth: wp("6.462585034013606%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_6642_126_6298_126_6106: {
    width: wp("2.623906705539359%"),
    minWidth: wp("2.623906705539359%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I126_6642_126_6298_126_6106: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I126_6642_126_6298_126_6107: {
    width: wp("4.761904761904762%"),
    minWidth: wp("4.761904761904762%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584526%"),
    justifyContent: "center"
  },
  Text_I126_6642_126_6298_126_6107: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I126_6642_126_6298_126_6108: {
    width: wp("6.462585034013606%"),
    minWidth: wp("6.462585034013606%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.737704918032762%"),
    justifyContent: "center"
  },
  Text_I126_6642_126_6298_126_6108: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I126_6642_126_6298_126_6119: {
    width: wp("5.830903790087463%"),
    minWidth: wp("5.830903790087463%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.743169398907071%"),
    justifyContent: "center"
  },
  Text_I126_6642_126_6298_126_6119: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_I126_6642_126_6298_140_12040: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.683354591836737%"),
    top: hp("4.791026297814199%")
  },
  View_I126_6642_126_6353: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44.53551912568304%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I126_6642_126_6353_126_6317: {
    flexGrow: 1,
    width: wp("1.5549076773566568%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783281%"),
    top: hp("2.185792349726796%")
  },
  View_I126_6642_126_6353_126_6319: {
    flexGrow: 1,
    width: wp("13.070942662779398%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.818270165208941%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_6642_126_6353_126_6320: {
    width: wp("5.4907677356656945%"),
    minWidth: wp("5.4907677356656945%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_6642_126_6353_126_6321: {
    width: wp("2.623906705539359%"),
    minWidth: wp("2.623906705539359%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I126_6642_126_6353_126_6321: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I126_6642_126_6353_126_6322: {
    width: wp("5.4907677356656945%"),
    minWidth: wp("5.4907677356656945%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584526%"),
    justifyContent: "center"
  },
  Text_I126_6642_126_6353_126_6322: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I126_6642_126_6353_126_6327: {
    width: wp("2.525586127308066%"),
    minWidth: wp("2.525586127308066%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.545356535471333%"),
    top: hp("1.5027322404371262%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_6642_126_6353_126_6326: {
    width: wp("1.749271137026239%"),
    minWidth: wp("1.749271137026239%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I126_6642_126_6353_126_6326: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  ImageBackground_I126_6642_126_6353_140_12033: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1379980563654044%"),
    top: hp("0.2828295765027633%")
  },
  View_126_6832: {
    flexGrow: 1,
    width: wp("18.221574344023324%"),
    height: hp("25.81967213114754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("85.10928961748633%"),
    backgroundColor: "rgba(250, 250, 250, 0.9300000071525574)"
  },
  ImageBackground_I126_6832_126_7050: {
    flexGrow: 1,
    width: wp("18.221574344023324%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I126_6832_126_6449: {
    flexGrow: 1,
    width: wp("18.221574344023324%"),
    height: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_6832_126_6450: {
    width: wp("5.8794946550048595%"),
    minWidth: wp("5.8794946550048595%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783281%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_6832_126_6451: {
    width: wp("5.8794946550048595%"),
    minWidth: wp("5.8794946550048595%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I126_6832_126_6451: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I126_6832_126_6452: {
    width: wp("3.498542274052478%"),
    minWidth: wp("3.498542274052478%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.459016393442596%"),
    justifyContent: "center"
  },
  Text_I126_6832_126_6452: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  ImageBackground_I126_6832_140_12207: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.05653243440233%"),
    top: hp("2.5369279371584526%")
  },
  ImageBackground_I126_6832_126_6454: {
    flexGrow: 1,
    width: wp("18.221574344023324%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.338797814207624%")
  },
  View_I126_6832_126_6455: {
    flexGrow: 1,
    width: wp("18.221574344023324%"),
    height: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.52459016393442%")
  },
  View_I126_6832_126_6456: {
    width: wp("7.38581146744412%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.417881438289602%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_6832_126_6457: {
    width: wp("1.5549076773566568%"),
    minWidth: wp("1.5549076773566568%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9154518950437307%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I126_6832_126_6458: {
    width: wp("0.8884825674044031%"),
    minWidth: wp("0.8884825674044031%"),
    height: hp("4.163414011887514%"),
    minHeight: hp("4.163414011887514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.14805029154518934%"),
    top: hp("0.8326796234630933%")
  },
  View_I126_6832_126_6459: {
    width: wp("0.8514970569962779%"),
    minWidth: wp("0.8514970569962779%"),
    height: hp("4.163414011887514%"),
    minHeight: hp("4.163414011887514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(10, 132, 255, 1)",
    opacity: 0.10000000149011612,
    borderColor: "rgba(0, 122, 255, 1)",
    borderWidth: 1.1428571939468384,
    borderTopLeftRadius: 3.047619104385376,
    borderTopRightRadius: 3.047619104385376,
    borderBottomLeftRadius: 3.047619104385376,
    borderBottomRightRadius: 3.047619104385376
  },
  View_I126_6832_126_6460: {
    width: wp("0.03702161205521594%"),
    height: hp("0.9367681591888595%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8514789844509227%"),
    top: hp("0.8326796234631502%"),
    backgroundColor: "rgba(0, 122, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0.380952388048172,
    borderBottomLeftRadius: 0.380952388048172,
    borderBottomRightRadius: 0
  },
  ImageBackground_I126_6832_126_6461: {
    width: wp("0.5553241837244803%"),
    height: hp("0.3122560639199012%"),
    minHeight: hp("0.3122560639199012%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07402514577259645%"),
    top: hp("0.052029969262321174%")
  },
  ImageBackground_I126_6832_126_6462: {
    width: wp("0.44425935624755625%"),
    height: hp("1.1449389118965858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8699852708940714%"),
    top: hp("1.561265955857266%")
  },
  View_I126_6832_126_6463: {
    width: wp("7.38581146744412%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.191256830601105%"),
    justifyContent: "center"
  },
  Text_I126_6832_126_6463: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I126_6832_126_6464: {
    width: wp("18.221574344023324%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043758%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_6832_126_6464_5_3093: {
    flexGrow: 1,
    width: wp("6.511175898931001%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.8794946550048595%"),
    top: hp("2.8688524590163524%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_75_8372: {
    width: wp("18.221574344023324%"),
    minWidth: wp("18.221574344023324%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.33138969873664%"),
    top: hp("4.371584699453564%"),
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    overflow: "hidden"
  },
  View_126_7336: {
    flexGrow: 1,
    width: wp("18.221574344023324%"),
    height: hp("66.12021857923497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44.80874316939892%"),
    backgroundColor: "rgba(250, 250, 250, 0.9300000071525574)",
    overflow: "hidden"
  },
  View_I126_7336_126_5468: {
    flexGrow: 1,
    width: wp("16.666666666666664%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783298%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7336_126_5469: {
    width: wp("2.818270165208941%"),
    minWidth: wp("2.818270165208941%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218578999%")
  },
  View_I126_7336_126_5470: {
    width: wp("1.84645286686103%"),
    minWidth: wp("1.84645286686103%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9718172983479114%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I126_7336_126_5470: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I126_7336_126_5471: {
    width: wp("0.8746355685131195%"),
    minWidth: wp("0.8746355685131195%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737565%"),
    justifyContent: "center"
  },
  Text_I126_7336_126_5471: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I126_7336_126_6588: {
    width: wp("1.4577259475218658%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.208940719144799%")
  },
  View_I126_7336_126_6352: {
    flexGrow: 1,
    width: wp("16.666666666666664%"),
    height: hp("54.37158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783298%"),
    top: hp("9.56284153005464%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7336_126_6289: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    height: hp("12.568306010928962%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I126_7336_126_6289_126_6408: {
    flexGrow: 1,
    width: wp("1.9436345966958213%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783263%"),
    top: hp("2.185792349726796%")
  },
  View_I126_7336_126_6289_126_5711: {
    flexGrow: 1,
    width: wp("12.682215743440233%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.206997084548103%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7336_126_6289_126_5712: {
    width: wp("9.523809523809524%"),
    minWidth: wp("9.523809523809524%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7336_126_6289_126_5713: {
    width: wp("3.741496598639456%"),
    minWidth: wp("3.741496598639456%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I126_7336_126_6289_126_5713: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I126_7336_126_6289_126_5714: {
    width: wp("9.523809523809524%"),
    minWidth: wp("9.523809523809524%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.005464480874309%"),
    justifyContent: "center"
  },
  Text_I126_7336_126_6289_126_5714: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I126_7336_126_6289_126_5715: {
    width: wp("2.818270165208941%"),
    minWidth: wp("2.818270165208941%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.737704918032762%"),
    justifyContent: "center"
  },
  Text_I126_7336_126_6289_126_5715: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  ImageBackground_I126_7336_126_6289_140_12075: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.294627672497572%"),
    top: hp("3.1516820355191157%")
  },
  View_I126_7336_126_6422: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.66120218579232%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I126_7336_126_6422_126_6399: {
    flexGrow: 1,
    width: wp("1.5549076773566568%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783263%"),
    top: hp("2.185792349726796%")
  },
  View_I126_7336_126_6422_126_6401: {
    flexGrow: 1,
    width: wp("13.070942662779398%"),
    height: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.81827016520894%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7336_126_6422_126_6402: {
    width: wp("9.280855199222545%"),
    minWidth: wp("9.280855199222545%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7336_126_6422_126_6403: {
    width: wp("2.380952380952381%"),
    minWidth: wp("2.380952380952381%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I126_7336_126_6422_126_6403: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I126_7336_126_6422_126_6404: {
    width: wp("9.280855199222545%"),
    minWidth: wp("9.280855199222545%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584526%"),
    justifyContent: "center"
  },
  Text_I126_7336_126_6422_126_6404: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I126_7336_126_6422_126_6405: {
    width: wp("5.393586005830904%"),
    minWidth: wp("5.393586005830904%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.737704918032762%"),
    justifyContent: "center"
  },
  Text_I126_7336_126_6422_126_6405: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_I126_7336_126_6422_140_12059: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.683354591836736%"),
    top: hp("3.2882940573770156%")
  },
  View_I126_7336_126_6298: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    height: hp("15.846994535519126%"),
    minHeight: hp("15.846994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27.595628415300553%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I126_7336_126_6298_126_6102: {
    flexGrow: 1,
    width: wp("1.5549076773566568%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783263%"),
    top: hp("2.1857923497267393%")
  },
  View_I126_7336_126_6298_126_6104: {
    flexGrow: 1,
    width: wp("13.070942662779398%"),
    height: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.81827016520894%"),
    top: hp("2.1857923497267393%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7336_126_6298_126_6105: {
    width: wp("6.462585034013606%"),
    minWidth: wp("6.462585034013606%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7336_126_6298_126_6106: {
    width: wp("2.623906705539359%"),
    minWidth: wp("2.623906705539359%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I126_7336_126_6298_126_6106: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I126_7336_126_6298_126_6107: {
    width: wp("4.761904761904762%"),
    minWidth: wp("4.761904761904762%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584526%"),
    justifyContent: "center"
  },
  Text_I126_7336_126_6298_126_6107: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I126_7336_126_6298_126_6108: {
    width: wp("6.462585034013606%"),
    minWidth: wp("6.462585034013606%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.737704918032762%"),
    justifyContent: "center"
  },
  Text_I126_7336_126_6298_126_6108: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I126_7336_126_6298_126_6119: {
    width: wp("5.830903790087463%"),
    minWidth: wp("5.830903790087463%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.743169398907071%"),
    justifyContent: "center"
  },
  Text_I126_7336_126_6298_126_6119: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_I126_7336_126_6298_140_12040: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.683354591836736%"),
    top: hp("4.791026297814199%")
  },
  View_I126_7336_126_6353: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44.53551912568304%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I126_7336_126_6353_126_6317: {
    flexGrow: 1,
    width: wp("1.5549076773566568%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783263%"),
    top: hp("2.185792349726796%")
  },
  View_I126_7336_126_6353_126_6319: {
    flexGrow: 1,
    width: wp("13.070942662779398%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.81827016520894%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7336_126_6353_126_6320: {
    width: wp("5.4907677356656945%"),
    minWidth: wp("5.4907677356656945%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7336_126_6353_126_6321: {
    width: wp("2.623906705539359%"),
    minWidth: wp("2.623906705539359%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I126_7336_126_6353_126_6321: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I126_7336_126_6353_126_6322: {
    width: wp("5.4907677356656945%"),
    minWidth: wp("5.4907677356656945%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584526%"),
    justifyContent: "center"
  },
  Text_I126_7336_126_6353_126_6322: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I126_7336_126_6353_126_6327: {
    width: wp("2.525586127308066%"),
    minWidth: wp("2.525586127308066%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.545356535471331%"),
    top: hp("1.5027322404371262%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7336_126_6353_126_6326: {
    width: wp("1.749271137026239%"),
    minWidth: wp("1.749271137026239%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I126_7336_126_6353_126_6326: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  ImageBackground_I126_7336_126_6353_140_12033: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1379980563654044%"),
    top: hp("0.2828295765027633%")
  },
  View_126_7337: {
    flexGrow: 1,
    width: wp("18.221574344023324%"),
    height: hp("22.84723500736424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("88.08173507940572%"),
    backgroundColor: "rgba(250, 250, 250, 0.9300000071525574)"
  },
  ImageBackground_I126_7337_126_7048: {
    flexGrow: 1,
    width: wp("18.221574344023324%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I126_7337_126_6466: {
    flexGrow: 1,
    width: wp("18.221574344023324%"),
    height: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7337_126_6467: {
    width: wp("5.8794946550048595%"),
    minWidth: wp("5.8794946550048595%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783298%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7337_126_6468: {
    width: wp("5.8794946550048595%"),
    minWidth: wp("5.8794946550048595%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I126_7337_126_6468: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I126_7337_126_6469: {
    width: wp("3.498542274052478%"),
    minWidth: wp("3.498542274052478%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4590163934426528%"),
    justifyContent: "center"
  },
  Text_I126_7337_126_6469: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  ImageBackground_I126_7337_140_12202: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.05653243440233%"),
    top: hp("2.5369279371584526%")
  },
  ImageBackground_I126_7337_126_6471: {
    flexGrow: 1,
    width: wp("18.221574344023324%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.33879781420768%")
  },
  View_I126_7337_126_6472: {
    flexGrow: 1,
    width: wp("5.053449951409135%"),
    height: hp("7.1368519725695325%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.584062196307091%"),
    top: hp("13.524590163934477%")
  },
  View_I126_7337_126_6473: {
    width: wp("5.053449951409135%"),
    height: hp("7.1368519725695325%"),
    minHeight: hp("7.1368519725695325%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I126_7337_140_12182: {
    width: wp("1.395795505178913%"),
    minWidth: wp("1.395795505178913%"),
    height: hp("3.8581634479793694%"),
    minHeight: hp("3.8581634479793694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8288007167152642%"),
    top: hp("0%")
  },
  View_I126_7337_126_6475: {
    width: wp("5.053449951409135%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.677827762124309%"),
    justifyContent: "center"
  },
  Text_I126_7337_126_6475: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_126_7481: {
    width: wp("18.221574344023324%"),
    minWidth: wp("18.221574344023324%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.10787172011662%"),
    top: hp("4.371584699453564%"),
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    overflow: "hidden"
  },
  View_126_7482: {
    flexGrow: 1,
    width: wp("6.802721088435375%"),
    height: hp("14.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.147716229348887%"),
    top: hp("21.31147540983605%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_126_7483: {
    width: wp("5.393586005830904%"),
    minWidth: wp("5.393586005830904%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.961748633879779%"),
    justifyContent: "center"
  },
  Text_126_7483: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_126_7484: {
    width: wp("1.0204081632653061%"),
    minWidth: wp("1.0204081632653061%"),
    height: hp("14.48087431693989%"),
    minHeight: hp("14.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.782312925170061%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_126_7485: {
    flexGrow: 1,
    width: wp("18.221574344023324%"),
    height: hp("66.12021857923497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44.80874316939892%"),
    backgroundColor: "rgba(28, 28, 30, 1)",
    overflow: "hidden"
  },
  View_I126_7485_126_6511: {
    flexGrow: 1,
    width: wp("16.666666666666664%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783263%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7485_126_6512: {
    width: wp("2.818270165208941%"),
    minWidth: wp("2.818270165208941%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218578999%")
  },
  View_I126_7485_126_6513: {
    width: wp("1.84645286686103%"),
    minWidth: wp("1.84645286686103%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.971817298347915%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I126_7485_126_6513: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I126_7485_126_6514: {
    width: wp("0.8746355685131195%"),
    minWidth: wp("0.8746355685131195%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737565%"),
    justifyContent: "center"
  },
  Text_I126_7485_126_6514: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I126_7485_126_6515: {
    width: wp("1.4577259475218658%"),
    minWidth: wp("1.4577259475218658%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.208940719144806%"),
    top: hp("0%"),
    backgroundColor: "rgba(44, 44, 46, 1)"
  },
  View_I126_7485_126_6516: {
    width: wp("0.6802721088435374%"),
    top: hp("0.819672131147513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.38872691933916315%"),
    justifyContent: "center"
  },
  Text_I126_7485_126_6516: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I126_7485_126_6517: {
    flexGrow: 1,
    width: wp("16.666666666666664%"),
    height: hp("54.37158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783263%"),
    top: hp("9.56284153005464%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7485_126_6518: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    height: hp("12.568306010928962%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(44, 44, 46, 1)",
    overflow: "hidden"
  },
  ImageBackground_I126_7485_126_6518_126_6410: {
    flexGrow: 1,
    width: wp("1.9436345966958213%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783334%"),
    top: hp("2.185792349726796%")
  },
  View_I126_7485_126_6518_126_6411: {
    flexGrow: 1,
    width: wp("12.682215743440233%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2069970845481066%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7485_126_6518_126_6412: {
    width: wp("9.523809523809524%"),
    minWidth: wp("9.523809523809524%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7485_126_6518_126_6413: {
    width: wp("3.741496598639456%"),
    minWidth: wp("3.741496598639456%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I126_7485_126_6518_126_6413: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I126_7485_126_6518_126_6414: {
    width: wp("9.523809523809524%"),
    minWidth: wp("9.523809523809524%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.005464480874309%"),
    justifyContent: "center"
  },
  Text_I126_7485_126_6518_126_6414: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I126_7485_126_6518_126_6415: {
    width: wp("2.818270165208941%"),
    minWidth: wp("2.818270165208941%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.737704918032762%"),
    justifyContent: "center"
  },
  Text_I126_7485_126_6518_126_6415: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  ImageBackground_I126_7485_126_6518_140_12161: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.294627672497569%"),
    top: hp("3.1516820355191157%")
  },
  View_I126_7485_126_6519: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.66120218579232%"),
    backgroundColor: "rgba(44, 44, 46, 1)",
    overflow: "hidden"
  },
  ImageBackground_I126_7485_126_6519_126_6093: {
    flexGrow: 1,
    width: wp("1.5549076773566568%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783334%"),
    top: hp("2.185792349726796%")
  },
  View_I126_7485_126_6519_126_6095: {
    flexGrow: 1,
    width: wp("13.070942662779398%"),
    height: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8182701652089435%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7485_126_6519_126_6096: {
    width: wp("9.280855199222545%"),
    minWidth: wp("9.280855199222545%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7485_126_6519_126_6097: {
    width: wp("2.380952380952381%"),
    minWidth: wp("2.380952380952381%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I126_7485_126_6519_126_6097: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I126_7485_126_6519_126_6098: {
    width: wp("9.280855199222545%"),
    minWidth: wp("9.280855199222545%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584526%"),
    justifyContent: "center"
  },
  Text_I126_7485_126_6519_126_6098: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I126_7485_126_6519_126_6099: {
    width: wp("5.393586005830904%"),
    minWidth: wp("5.393586005830904%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.737704918032762%"),
    justifyContent: "center"
  },
  Text_I126_7485_126_6519_126_6099: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_I126_7485_126_6519_140_12140: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.683354591836732%"),
    top: hp("3.2882940573770156%")
  },
  View_I126_7485_126_6520: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    height: hp("15.846994535519126%"),
    minHeight: hp("15.846994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27.595628415300553%"),
    backgroundColor: "rgba(44, 44, 46, 1)",
    overflow: "hidden"
  },
  ImageBackground_I126_7485_126_6520_126_6131: {
    flexGrow: 1,
    width: wp("1.5549076773566568%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783334%"),
    top: hp("2.1857923497267393%")
  },
  View_I126_7485_126_6520_126_6133: {
    flexGrow: 1,
    width: wp("13.070942662779398%"),
    height: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8182701652089435%"),
    top: hp("2.1857923497267393%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7485_126_6520_126_6134: {
    width: wp("6.462585034013606%"),
    minWidth: wp("6.462585034013606%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7485_126_6520_126_6135: {
    width: wp("2.623906705539359%"),
    minWidth: wp("2.623906705539359%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I126_7485_126_6520_126_6135: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I126_7485_126_6520_126_6136: {
    width: wp("4.761904761904762%"),
    minWidth: wp("4.761904761904762%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584526%"),
    justifyContent: "center"
  },
  Text_I126_7485_126_6520_126_6136: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I126_7485_126_6520_126_6137: {
    width: wp("6.462585034013606%"),
    minWidth: wp("6.462585034013606%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.737704918032762%"),
    justifyContent: "center"
  },
  Text_I126_7485_126_6520_126_6137: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I126_7485_126_6520_126_6138: {
    width: wp("5.830903790087463%"),
    minWidth: wp("5.830903790087463%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.743169398907071%"),
    justifyContent: "center"
  },
  Text_I126_7485_126_6520_126_6138: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_I126_7485_126_6520_140_12115: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.683354591836732%"),
    top: hp("4.791026297814199%")
  },
  View_I126_7485_126_6521: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44.53551912568304%"),
    backgroundColor: "rgba(44, 44, 46, 1)",
    overflow: "hidden"
  },
  ImageBackground_I126_7485_126_6521_126_6339: {
    flexGrow: 1,
    width: wp("1.5549076773566568%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783334%"),
    top: hp("2.185792349726796%")
  },
  View_I126_7485_126_6521_126_6341: {
    flexGrow: 1,
    width: wp("13.070942662779398%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8182701652089435%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7485_126_6521_126_6342: {
    width: wp("5.4907677356656945%"),
    minWidth: wp("5.4907677356656945%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7485_126_6521_126_6343: {
    width: wp("2.623906705539359%"),
    minWidth: wp("2.623906705539359%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I126_7485_126_6521_126_6343: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I126_7485_126_6521_126_6344: {
    width: wp("5.4907677356656945%"),
    minWidth: wp("5.4907677356656945%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584526%"),
    justifyContent: "center"
  },
  Text_I126_7485_126_6521_126_6344: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I126_7485_126_6521_126_6345: {
    width: wp("2.525586127308066%"),
    minWidth: wp("2.525586127308066%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.545356535471335%"),
    top: hp("1.5027322404371262%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7485_126_6521_126_6346: {
    width: wp("1.749271137026239%"),
    minWidth: wp("1.749271137026239%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I126_7485_126_6521_126_6346: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  ImageBackground_I126_7485_126_6521_140_12106: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1379980563653973%"),
    top: hp("0.2828295765027633%")
  },
  View_126_7486: {
    flexGrow: 1,
    width: wp("18.221574344023324%"),
    height: hp("25.81967213114754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("85.10928961748633%"),
    backgroundColor: "rgba(44, 44, 46, 1)"
  },
  ImageBackground_I126_7486_126_7049: {
    flexGrow: 1,
    width: wp("18.221574344023324%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I126_7486_126_6478: {
    flexGrow: 1,
    width: wp("18.221574344023324%"),
    height: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7486_126_6479: {
    width: wp("5.8794946550048595%"),
    minWidth: wp("5.8794946550048595%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783263%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7486_126_6480: {
    width: wp("5.8794946550048595%"),
    minWidth: wp("5.8794946550048595%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I126_7486_126_6480: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I126_7486_126_6481: {
    width: wp("3.498542274052478%"),
    minWidth: wp("3.498542274052478%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.459016393442596%"),
    justifyContent: "center"
  },
  Text_I126_7486_126_6481: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  ImageBackground_I126_7486_140_12193: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.056532434402335%"),
    top: hp("2.5369279371584526%")
  },
  ImageBackground_I126_7486_126_6483: {
    flexGrow: 1,
    width: wp("18.221574344023324%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.338797814207624%")
  },
  View_I126_7486_126_6484: {
    flexGrow: 1,
    width: wp("18.221574344023324%"),
    height: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.52459016393442%")
  },
  View_I126_7486_126_6485: {
    width: wp("7.38581146744412%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.417881438289598%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7486_126_6486: {
    width: wp("1.5549076773566568%"),
    minWidth: wp("1.5549076773566568%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9154518950437307%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I126_7486_126_6487: {
    width: wp("0.8884825674044031%"),
    minWidth: wp("0.8884825674044031%"),
    height: hp("4.163414011887514%"),
    minHeight: hp("4.163414011887514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.14805029154518223%"),
    top: hp("0.8326796234630933%")
  },
  View_I126_7486_126_6488: {
    width: wp("0.8514970569962779%"),
    minWidth: wp("0.8514970569962779%"),
    height: hp("4.163414011887514%"),
    minHeight: hp("4.163414011887514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(10, 132, 255, 1)",
    opacity: 0.10000000149011612,
    borderColor: "rgba(10, 132, 255, 1)",
    borderWidth: 1.1428571939468384,
    borderTopLeftRadius: 3.047619104385376,
    borderTopRightRadius: 3.047619104385376,
    borderBottomLeftRadius: 3.047619104385376,
    borderBottomRightRadius: 3.047619104385376
  },
  View_I126_7486_126_6489: {
    width: wp("0.03702161205521594%"),
    height: hp("0.9367681591888595%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.851478984450921%"),
    top: hp("0.8326796234631502%"),
    backgroundColor: "rgba(10, 132, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0.380952388048172,
    borderBottomLeftRadius: 0.380952388048172,
    borderBottomRightRadius: 0
  },
  ImageBackground_I126_7486_126_6490: {
    width: wp("0.5553241837244803%"),
    height: hp("0.3122560639199012%"),
    minHeight: hp("0.3122560639199012%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.07402514577258756%"),
    top: hp("0.052029969262321174%")
  },
  ImageBackground_I126_7486_126_6491: {
    width: wp("0.44425935624755625%"),
    height: hp("1.1449389118965858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8700801749271179%"),
    top: hp("1.561265955857266%")
  },
  View_I126_7486_126_6492: {
    width: wp("7.38581146744412%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.191256830601105%"),
    justifyContent: "center"
  },
  Text_I126_7486_126_6492: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I126_7486_126_6493: {
    width: wp("18.221574344023324%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043758%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7486_126_6493_36_10050: {
    flexGrow: 1,
    width: wp("6.511175898931001%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.879494655004862%"),
    top: hp("2.8688524590163524%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_126_7487: {
    width: wp("18.221574344023324%"),
    minWidth: wp("18.221574344023324%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.8843537414966%"),
    top: hp("4.371584699453564%"),
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    overflow: "hidden"
  },
  View_126_7488: {
    flexGrow: 1,
    width: wp("18.221574344023324%"),
    height: hp("66.12021857923497%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44.80874316939892%"),
    backgroundColor: "rgba(28, 28, 30, 1)",
    overflow: "hidden"
  },
  View_I126_7488_126_6511: {
    flexGrow: 1,
    width: wp("16.666666666666664%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783334%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7488_126_6512: {
    width: wp("2.818270165208941%"),
    minWidth: wp("2.818270165208941%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218578999%")
  },
  View_I126_7488_126_6513: {
    width: wp("1.84645286686103%"),
    minWidth: wp("1.84645286686103%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.971817298347915%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I126_7488_126_6513: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I126_7488_126_6514: {
    width: wp("0.8746355685131195%"),
    minWidth: wp("0.8746355685131195%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.4098360655737565%"),
    justifyContent: "center"
  },
  Text_I126_7488_126_6514: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I126_7488_126_6515: {
    width: wp("1.4577259475218658%"),
    minWidth: wp("1.4577259475218658%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.208940719144806%"),
    top: hp("0%"),
    backgroundColor: "rgba(44, 44, 46, 1)"
  },
  View_I126_7488_126_6516: {
    width: wp("0.6802721088435374%"),
    top: hp("0.819672131147513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.38872691933916315%"),
    justifyContent: "center"
  },
  Text_I126_7488_126_6516: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I126_7488_126_6517: {
    flexGrow: 1,
    width: wp("16.666666666666664%"),
    height: hp("54.37158469945356%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783334%"),
    top: hp("9.56284153005464%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7488_126_6518: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    height: hp("12.568306010928962%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(44, 44, 46, 1)",
    overflow: "hidden"
  },
  ImageBackground_I126_7488_126_6518_126_6410: {
    flexGrow: 1,
    width: wp("1.9436345966958213%"),
    height: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783263%"),
    top: hp("2.185792349726796%")
  },
  View_I126_7488_126_6518_126_6411: {
    flexGrow: 1,
    width: wp("12.682215743440233%"),
    height: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2069970845481066%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7488_126_6518_126_6412: {
    width: wp("9.523809523809524%"),
    minWidth: wp("9.523809523809524%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7488_126_6518_126_6413: {
    width: wp("3.741496598639456%"),
    minWidth: wp("3.741496598639456%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I126_7488_126_6518_126_6413: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I126_7488_126_6518_126_6414: {
    width: wp("9.523809523809524%"),
    minWidth: wp("9.523809523809524%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.005464480874309%"),
    justifyContent: "center"
  },
  Text_I126_7488_126_6518_126_6414: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I126_7488_126_6518_126_6415: {
    width: wp("2.818270165208941%"),
    minWidth: wp("2.818270165208941%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.737704918032762%"),
    justifyContent: "center"
  },
  Text_I126_7488_126_6518_126_6415: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  ImageBackground_I126_7488_126_6518_140_12161: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.294627672497569%"),
    top: hp("3.1516820355191157%")
  },
  View_I126_7488_126_6519: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.66120218579232%"),
    backgroundColor: "rgba(44, 44, 46, 1)",
    overflow: "hidden"
  },
  ImageBackground_I126_7488_126_6519_126_6093: {
    flexGrow: 1,
    width: wp("1.5549076773566568%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783263%"),
    top: hp("2.185792349726796%")
  },
  View_I126_7488_126_6519_126_6095: {
    flexGrow: 1,
    width: wp("13.070942662779398%"),
    height: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8182701652089435%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7488_126_6519_126_6096: {
    width: wp("9.280855199222545%"),
    minWidth: wp("9.280855199222545%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7488_126_6519_126_6097: {
    width: wp("2.380952380952381%"),
    minWidth: wp("2.380952380952381%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I126_7488_126_6519_126_6097: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I126_7488_126_6519_126_6098: {
    width: wp("9.280855199222545%"),
    minWidth: wp("9.280855199222545%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584526%"),
    justifyContent: "center"
  },
  Text_I126_7488_126_6519_126_6098: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I126_7488_126_6519_126_6099: {
    width: wp("5.393586005830904%"),
    minWidth: wp("5.393586005830904%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.737704918032762%"),
    justifyContent: "center"
  },
  Text_I126_7488_126_6519_126_6099: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_I126_7488_126_6519_140_12140: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.683354591836732%"),
    top: hp("3.2882940573770156%")
  },
  View_I126_7488_126_6520: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    height: hp("15.846994535519126%"),
    minHeight: hp("15.846994535519126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27.595628415300553%"),
    backgroundColor: "rgba(44, 44, 46, 1)",
    overflow: "hidden"
  },
  ImageBackground_I126_7488_126_6520_126_6131: {
    flexGrow: 1,
    width: wp("1.5549076773566568%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783263%"),
    top: hp("2.1857923497267393%")
  },
  View_I126_7488_126_6520_126_6133: {
    flexGrow: 1,
    width: wp("13.070942662779398%"),
    height: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8182701652089435%"),
    top: hp("2.1857923497267393%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7488_126_6520_126_6134: {
    width: wp("6.462585034013606%"),
    minWidth: wp("6.462585034013606%"),
    height: hp("11.475409836065573%"),
    minHeight: hp("11.475409836065573%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7488_126_6520_126_6135: {
    width: wp("2.623906705539359%"),
    minWidth: wp("2.623906705539359%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I126_7488_126_6520_126_6135: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I126_7488_126_6520_126_6136: {
    width: wp("4.761904761904762%"),
    minWidth: wp("4.761904761904762%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584526%"),
    justifyContent: "center"
  },
  Text_I126_7488_126_6520_126_6136: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I126_7488_126_6520_126_6137: {
    width: wp("6.462585034013606%"),
    minWidth: wp("6.462585034013606%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.737704918032762%"),
    justifyContent: "center"
  },
  Text_I126_7488_126_6520_126_6137: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I126_7488_126_6520_126_6138: {
    width: wp("5.830903790087463%"),
    minWidth: wp("5.830903790087463%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.743169398907071%"),
    justifyContent: "center"
  },
  Text_I126_7488_126_6520_126_6138: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  ImageBackground_I126_7488_126_6520_140_12115: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.683354591836732%"),
    top: hp("4.791026297814199%")
  },
  View_I126_7488_126_6521: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44.53551912568304%"),
    backgroundColor: "rgba(44, 44, 46, 1)",
    overflow: "hidden"
  },
  ImageBackground_I126_7488_126_6521_126_6339: {
    flexGrow: 1,
    width: wp("1.5549076773566568%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783263%"),
    top: hp("2.185792349726796%")
  },
  View_I126_7488_126_6521_126_6341: {
    flexGrow: 1,
    width: wp("13.070942662779398%"),
    height: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.8182701652089435%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7488_126_6521_126_6342: {
    width: wp("5.4907677356656945%"),
    minWidth: wp("5.4907677356656945%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7488_126_6521_126_6343: {
    width: wp("2.623906705539359%"),
    minWidth: wp("2.623906705539359%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I126_7488_126_6521_126_6343: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I126_7488_126_6521_126_6344: {
    width: wp("5.4907677356656945%"),
    minWidth: wp("5.4907677356656945%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.7322404371584526%"),
    justifyContent: "center"
  },
  Text_I126_7488_126_6521_126_6344: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.23999999463558197,
    textTransform: "none"
  },
  View_I126_7488_126_6521_126_6345: {
    width: wp("2.525586127308066%"),
    minWidth: wp("2.525586127308066%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.545356535471328%"),
    top: hp("1.5027322404371262%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7488_126_6521_126_6346: {
    width: wp("1.749271137026239%"),
    minWidth: wp("1.749271137026239%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I126_7488_126_6521_126_6346: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  ImageBackground_I126_7488_126_6521_140_12106: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1379980563654044%"),
    top: hp("0.2828295765027633%")
  },
  View_126_7489: {
    flexGrow: 1,
    width: wp("18.221574344023324%"),
    height: hp("22.84723500736424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("88.08173507940572%"),
    backgroundColor: "rgba(44, 44, 46, 1)"
  },
  ImageBackground_I126_7489_126_7267: {
    flexGrow: 1,
    width: wp("18.221574344023324%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I126_7489_126_6495: {
    flexGrow: 1,
    width: wp("18.221574344023324%"),
    height: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7489_126_6496: {
    width: wp("5.8794946550048595%"),
    minWidth: wp("5.8794946550048595%"),
    height: hp("6.967213114754098%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7774538386783334%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I126_7489_126_6497: {
    width: wp("5.8794946550048595%"),
    minWidth: wp("5.8794946550048595%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I126_7489_126_6497: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I126_7489_126_6498: {
    width: wp("3.498542274052478%"),
    minWidth: wp("3.498542274052478%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4590163934426528%"),
    justifyContent: "center"
  },
  Text_I126_7489_126_6498: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  ImageBackground_I126_7489_140_12188: {
    width: wp("0.3875880709426628%"),
    minWidth: wp("0.3875880709426628%"),
    height: hp("1.8933572404371584%"),
    minHeight: hp("1.8933572404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.056532434402335%"),
    top: hp("2.5369279371584526%")
  },
  ImageBackground_I126_7489_126_6500: {
    flexGrow: 1,
    width: wp("18.221574344023324%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.33879781420768%")
  },
  View_I126_7489_126_6501: {
    flexGrow: 1,
    width: wp("5.053449951409135%"),
    height: hp("7.1368519725695325%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.584062196307094%"),
    top: hp("13.524590163934477%")
  },
  View_I126_7489_126_6502: {
    width: wp("5.053449951409135%"),
    height: hp("7.1368519725695325%"),
    minHeight: hp("7.1368519725695325%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I126_7489_140_12185: {
    width: wp("1.395795505178913%"),
    minWidth: wp("1.395795505178913%"),
    height: hp("3.8581634479793694%"),
    minHeight: hp("3.8581634479793694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8288007167152642%"),
    top: hp("0%")
  },
  View_I126_7489_126_6504: {
    width: wp("5.053449951409135%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.677827762124309%"),
    justifyContent: "center"
  },
  Text_I126_7489_126_6504: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
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
