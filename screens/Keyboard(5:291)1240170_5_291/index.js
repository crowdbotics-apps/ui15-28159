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
      <View style={styles.View_140_5505}>
        <View style={styles.View_5_1930}>
          <View style={styles.View_I5_1930_5_19}>
            <View style={styles.View_I5_1930_5_20}>
              <View style={styles.View_I5_1930_5_21} />
              <View style={styles.View_I5_1930_5_22}>
                <Text style={styles.Text_I5_1930_5_22}>Keyboard</Text>
              </View>
            </View>
            <View style={styles.View_I5_1930_5_23}>
              <Text style={styles.Text_I5_1930_5_23}>
                Human Interface Guidelines: Text Fields
              </Text>
            </View>
          </View>
          <View style={styles.View_I5_1930_5_24} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf43/1a79/0d670f2e38c2ebacb8403cc750b2d96a"
          }}
          style={styles.ImageBackground_140_5526}
        />
      </View>
      <View style={styles.View_107_9906}>
        <View style={styles.View_I107_9906_10_2304}>
          <Text style={styles.Text_I107_9906_10_2304}>Atoms</Text>
        </View>
        <View style={styles.View_I107_9906_10_2303} />
      </View>
      <View style={styles.View_107_9968}>
        <View style={styles.View_107_9911}>
          <View style={styles.View_107_9912}>
            <Text style={styles.Text_107_9912}>Key Container</Text>
          </View>
          <View style={styles.View_107_9913}>
            <View style={styles.View_107_9914}>
              <View style={styles.View_107_9915}>
                <View style={styles.View_107_9916}>
                  <Text style={styles.Text_107_9916}>Light / Primary</Text>
                </View>
                <View style={styles.View_107_9917}>
                  <Text style={styles.Text_107_9917}>Light / Secondary</Text>
                </View>
                <View style={styles.View_107_9918}>
                  <Text style={styles.Text_107_9918}>Light / Action</Text>
                </View>
                <View style={styles.View_107_9942}>
                  <Text style={styles.Text_107_9942}>Dark / Primary</Text>
                </View>
                <View style={styles.View_107_9943}>
                  <Text style={styles.Text_107_9943}>Dark / Secondary</Text>
                </View>
                <View style={styles.View_107_9944}>
                  <Text style={styles.Text_107_9944}>Dark / Action</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_107_2983}>
              <View style={styles.View_107_912} />
              <View style={styles.View_107_2982} />
              <View style={styles.View_107_3294} />
              <View style={styles.View_107_5010} />
              <View style={styles.View_107_5011} />
              <View style={styles.View_107_5012} />
            </View>
          </View>
        </View>
        <View style={styles.View_107_9945}>
          <View style={styles.View_107_9946}>
            <Text style={styles.Text_107_9946}>Key</Text>
          </View>
          <View style={styles.View_107_9947}>
            <View style={styles.View_107_9948}>
              <View style={styles.View_107_9949}>
                <View style={styles.View_107_9950}>
                  <Text style={styles.Text_107_9950}>Light / Letter</Text>
                </View>
                <View style={styles.View_107_9951}>
                  <Text style={styles.Text_107_9951}>Light / Numeric</Text>
                </View>
                <View style={styles.View_107_9952}>
                  <Text style={styles.Text_107_9952}>Light / Shift Active</Text>
                </View>
                <View style={styles.View_107_9963}>
                  <Text style={styles.Text_107_9963}>
                    Light / Shift Inactive
                  </Text>
                </View>
                <View style={styles.View_107_9964}>
                  <Text style={styles.Text_107_9964}>Light / Delete</Text>
                </View>
                <View style={styles.View_118_30034}>
                  <Text style={styles.Text_118_30034}>Dark / Letter</Text>
                </View>
                <View style={styles.View_118_30035}>
                  <Text style={styles.Text_118_30035}>Dark / Numeric</Text>
                </View>
                <View style={styles.View_118_30036}>
                  <Text style={styles.Text_118_30036}>Dark / Shift Active</Text>
                </View>
                <View style={styles.View_118_30037}>
                  <Text style={styles.Text_118_30037}>
                    Dark / Shift Inactive
                  </Text>
                </View>
                <View style={styles.View_118_30038}>
                  <Text style={styles.Text_118_30038}>Dark / Delete</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_107_2356}>
              <View style={styles.View_107_926}>
                <View style={styles.View_107_925} />
                <View style={styles.View_107_911}>
                  <Text style={styles.Text_107_911}>A</Text>
                </View>
              </View>
              <View style={styles.View_107_9969}>
                <View style={styles.View_107_9970} />
                <View style={styles.View_107_9973}>
                  <Text style={styles.Text_107_9973}>ABC</Text>
                </View>
                <View style={styles.View_107_9972}>
                  <Text style={styles.Text_107_9972}>A</Text>
                </View>
              </View>
              <View style={styles.View_107_2354}>
                <View style={styles.View_107_2352} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5efb/552a/67227aabac5378ca5c240d92b927a1b3"
                  }}
                  style={styles.ImageBackground_107_2355}
                />
              </View>
              <View style={styles.View_107_3290}>
                <View style={styles.View_107_3291} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5214/97ef/6c1777764ae557352eb99af812762a94"
                  }}
                  style={styles.ImageBackground_107_3293}
                />
              </View>
              <View style={styles.View_107_2751}>
                <View style={styles.View_107_2752} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d809/b997/20f3e8b130f79f60af48c4345e9d1cf4"
                  }}
                  style={styles.ImageBackground_107_2754}
                />
              </View>
              <View style={styles.View_107_5013}>
                <View style={styles.View_107_5014} />
                <View style={styles.View_107_5015}>
                  <Text style={styles.Text_107_5015}>A</Text>
                </View>
              </View>
              <View style={styles.View_107_10874}>
                <View style={styles.View_107_10875} />
                <View style={styles.View_107_10876}>
                  <Text style={styles.Text_107_10876}>ABC</Text>
                </View>
                <View style={styles.View_107_10877}>
                  <Text style={styles.Text_107_10877}>A</Text>
                </View>
              </View>
              <View style={styles.View_107_5016}>
                <View style={styles.View_107_5017} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d0d/e5bc/ca648ee611ca2f2afaa563d11b962780"
                  }}
                  style={styles.ImageBackground_107_5018}
                />
              </View>
              <View style={styles.View_107_5019}>
                <View style={styles.View_107_5020} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5ba/3fc2/6615c34eab7d00ed9ccc50c6dcd7aac3"
                  }}
                  style={styles.ImageBackground_107_5021}
                />
              </View>
              <View style={styles.View_107_5022}>
                <View style={styles.View_107_5023} />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aca8/53aa/7318cd309fb1ef2def11fbbb44b96e99"
                  }}
                  style={styles.ImageBackground_107_5024}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_107_9901}>
        <View style={styles.View_I107_9901_10_2311}>
          <Text style={styles.Text_I107_9901_10_2311}>Molecules</Text>
        </View>
        <View style={styles.View_I107_9901_10_2312} />
      </View>
      <View style={styles.View_5_293}>
        <View style={styles.View_71_8841}>
          <Text style={styles.Text_71_8841}>Alphabetic Keyboard</Text>
        </View>
        <View style={styles.View_71_8840}>
          <View style={styles.View_5_294}>
            <View style={styles.View_5_295}>
              <View style={styles.View_5_296}>
                <Text style={styles.Text_5_296}>Light / Uppercase</Text>
              </View>
              <View style={styles.View_5_298}>
                <Text style={styles.Text_5_298}>Light / Lowercase</Text>
              </View>
              <View style={styles.View_107_11197}>
                <Text style={styles.Text_107_11197}>Light / Symbols</Text>
              </View>
              <View style={styles.View_5_300}>
                <Text style={styles.Text_5_300}>Dark / Uppercase</Text>
              </View>
              <View style={styles.View_5_302}>
                <Text style={styles.Text_5_302}>Dark / Lowercase</Text>
              </View>
              <View style={styles.View_107_11299}>
                <Text style={styles.Text_107_11299}>Dark / Symbols</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_107_4489}>
            <View style={styles.View_107_969}>
              <View style={styles.View_107_927}>
                <View style={styles.View_I107_927_5_3093} />
              </View>
              <View style={styles.View_107_968}>
                <View style={styles.View_107_938}>
                  <View style={styles.View_I107_938_107_925} />
                  <View style={styles.View_I107_938_107_911}>
                    <Text style={styles.Text_I107_938_107_911}>Q</Text>
                  </View>
                </View>
                <View style={styles.View_107_939}>
                  <View style={styles.View_I107_939_107_925} />
                  <View style={styles.View_I107_939_107_911}>
                    <Text style={styles.Text_I107_939_107_911}>A</Text>
                  </View>
                </View>
                <View style={styles.View_107_944}>
                  <View style={styles.View_I107_944_107_925} />
                  <View style={styles.View_I107_944_107_911}>
                    <Text style={styles.Text_I107_944_107_911}>E</Text>
                  </View>
                </View>
                <View style={styles.View_107_947}>
                  <View style={styles.View_I107_947_107_925} />
                  <View style={styles.View_I107_947_107_911}>
                    <Text style={styles.Text_I107_947_107_911}>R</Text>
                  </View>
                </View>
                <View style={styles.View_107_950}>
                  <View style={styles.View_I107_950_107_925} />
                  <View style={styles.View_I107_950_107_911}>
                    <Text style={styles.Text_I107_950_107_911}>T</Text>
                  </View>
                </View>
                <View style={styles.View_107_953}>
                  <View style={styles.View_I107_953_107_925} />
                  <View style={styles.View_I107_953_107_911}>
                    <Text style={styles.Text_I107_953_107_911}>Y</Text>
                  </View>
                </View>
                <View style={styles.View_107_956}>
                  <View style={styles.View_I107_956_107_925} />
                  <View style={styles.View_I107_956_107_911}>
                    <Text style={styles.Text_I107_956_107_911}>U</Text>
                  </View>
                </View>
                <View style={styles.View_107_959}>
                  <View style={styles.View_I107_959_107_925} />
                  <View style={styles.View_I107_959_107_911}>
                    <Text style={styles.Text_I107_959_107_911}>I</Text>
                  </View>
                </View>
                <View style={styles.View_107_962}>
                  <View style={styles.View_I107_962_107_925} />
                  <View style={styles.View_I107_962_107_911}>
                    <Text style={styles.Text_I107_962_107_911}>O</Text>
                  </View>
                </View>
                <View style={styles.View_107_965}>
                  <View style={styles.View_I107_965_107_925} />
                  <View style={styles.View_I107_965_107_911}>
                    <Text style={styles.Text_I107_965_107_911}>P</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_107_1269}>
                <View style={styles.View_107_1270}>
                  <View style={styles.View_I107_1270_107_925} />
                  <View style={styles.View_I107_1270_107_911}>
                    <Text style={styles.Text_I107_1270_107_911}>A</Text>
                  </View>
                </View>
                <View style={styles.View_107_1271}>
                  <View style={styles.View_I107_1271_107_925} />
                  <View style={styles.View_I107_1271_107_911}>
                    <Text style={styles.Text_I107_1271_107_911}>S</Text>
                  </View>
                </View>
                <View style={styles.View_107_1272}>
                  <View style={styles.View_I107_1272_107_925} />
                  <View style={styles.View_I107_1272_107_911}>
                    <Text style={styles.Text_I107_1272_107_911}>D</Text>
                  </View>
                </View>
                <View style={styles.View_107_1273}>
                  <View style={styles.View_I107_1273_107_925} />
                  <View style={styles.View_I107_1273_107_911}>
                    <Text style={styles.Text_I107_1273_107_911}>F</Text>
                  </View>
                </View>
                <View style={styles.View_107_1274}>
                  <View style={styles.View_I107_1274_107_925} />
                  <View style={styles.View_I107_1274_107_911}>
                    <Text style={styles.Text_I107_1274_107_911}>G</Text>
                  </View>
                </View>
                <View style={styles.View_107_1275}>
                  <View style={styles.View_I107_1275_107_925} />
                  <View style={styles.View_I107_1275_107_911}>
                    <Text style={styles.Text_I107_1275_107_911}>H</Text>
                  </View>
                </View>
                <View style={styles.View_107_1276}>
                  <View style={styles.View_I107_1276_107_925} />
                  <View style={styles.View_I107_1276_107_911}>
                    <Text style={styles.Text_I107_1276_107_911}>J</Text>
                  </View>
                </View>
                <View style={styles.View_107_1277}>
                  <View style={styles.View_I107_1277_107_925} />
                  <View style={styles.View_I107_1277_107_911}>
                    <Text style={styles.Text_I107_1277_107_911}>K</Text>
                  </View>
                </View>
                <View style={styles.View_107_1278}>
                  <View style={styles.View_I107_1278_107_925} />
                  <View style={styles.View_I107_1278_107_911}>
                    <Text style={styles.Text_I107_1278_107_911}>L</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_107_1522}>
                <View style={styles.View_107_1523}>
                  <View style={styles.View_I107_1523_107_2352} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5efb/552a/67227aabac5378ca5c240d92b927a1b3"
                    }}
                    style={styles.ImageBackground_I107_1523_107_2355}
                  />
                </View>
                <View style={styles.View_107_2722}>
                  <View style={styles.View_107_1524}>
                    <View style={styles.View_I107_1524_107_925} />
                    <View style={styles.View_I107_1524_107_911}>
                      <Text style={styles.Text_I107_1524_107_911}>Z</Text>
                    </View>
                  </View>
                  <View style={styles.View_107_1525}>
                    <View style={styles.View_I107_1525_107_925} />
                    <View style={styles.View_I107_1525_107_911}>
                      <Text style={styles.Text_I107_1525_107_911}>X</Text>
                    </View>
                  </View>
                  <View style={styles.View_107_1526}>
                    <View style={styles.View_I107_1526_107_925} />
                    <View style={styles.View_I107_1526_107_911}>
                      <Text style={styles.Text_I107_1526_107_911}>C</Text>
                    </View>
                  </View>
                  <View style={styles.View_107_1527}>
                    <View style={styles.View_I107_1527_107_925} />
                    <View style={styles.View_I107_1527_107_911}>
                      <Text style={styles.Text_I107_1527_107_911}>V</Text>
                    </View>
                  </View>
                  <View style={styles.View_107_1528}>
                    <View style={styles.View_I107_1528_107_925} />
                    <View style={styles.View_I107_1528_107_911}>
                      <Text style={styles.Text_I107_1528_107_911}>B</Text>
                    </View>
                  </View>
                  <View style={styles.View_107_1529}>
                    <View style={styles.View_I107_1529_107_925} />
                    <View style={styles.View_I107_1529_107_911}>
                      <Text style={styles.Text_I107_1529_107_911}>N</Text>
                    </View>
                  </View>
                  <View style={styles.View_107_1530}>
                    <View style={styles.View_I107_1530_107_925} />
                    <View style={styles.View_I107_1530_107_911}>
                      <Text style={styles.Text_I107_1530_107_911}>M</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_107_2422}>
                  <View style={styles.View_I107_2422_107_2752} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d809/b997/20f3e8b130f79f60af48c4345e9d1cf4"
                    }}
                    style={styles.ImageBackground_I107_2422_107_2754}
                  />
                </View>
              </View>
              <View style={styles.View_107_2929}>
                <View style={styles.View_107_2760}>
                  <View style={styles.View_I107_2760_107_925} />
                  <View style={styles.View_I107_2760_107_911}>
                    <Text style={styles.Text_I107_2760_107_911}>123</Text>
                  </View>
                </View>
                <View style={styles.View_107_2764}>
                  <View style={styles.View_I107_2764_107_925} />
                  <View style={styles.View_I107_2764_107_911}>
                    <Text style={styles.Text_I107_2764_107_911}>space</Text>
                  </View>
                </View>
                <View style={styles.View_107_2941}>
                  <View style={styles.View_I107_2941_107_925} />
                  <View style={styles.View_I107_2941_107_911}>
                    <Text style={styles.Text_I107_2941_107_911}>return</Text>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c520/7a59/89e9ae6fd035d50795cde7834c41a44b"
                }}
                style={styles.ImageBackground_107_4174}
              />
            </View>
            <View style={styles.View_107_4486}>
              <View style={styles.View_107_4383}>
                <View style={styles.View_I107_4383_5_3093} />
              </View>
              <View style={styles.View_107_4384}>
                <View style={styles.View_107_4385}>
                  <View style={styles.View_I107_4385_107_925} />
                  <View style={styles.View_I107_4385_107_911}>
                    <Text style={styles.Text_I107_4385_107_911}>q</Text>
                  </View>
                </View>
                <View style={styles.View_107_4386}>
                  <View style={styles.View_I107_4386_107_925} />
                  <View style={styles.View_I107_4386_107_911}>
                    <Text style={styles.Text_I107_4386_107_911}>a</Text>
                  </View>
                </View>
                <View style={styles.View_107_4387}>
                  <View style={styles.View_I107_4387_107_925} />
                  <View style={styles.View_I107_4387_107_911}>
                    <Text style={styles.Text_I107_4387_107_911}>e</Text>
                  </View>
                </View>
                <View style={styles.View_107_4388}>
                  <View style={styles.View_I107_4388_107_925} />
                  <View style={styles.View_I107_4388_107_911}>
                    <Text style={styles.Text_I107_4388_107_911}>r</Text>
                  </View>
                </View>
                <View style={styles.View_107_4389}>
                  <View style={styles.View_I107_4389_107_925} />
                  <View style={styles.View_I107_4389_107_911}>
                    <Text style={styles.Text_I107_4389_107_911}>t</Text>
                  </View>
                </View>
                <View style={styles.View_107_4390}>
                  <View style={styles.View_I107_4390_107_925} />
                  <View style={styles.View_I107_4390_107_911}>
                    <Text style={styles.Text_I107_4390_107_911}>y</Text>
                  </View>
                </View>
                <View style={styles.View_107_4391}>
                  <View style={styles.View_I107_4391_107_925} />
                  <View style={styles.View_I107_4391_107_911}>
                    <Text style={styles.Text_I107_4391_107_911}>u</Text>
                  </View>
                </View>
                <View style={styles.View_107_4392}>
                  <View style={styles.View_I107_4392_107_925} />
                  <View style={styles.View_I107_4392_107_911}>
                    <Text style={styles.Text_I107_4392_107_911}>i</Text>
                  </View>
                </View>
                <View style={styles.View_107_4393}>
                  <View style={styles.View_I107_4393_107_925} />
                  <View style={styles.View_I107_4393_107_911}>
                    <Text style={styles.Text_I107_4393_107_911}>o</Text>
                  </View>
                </View>
                <View style={styles.View_107_4394}>
                  <View style={styles.View_I107_4394_107_925} />
                  <View style={styles.View_I107_4394_107_911}>
                    <Text style={styles.Text_I107_4394_107_911}>p</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_107_4395}>
                <View style={styles.View_107_4396}>
                  <View style={styles.View_I107_4396_107_925} />
                  <View style={styles.View_I107_4396_107_911}>
                    <Text style={styles.Text_I107_4396_107_911}>a</Text>
                  </View>
                </View>
                <View style={styles.View_107_4397}>
                  <View style={styles.View_I107_4397_107_925} />
                  <View style={styles.View_I107_4397_107_911}>
                    <Text style={styles.Text_I107_4397_107_911}>s</Text>
                  </View>
                </View>
                <View style={styles.View_107_4398}>
                  <View style={styles.View_I107_4398_107_925} />
                  <View style={styles.View_I107_4398_107_911}>
                    <Text style={styles.Text_I107_4398_107_911}>d</Text>
                  </View>
                </View>
                <View style={styles.View_107_4399}>
                  <View style={styles.View_I107_4399_107_925} />
                  <View style={styles.View_I107_4399_107_911}>
                    <Text style={styles.Text_I107_4399_107_911}>f</Text>
                  </View>
                </View>
                <View style={styles.View_107_4400}>
                  <View style={styles.View_I107_4400_107_925} />
                  <View style={styles.View_I107_4400_107_911}>
                    <Text style={styles.Text_I107_4400_107_911}>g</Text>
                  </View>
                </View>
                <View style={styles.View_107_4401}>
                  <View style={styles.View_I107_4401_107_925} />
                  <View style={styles.View_I107_4401_107_911}>
                    <Text style={styles.Text_I107_4401_107_911}>h</Text>
                  </View>
                </View>
                <View style={styles.View_107_4402}>
                  <View style={styles.View_I107_4402_107_925} />
                  <View style={styles.View_I107_4402_107_911}>
                    <Text style={styles.Text_I107_4402_107_911}>j</Text>
                  </View>
                </View>
                <View style={styles.View_107_4403}>
                  <View style={styles.View_I107_4403_107_925} />
                  <View style={styles.View_I107_4403_107_911}>
                    <Text style={styles.Text_I107_4403_107_911}>k</Text>
                  </View>
                </View>
                <View style={styles.View_107_4404}>
                  <View style={styles.View_I107_4404_107_925} />
                  <View style={styles.View_I107_4404_107_911}>
                    <Text style={styles.Text_I107_4404_107_911}>l</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_107_4405}>
                <View style={styles.View_107_4406}>
                  <View style={styles.View_I107_4406_107_3291} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5214/97ef/6c1777764ae557352eb99af812762a94"
                    }}
                    style={styles.ImageBackground_I107_4406_107_3293}
                  />
                </View>
                <View style={styles.View_107_4407}>
                  <View style={styles.View_107_4408}>
                    <View style={styles.View_I107_4408_107_925} />
                    <View style={styles.View_I107_4408_107_911}>
                      <Text style={styles.Text_I107_4408_107_911}>z</Text>
                    </View>
                  </View>
                  <View style={styles.View_107_4409}>
                    <View style={styles.View_I107_4409_107_925} />
                    <View style={styles.View_I107_4409_107_911}>
                      <Text style={styles.Text_I107_4409_107_911}>x</Text>
                    </View>
                  </View>
                  <View style={styles.View_107_4410}>
                    <View style={styles.View_I107_4410_107_925} />
                    <View style={styles.View_I107_4410_107_911}>
                      <Text style={styles.Text_I107_4410_107_911}>c</Text>
                    </View>
                  </View>
                  <View style={styles.View_107_4411}>
                    <View style={styles.View_I107_4411_107_925} />
                    <View style={styles.View_I107_4411_107_911}>
                      <Text style={styles.Text_I107_4411_107_911}>v</Text>
                    </View>
                  </View>
                  <View style={styles.View_107_4412}>
                    <View style={styles.View_I107_4412_107_925} />
                    <View style={styles.View_I107_4412_107_911}>
                      <Text style={styles.Text_I107_4412_107_911}>b</Text>
                    </View>
                  </View>
                  <View style={styles.View_107_4413}>
                    <View style={styles.View_I107_4413_107_925} />
                    <View style={styles.View_I107_4413_107_911}>
                      <Text style={styles.Text_I107_4413_107_911}>n</Text>
                    </View>
                  </View>
                  <View style={styles.View_107_4414}>
                    <View style={styles.View_I107_4414_107_925} />
                    <View style={styles.View_I107_4414_107_911}>
                      <Text style={styles.Text_I107_4414_107_911}>m</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_107_4415}>
                  <View style={styles.View_I107_4415_107_2752} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d809/b997/20f3e8b130f79f60af48c4345e9d1cf4"
                    }}
                    style={styles.ImageBackground_I107_4415_107_2754}
                  />
                </View>
              </View>
              <View style={styles.View_107_4416}>
                <View style={styles.View_107_4417}>
                  <View style={styles.View_I107_4417_107_925} />
                  <View style={styles.View_I107_4417_107_911}>
                    <Text style={styles.Text_I107_4417_107_911}>123</Text>
                  </View>
                </View>
                <View style={styles.View_107_4418}>
                  <View style={styles.View_I107_4418_107_925} />
                  <View style={styles.View_I107_4418_107_911}>
                    <Text style={styles.Text_I107_4418_107_911}>space</Text>
                  </View>
                </View>
                <View style={styles.View_107_4419}>
                  <View style={styles.View_I107_4419_107_925} />
                  <View style={styles.View_I107_4419_107_911}>
                    <Text style={styles.Text_I107_4419_107_911}>return</Text>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c520/7a59/89e9ae6fd035d50795cde7834c41a44b"
                }}
                style={styles.ImageBackground_107_4420}
              />
            </View>
            <View style={styles.View_107_11056}>
              <View style={styles.View_107_11057}>
                <View style={styles.View_I107_11057_5_3093} />
              </View>
              <View style={styles.View_107_11058}>
                <View style={styles.View_107_11059}>
                  <View style={styles.View_I107_11059_107_925} />
                  <View style={styles.View_I107_11059_107_911}>
                    <Text style={styles.Text_I107_11059_107_911}>1</Text>
                  </View>
                </View>
                <View style={styles.View_107_11060}>
                  <View style={styles.View_I107_11060_107_925} />
                  <View style={styles.View_I107_11060_107_911}>
                    <Text style={styles.Text_I107_11060_107_911}>2</Text>
                  </View>
                </View>
                <View style={styles.View_107_11061}>
                  <View style={styles.View_I107_11061_107_925} />
                  <View style={styles.View_I107_11061_107_911}>
                    <Text style={styles.Text_I107_11061_107_911}>3</Text>
                  </View>
                </View>
                <View style={styles.View_107_11062}>
                  <View style={styles.View_I107_11062_107_925} />
                  <View style={styles.View_I107_11062_107_911}>
                    <Text style={styles.Text_I107_11062_107_911}>4</Text>
                  </View>
                </View>
                <View style={styles.View_107_11063}>
                  <View style={styles.View_I107_11063_107_925} />
                  <View style={styles.View_I107_11063_107_911}>
                    <Text style={styles.Text_I107_11063_107_911}>5</Text>
                  </View>
                </View>
                <View style={styles.View_107_11064}>
                  <View style={styles.View_I107_11064_107_925} />
                  <View style={styles.View_I107_11064_107_911}>
                    <Text style={styles.Text_I107_11064_107_911}>6</Text>
                  </View>
                </View>
                <View style={styles.View_107_11065}>
                  <View style={styles.View_I107_11065_107_925} />
                  <View style={styles.View_I107_11065_107_911}>
                    <Text style={styles.Text_I107_11065_107_911}>7</Text>
                  </View>
                </View>
                <View style={styles.View_107_11066}>
                  <View style={styles.View_I107_11066_107_925} />
                  <View style={styles.View_I107_11066_107_911}>
                    <Text style={styles.Text_I107_11066_107_911}>8</Text>
                  </View>
                </View>
                <View style={styles.View_107_11067}>
                  <View style={styles.View_I107_11067_107_925} />
                  <View style={styles.View_I107_11067_107_911}>
                    <Text style={styles.Text_I107_11067_107_911}>9</Text>
                  </View>
                </View>
                <View style={styles.View_107_11068}>
                  <View style={styles.View_I107_11068_107_925} />
                  <View style={styles.View_I107_11068_107_911}>
                    <Text style={styles.Text_I107_11068_107_911}>0</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_107_11166}>
                <View style={styles.View_107_11167}>
                  <View style={styles.View_I107_11167_107_925} />
                  <View style={styles.View_I107_11167_107_911}>
                    <Text style={styles.Text_I107_11167_107_911}>-</Text>
                  </View>
                </View>
                <View style={styles.View_107_11168}>
                  <View style={styles.View_I107_11168_107_925} />
                  <View style={styles.View_I107_11168_107_911}>
                    <Text style={styles.Text_I107_11168_107_911}>/</Text>
                  </View>
                </View>
                <View style={styles.View_107_11169}>
                  <View style={styles.View_I107_11169_107_925} />
                  <View style={styles.View_I107_11169_107_911}>
                    <Text style={styles.Text_I107_11169_107_911}>:</Text>
                  </View>
                </View>
                <View style={styles.View_107_11170}>
                  <View style={styles.View_I107_11170_107_925} />
                  <View style={styles.View_I107_11170_107_911}>
                    <Text style={styles.Text_I107_11170_107_911}>;</Text>
                  </View>
                </View>
                <View style={styles.View_107_11171}>
                  <View style={styles.View_I107_11171_107_925} />
                  <View style={styles.View_I107_11171_107_911}>
                    <Text style={styles.Text_I107_11171_107_911}>(</Text>
                  </View>
                </View>
                <View style={styles.View_107_11172}>
                  <View style={styles.View_I107_11172_107_925} />
                  <View style={styles.View_I107_11172_107_911}>
                    <Text style={styles.Text_I107_11172_107_911}>)</Text>
                  </View>
                </View>
                <View style={styles.View_107_11173}>
                  <View style={styles.View_I107_11173_107_925} />
                  <View style={styles.View_I107_11173_107_911}>
                    <Text style={styles.Text_I107_11173_107_911}>$</Text>
                  </View>
                </View>
                <View style={styles.View_107_11174}>
                  <View style={styles.View_I107_11174_107_925} />
                  <View style={styles.View_I107_11174_107_911}>
                    <Text style={styles.Text_I107_11174_107_911}>&amp;</Text>
                  </View>
                </View>
                <View style={styles.View_107_11175}>
                  <View style={styles.View_I107_11175_107_925} />
                  <View style={styles.View_I107_11175_107_911}>
                    <Text style={styles.Text_I107_11175_107_911}>@</Text>
                  </View>
                </View>
                <View style={styles.View_107_11176}>
                  <View style={styles.View_I107_11176_107_925} />
                  <View style={styles.View_I107_11176_107_911}>
                    <Text style={styles.Text_I107_11176_107_911}>“</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_107_11079}>
                <View style={styles.View_107_11080}>
                  <View style={styles.View_I107_11080_107_925} />
                  <View style={styles.View_I107_11080_107_911}>
                    <Text style={styles.Text_I107_11080_107_911}>#+=</Text>
                  </View>
                </View>
                <View style={styles.View_107_11081}>
                  <View style={styles.View_107_11082}>
                    <View style={styles.View_I107_11082_107_925} />
                    <View style={styles.View_I107_11082_107_911}>
                      <Text style={styles.Text_I107_11082_107_911}>.</Text>
                    </View>
                  </View>
                  <View style={styles.View_107_11083}>
                    <View style={styles.View_I107_11083_107_925} />
                    <View style={styles.View_I107_11083_107_911}>
                      <Text style={styles.Text_I107_11083_107_911}>,</Text>
                    </View>
                  </View>
                  <View style={styles.View_107_11084}>
                    <View style={styles.View_I107_11084_107_925} />
                    <View style={styles.View_I107_11084_107_911}>
                      <Text style={styles.Text_I107_11084_107_911}>?</Text>
                    </View>
                  </View>
                  <View style={styles.View_107_11085}>
                    <View style={styles.View_I107_11085_107_925} />
                    <View style={styles.View_I107_11085_107_911}>
                      <Text style={styles.Text_I107_11085_107_911}>!</Text>
                    </View>
                  </View>
                  <View style={styles.View_107_11086}>
                    <View style={styles.View_I107_11086_107_925} />
                    <View style={styles.View_I107_11086_107_911}>
                      <Text style={styles.Text_I107_11086_107_911}>‘</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_107_11089}>
                  <View style={styles.View_I107_11089_107_2752} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d809/b997/20f3e8b130f79f60af48c4345e9d1cf4"
                    }}
                    style={styles.ImageBackground_I107_11089_107_2754}
                  />
                </View>
              </View>
              <View style={styles.View_107_11090}>
                <View style={styles.View_107_11091}>
                  <View style={styles.View_I107_11091_107_925} />
                  <View style={styles.View_I107_11091_107_911}>
                    <Text style={styles.Text_I107_11091_107_911}>ABC</Text>
                  </View>
                </View>
                <View style={styles.View_107_11092}>
                  <View style={styles.View_I107_11092_107_925} />
                  <View style={styles.View_I107_11092_107_911}>
                    <Text style={styles.Text_I107_11092_107_911}>space</Text>
                  </View>
                </View>
                <View style={styles.View_107_11093}>
                  <View style={styles.View_I107_11093_107_925} />
                  <View style={styles.View_I107_11093_107_911}>
                    <Text style={styles.Text_I107_11093_107_911}>return</Text>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c520/7a59/89e9ae6fd035d50795cde7834c41a44b"
                }}
                style={styles.ImageBackground_107_11094}
              />
            </View>
            <View style={styles.View_107_6445}>
              <View style={styles.View_107_6446}>
                <View style={styles.View_I107_6446_36_10050} />
              </View>
              <View style={styles.View_107_6447}>
                <View style={styles.View_107_6448}>
                  <View style={styles.View_I107_6448_107_5014} />
                  <View style={styles.View_I107_6448_107_5015}>
                    <Text style={styles.Text_I107_6448_107_5015}>Q</Text>
                  </View>
                </View>
                <View style={styles.View_107_6449}>
                  <View style={styles.View_I107_6449_107_5014} />
                  <View style={styles.View_I107_6449_107_5015}>
                    <Text style={styles.Text_I107_6449_107_5015}>A</Text>
                  </View>
                </View>
                <View style={styles.View_107_6450}>
                  <View style={styles.View_I107_6450_107_5014} />
                  <View style={styles.View_I107_6450_107_5015}>
                    <Text style={styles.Text_I107_6450_107_5015}>E</Text>
                  </View>
                </View>
                <View style={styles.View_107_6451}>
                  <View style={styles.View_I107_6451_107_5014} />
                  <View style={styles.View_I107_6451_107_5015}>
                    <Text style={styles.Text_I107_6451_107_5015}>R</Text>
                  </View>
                </View>
                <View style={styles.View_107_6452}>
                  <View style={styles.View_I107_6452_107_5014} />
                  <View style={styles.View_I107_6452_107_5015}>
                    <Text style={styles.Text_I107_6452_107_5015}>T</Text>
                  </View>
                </View>
                <View style={styles.View_107_6453}>
                  <View style={styles.View_I107_6453_107_5014} />
                  <View style={styles.View_I107_6453_107_5015}>
                    <Text style={styles.Text_I107_6453_107_5015}>Y</Text>
                  </View>
                </View>
                <View style={styles.View_107_6454}>
                  <View style={styles.View_I107_6454_107_5014} />
                  <View style={styles.View_I107_6454_107_5015}>
                    <Text style={styles.Text_I107_6454_107_5015}>U</Text>
                  </View>
                </View>
                <View style={styles.View_107_6455}>
                  <View style={styles.View_I107_6455_107_5014} />
                  <View style={styles.View_I107_6455_107_5015}>
                    <Text style={styles.Text_I107_6455_107_5015}>I</Text>
                  </View>
                </View>
                <View style={styles.View_107_6456}>
                  <View style={styles.View_I107_6456_107_5014} />
                  <View style={styles.View_I107_6456_107_5015}>
                    <Text style={styles.Text_I107_6456_107_5015}>O</Text>
                  </View>
                </View>
                <View style={styles.View_107_6457}>
                  <View style={styles.View_I107_6457_107_5014} />
                  <View style={styles.View_I107_6457_107_5015}>
                    <Text style={styles.Text_I107_6457_107_5015}>P</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_107_6458}>
                <View style={styles.View_107_6459}>
                  <View style={styles.View_I107_6459_107_5014} />
                  <View style={styles.View_I107_6459_107_5015}>
                    <Text style={styles.Text_I107_6459_107_5015}>A</Text>
                  </View>
                </View>
                <View style={styles.View_107_6460}>
                  <View style={styles.View_I107_6460_107_5014} />
                  <View style={styles.View_I107_6460_107_5015}>
                    <Text style={styles.Text_I107_6460_107_5015}>S</Text>
                  </View>
                </View>
                <View style={styles.View_107_6461}>
                  <View style={styles.View_I107_6461_107_5014} />
                  <View style={styles.View_I107_6461_107_5015}>
                    <Text style={styles.Text_I107_6461_107_5015}>D</Text>
                  </View>
                </View>
                <View style={styles.View_107_6462}>
                  <View style={styles.View_I107_6462_107_5014} />
                  <View style={styles.View_I107_6462_107_5015}>
                    <Text style={styles.Text_I107_6462_107_5015}>F</Text>
                  </View>
                </View>
                <View style={styles.View_107_6463}>
                  <View style={styles.View_I107_6463_107_5014} />
                  <View style={styles.View_I107_6463_107_5015}>
                    <Text style={styles.Text_I107_6463_107_5015}>G</Text>
                  </View>
                </View>
                <View style={styles.View_107_6464}>
                  <View style={styles.View_I107_6464_107_5014} />
                  <View style={styles.View_I107_6464_107_5015}>
                    <Text style={styles.Text_I107_6464_107_5015}>H</Text>
                  </View>
                </View>
                <View style={styles.View_107_6465}>
                  <View style={styles.View_I107_6465_107_5014} />
                  <View style={styles.View_I107_6465_107_5015}>
                    <Text style={styles.Text_I107_6465_107_5015}>J</Text>
                  </View>
                </View>
                <View style={styles.View_107_6466}>
                  <View style={styles.View_I107_6466_107_5014} />
                  <View style={styles.View_I107_6466_107_5015}>
                    <Text style={styles.Text_I107_6466_107_5015}>K</Text>
                  </View>
                </View>
                <View style={styles.View_107_6467}>
                  <View style={styles.View_I107_6467_107_5014} />
                  <View style={styles.View_I107_6467_107_5015}>
                    <Text style={styles.Text_I107_6467_107_5015}>L</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_107_6468}>
                <View style={styles.View_107_6469}>
                  <View style={styles.View_I107_6469_107_5017} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d0d/e5bc/ca648ee611ca2f2afaa563d11b962780"
                    }}
                    style={styles.ImageBackground_I107_6469_107_5018}
                  />
                </View>
                <View style={styles.View_107_6470}>
                  <View style={styles.View_107_6471}>
                    <View style={styles.View_I107_6471_107_5014} />
                    <View style={styles.View_I107_6471_107_5015}>
                      <Text style={styles.Text_I107_6471_107_5015}>Z</Text>
                    </View>
                  </View>
                  <View style={styles.View_107_6472}>
                    <View style={styles.View_I107_6472_107_5014} />
                    <View style={styles.View_I107_6472_107_5015}>
                      <Text style={styles.Text_I107_6472_107_5015}>X</Text>
                    </View>
                  </View>
                  <View style={styles.View_107_6473}>
                    <View style={styles.View_I107_6473_107_5014} />
                    <View style={styles.View_I107_6473_107_5015}>
                      <Text style={styles.Text_I107_6473_107_5015}>C</Text>
                    </View>
                  </View>
                  <View style={styles.View_107_6474}>
                    <View style={styles.View_I107_6474_107_5014} />
                    <View style={styles.View_I107_6474_107_5015}>
                      <Text style={styles.Text_I107_6474_107_5015}>V</Text>
                    </View>
                  </View>
                  <View style={styles.View_107_6475}>
                    <View style={styles.View_I107_6475_107_5014} />
                    <View style={styles.View_I107_6475_107_5015}>
                      <Text style={styles.Text_I107_6475_107_5015}>B</Text>
                    </View>
                  </View>
                  <View style={styles.View_107_6476}>
                    <View style={styles.View_I107_6476_107_5014} />
                    <View style={styles.View_I107_6476_107_5015}>
                      <Text style={styles.Text_I107_6476_107_5015}>N</Text>
                    </View>
                  </View>
                  <View style={styles.View_107_6477}>
                    <View style={styles.View_I107_6477_107_5014} />
                    <View style={styles.View_I107_6477_107_5015}>
                      <Text style={styles.Text_I107_6477_107_5015}>M</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_107_6478}>
                  <View style={styles.View_I107_6478_107_5023} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aca8/53aa/7318cd309fb1ef2def11fbbb44b96e99"
                    }}
                    style={styles.ImageBackground_I107_6478_107_5024}
                  />
                </View>
              </View>
              <View style={styles.View_107_6479}>
                <View style={styles.View_107_6480}>
                  <View style={styles.View_I107_6480_107_5014} />
                  <View style={styles.View_I107_6480_107_5015}>
                    <Text style={styles.Text_I107_6480_107_5015}>123</Text>
                  </View>
                </View>
                <View style={styles.View_107_6481}>
                  <View style={styles.View_I107_6481_107_5014} />
                  <View style={styles.View_I107_6481_107_5015}>
                    <Text style={styles.Text_I107_6481_107_5015}>space</Text>
                  </View>
                </View>
                <View style={styles.View_107_6482}>
                  <View style={styles.View_I107_6482_107_5014} />
                  <View style={styles.View_I107_6482_107_5015}>
                    <Text style={styles.Text_I107_6482_107_5015}>return</Text>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d56/018a/c9a01306b424a92e54a4beed314d51c0"
                }}
                style={styles.ImageBackground_107_6483}
              />
            </View>
            <View style={styles.View_107_6274}>
              <View style={styles.View_107_6275}>
                <View style={styles.View_I107_6275_36_10050} />
              </View>
              <View style={styles.View_107_6276}>
                <View style={styles.View_107_6277}>
                  <View style={styles.View_I107_6277_107_5014} />
                  <View style={styles.View_I107_6277_107_5015}>
                    <Text style={styles.Text_I107_6277_107_5015}>q</Text>
                  </View>
                </View>
                <View style={styles.View_107_6278}>
                  <View style={styles.View_I107_6278_107_5014} />
                  <View style={styles.View_I107_6278_107_5015}>
                    <Text style={styles.Text_I107_6278_107_5015}>a</Text>
                  </View>
                </View>
                <View style={styles.View_107_6279}>
                  <View style={styles.View_I107_6279_107_5014} />
                  <View style={styles.View_I107_6279_107_5015}>
                    <Text style={styles.Text_I107_6279_107_5015}>e</Text>
                  </View>
                </View>
                <View style={styles.View_107_6280}>
                  <View style={styles.View_I107_6280_107_5014} />
                  <View style={styles.View_I107_6280_107_5015}>
                    <Text style={styles.Text_I107_6280_107_5015}>r</Text>
                  </View>
                </View>
                <View style={styles.View_107_6281}>
                  <View style={styles.View_I107_6281_107_5014} />
                  <View style={styles.View_I107_6281_107_5015}>
                    <Text style={styles.Text_I107_6281_107_5015}>t</Text>
                  </View>
                </View>
                <View style={styles.View_107_6282}>
                  <View style={styles.View_I107_6282_107_5014} />
                  <View style={styles.View_I107_6282_107_5015}>
                    <Text style={styles.Text_I107_6282_107_5015}>y</Text>
                  </View>
                </View>
                <View style={styles.View_107_6283}>
                  <View style={styles.View_I107_6283_107_5014} />
                  <View style={styles.View_I107_6283_107_5015}>
                    <Text style={styles.Text_I107_6283_107_5015}>u</Text>
                  </View>
                </View>
                <View style={styles.View_107_6284}>
                  <View style={styles.View_I107_6284_107_5014} />
                  <View style={styles.View_I107_6284_107_5015}>
                    <Text style={styles.Text_I107_6284_107_5015}>i</Text>
                  </View>
                </View>
                <View style={styles.View_107_6285}>
                  <View style={styles.View_I107_6285_107_5014} />
                  <View style={styles.View_I107_6285_107_5015}>
                    <Text style={styles.Text_I107_6285_107_5015}>o</Text>
                  </View>
                </View>
                <View style={styles.View_107_6286}>
                  <View style={styles.View_I107_6286_107_5014} />
                  <View style={styles.View_I107_6286_107_5015}>
                    <Text style={styles.Text_I107_6286_107_5015}>p</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_107_6287}>
                <View style={styles.View_107_6288}>
                  <View style={styles.View_I107_6288_107_5014} />
                  <View style={styles.View_I107_6288_107_5015}>
                    <Text style={styles.Text_I107_6288_107_5015}>a</Text>
                  </View>
                </View>
                <View style={styles.View_107_6289}>
                  <View style={styles.View_I107_6289_107_5014} />
                  <View style={styles.View_I107_6289_107_5015}>
                    <Text style={styles.Text_I107_6289_107_5015}>s</Text>
                  </View>
                </View>
                <View style={styles.View_107_6290}>
                  <View style={styles.View_I107_6290_107_5014} />
                  <View style={styles.View_I107_6290_107_5015}>
                    <Text style={styles.Text_I107_6290_107_5015}>d</Text>
                  </View>
                </View>
                <View style={styles.View_107_6291}>
                  <View style={styles.View_I107_6291_107_5014} />
                  <View style={styles.View_I107_6291_107_5015}>
                    <Text style={styles.Text_I107_6291_107_5015}>f</Text>
                  </View>
                </View>
                <View style={styles.View_107_6292}>
                  <View style={styles.View_I107_6292_107_5014} />
                  <View style={styles.View_I107_6292_107_5015}>
                    <Text style={styles.Text_I107_6292_107_5015}>g</Text>
                  </View>
                </View>
                <View style={styles.View_107_6293}>
                  <View style={styles.View_I107_6293_107_5014} />
                  <View style={styles.View_I107_6293_107_5015}>
                    <Text style={styles.Text_I107_6293_107_5015}>h</Text>
                  </View>
                </View>
                <View style={styles.View_107_6294}>
                  <View style={styles.View_I107_6294_107_5014} />
                  <View style={styles.View_I107_6294_107_5015}>
                    <Text style={styles.Text_I107_6294_107_5015}>j</Text>
                  </View>
                </View>
                <View style={styles.View_107_6295}>
                  <View style={styles.View_I107_6295_107_5014} />
                  <View style={styles.View_I107_6295_107_5015}>
                    <Text style={styles.Text_I107_6295_107_5015}>k</Text>
                  </View>
                </View>
                <View style={styles.View_107_6296}>
                  <View style={styles.View_I107_6296_107_5014} />
                  <View style={styles.View_I107_6296_107_5015}>
                    <Text style={styles.Text_I107_6296_107_5015}>l</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_107_6297}>
                <View style={styles.View_107_6298}>
                  <View style={styles.View_I107_6298_107_5020} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d5ba/3fc2/6615c34eab7d00ed9ccc50c6dcd7aac3"
                    }}
                    style={styles.ImageBackground_I107_6298_107_5021}
                  />
                </View>
                <View style={styles.View_107_6299}>
                  <View style={styles.View_107_6300}>
                    <View style={styles.View_I107_6300_107_5014} />
                    <View style={styles.View_I107_6300_107_5015}>
                      <Text style={styles.Text_I107_6300_107_5015}>z</Text>
                    </View>
                  </View>
                  <View style={styles.View_107_6301}>
                    <View style={styles.View_I107_6301_107_5014} />
                    <View style={styles.View_I107_6301_107_5015}>
                      <Text style={styles.Text_I107_6301_107_5015}>x</Text>
                    </View>
                  </View>
                  <View style={styles.View_107_6302}>
                    <View style={styles.View_I107_6302_107_5014} />
                    <View style={styles.View_I107_6302_107_5015}>
                      <Text style={styles.Text_I107_6302_107_5015}>c</Text>
                    </View>
                  </View>
                  <View style={styles.View_107_6303}>
                    <View style={styles.View_I107_6303_107_5014} />
                    <View style={styles.View_I107_6303_107_5015}>
                      <Text style={styles.Text_I107_6303_107_5015}>v</Text>
                    </View>
                  </View>
                  <View style={styles.View_107_6304}>
                    <View style={styles.View_I107_6304_107_5014} />
                    <View style={styles.View_I107_6304_107_5015}>
                      <Text style={styles.Text_I107_6304_107_5015}>b</Text>
                    </View>
                  </View>
                  <View style={styles.View_107_6305}>
                    <View style={styles.View_I107_6305_107_5014} />
                    <View style={styles.View_I107_6305_107_5015}>
                      <Text style={styles.Text_I107_6305_107_5015}>n</Text>
                    </View>
                  </View>
                  <View style={styles.View_107_6306}>
                    <View style={styles.View_I107_6306_107_5014} />
                    <View style={styles.View_I107_6306_107_5015}>
                      <Text style={styles.Text_I107_6306_107_5015}>m</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_107_6307}>
                  <View style={styles.View_I107_6307_107_5023} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aca8/53aa/7318cd309fb1ef2def11fbbb44b96e99"
                    }}
                    style={styles.ImageBackground_I107_6307_107_5024}
                  />
                </View>
              </View>
              <View style={styles.View_107_6308}>
                <View style={styles.View_107_6309}>
                  <View style={styles.View_I107_6309_107_5014} />
                  <View style={styles.View_I107_6309_107_5015}>
                    <Text style={styles.Text_I107_6309_107_5015}>123</Text>
                  </View>
                </View>
                <View style={styles.View_107_6310}>
                  <View style={styles.View_I107_6310_107_5014} />
                  <View style={styles.View_I107_6310_107_5015}>
                    <Text style={styles.Text_I107_6310_107_5015}>space</Text>
                  </View>
                </View>
                <View style={styles.View_107_6311}>
                  <View style={styles.View_I107_6311_107_5014} />
                  <View style={styles.View_I107_6311_107_5015}>
                    <Text style={styles.Text_I107_6311_107_5015}>return</Text>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d56/018a/c9a01306b424a92e54a4beed314d51c0"
                }}
                style={styles.ImageBackground_107_16358}
              />
            </View>
            <View style={styles.View_107_11198}>
              <View style={styles.View_107_11199}>
                <View style={styles.View_I107_11199_36_10050} />
              </View>
              <View style={styles.View_107_11200}>
                <View style={styles.View_107_11201}>
                  <View style={styles.View_I107_11201_107_5014} />
                  <View style={styles.View_I107_11201_107_5015}>
                    <Text style={styles.Text_I107_11201_107_5015}>1</Text>
                  </View>
                </View>
                <View style={styles.View_107_11202}>
                  <View style={styles.View_I107_11202_107_5014} />
                  <View style={styles.View_I107_11202_107_5015}>
                    <Text style={styles.Text_I107_11202_107_5015}>2</Text>
                  </View>
                </View>
                <View style={styles.View_107_11203}>
                  <View style={styles.View_I107_11203_107_5014} />
                  <View style={styles.View_I107_11203_107_5015}>
                    <Text style={styles.Text_I107_11203_107_5015}>3</Text>
                  </View>
                </View>
                <View style={styles.View_107_11204}>
                  <View style={styles.View_I107_11204_107_5014} />
                  <View style={styles.View_I107_11204_107_5015}>
                    <Text style={styles.Text_I107_11204_107_5015}>4</Text>
                  </View>
                </View>
                <View style={styles.View_107_11205}>
                  <View style={styles.View_I107_11205_107_5014} />
                  <View style={styles.View_I107_11205_107_5015}>
                    <Text style={styles.Text_I107_11205_107_5015}>5</Text>
                  </View>
                </View>
                <View style={styles.View_107_11206}>
                  <View style={styles.View_I107_11206_107_5014} />
                  <View style={styles.View_I107_11206_107_5015}>
                    <Text style={styles.Text_I107_11206_107_5015}>6</Text>
                  </View>
                </View>
                <View style={styles.View_107_11207}>
                  <View style={styles.View_I107_11207_107_5014} />
                  <View style={styles.View_I107_11207_107_5015}>
                    <Text style={styles.Text_I107_11207_107_5015}>7</Text>
                  </View>
                </View>
                <View style={styles.View_107_11208}>
                  <View style={styles.View_I107_11208_107_5014} />
                  <View style={styles.View_I107_11208_107_5015}>
                    <Text style={styles.Text_I107_11208_107_5015}>8</Text>
                  </View>
                </View>
                <View style={styles.View_107_11209}>
                  <View style={styles.View_I107_11209_107_5014} />
                  <View style={styles.View_I107_11209_107_5015}>
                    <Text style={styles.Text_I107_11209_107_5015}>9</Text>
                  </View>
                </View>
                <View style={styles.View_107_11210}>
                  <View style={styles.View_I107_11210_107_5014} />
                  <View style={styles.View_I107_11210_107_5015}>
                    <Text style={styles.Text_I107_11210_107_5015}>0</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_107_11211}>
                <View style={styles.View_107_11212}>
                  <View style={styles.View_I107_11212_107_5014} />
                  <View style={styles.View_I107_11212_107_5015}>
                    <Text style={styles.Text_I107_11212_107_5015}>-</Text>
                  </View>
                </View>
                <View style={styles.View_107_11213}>
                  <View style={styles.View_I107_11213_107_5014} />
                  <View style={styles.View_I107_11213_107_5015}>
                    <Text style={styles.Text_I107_11213_107_5015}>/</Text>
                  </View>
                </View>
                <View style={styles.View_107_11214}>
                  <View style={styles.View_I107_11214_107_5014} />
                  <View style={styles.View_I107_11214_107_5015}>
                    <Text style={styles.Text_I107_11214_107_5015}>:</Text>
                  </View>
                </View>
                <View style={styles.View_107_11215}>
                  <View style={styles.View_I107_11215_107_5014} />
                  <View style={styles.View_I107_11215_107_5015}>
                    <Text style={styles.Text_I107_11215_107_5015}>;</Text>
                  </View>
                </View>
                <View style={styles.View_107_11216}>
                  <View style={styles.View_I107_11216_107_5014} />
                  <View style={styles.View_I107_11216_107_5015}>
                    <Text style={styles.Text_I107_11216_107_5015}>(</Text>
                  </View>
                </View>
                <View style={styles.View_107_11217}>
                  <View style={styles.View_I107_11217_107_5014} />
                  <View style={styles.View_I107_11217_107_5015}>
                    <Text style={styles.Text_I107_11217_107_5015}>)</Text>
                  </View>
                </View>
                <View style={styles.View_107_11218}>
                  <View style={styles.View_I107_11218_107_5014} />
                  <View style={styles.View_I107_11218_107_5015}>
                    <Text style={styles.Text_I107_11218_107_5015}>$</Text>
                  </View>
                </View>
                <View style={styles.View_107_11219}>
                  <View style={styles.View_I107_11219_107_5014} />
                  <View style={styles.View_I107_11219_107_5015}>
                    <Text style={styles.Text_I107_11219_107_5015}>&amp;</Text>
                  </View>
                </View>
                <View style={styles.View_107_11220}>
                  <View style={styles.View_I107_11220_107_5014} />
                  <View style={styles.View_I107_11220_107_5015}>
                    <Text style={styles.Text_I107_11220_107_5015}>@</Text>
                  </View>
                </View>
                <View style={styles.View_107_11221}>
                  <View style={styles.View_I107_11221_107_5014} />
                  <View style={styles.View_I107_11221_107_5015}>
                    <Text style={styles.Text_I107_11221_107_5015}>“</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_107_11222}>
                <View style={styles.View_107_11223}>
                  <View style={styles.View_I107_11223_107_5014} />
                  <View style={styles.View_I107_11223_107_5015}>
                    <Text style={styles.Text_I107_11223_107_5015}>#+=</Text>
                  </View>
                </View>
                <View style={styles.View_107_11224}>
                  <View style={styles.View_107_11225}>
                    <View style={styles.View_I107_11225_107_5014} />
                    <View style={styles.View_I107_11225_107_5015}>
                      <Text style={styles.Text_I107_11225_107_5015}>.</Text>
                    </View>
                  </View>
                  <View style={styles.View_107_11226}>
                    <View style={styles.View_I107_11226_107_5014} />
                    <View style={styles.View_I107_11226_107_5015}>
                      <Text style={styles.Text_I107_11226_107_5015}>,</Text>
                    </View>
                  </View>
                  <View style={styles.View_107_11227}>
                    <View style={styles.View_I107_11227_107_5014} />
                    <View style={styles.View_I107_11227_107_5015}>
                      <Text style={styles.Text_I107_11227_107_5015}>?</Text>
                    </View>
                  </View>
                  <View style={styles.View_107_11228}>
                    <View style={styles.View_I107_11228_107_5014} />
                    <View style={styles.View_I107_11228_107_5015}>
                      <Text style={styles.Text_I107_11228_107_5015}>!</Text>
                    </View>
                  </View>
                  <View style={styles.View_107_11229}>
                    <View style={styles.View_I107_11229_107_5014} />
                    <View style={styles.View_I107_11229_107_5015}>
                      <Text style={styles.Text_I107_11229_107_5015}>‘</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_107_11230}>
                  <View style={styles.View_I107_11230_107_5023} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aca8/53aa/7318cd309fb1ef2def11fbbb44b96e99"
                    }}
                    style={styles.ImageBackground_I107_11230_107_5024}
                  />
                </View>
              </View>
              <View style={styles.View_107_11231}>
                <View style={styles.View_107_11232}>
                  <View style={styles.View_I107_11232_107_5014} />
                  <View style={styles.View_I107_11232_107_5015}>
                    <Text style={styles.Text_I107_11232_107_5015}>ABC</Text>
                  </View>
                </View>
                <View style={styles.View_107_11233}>
                  <View style={styles.View_I107_11233_107_5014} />
                  <View style={styles.View_I107_11233_107_5015}>
                    <Text style={styles.Text_I107_11233_107_5015}>space</Text>
                  </View>
                </View>
                <View style={styles.View_107_11234}>
                  <View style={styles.View_I107_11234_107_5014} />
                  <View style={styles.View_I107_11234_107_5015}>
                    <Text style={styles.Text_I107_11234_107_5015}>return</Text>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d56/018a/c9a01306b424a92e54a4beed314d51c0"
                }}
                style={styles.ImageBackground_107_16361}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_107_10356}>
        <View style={styles.View_107_10357}>
          <Text style={styles.Text_107_10357}>Numeric Keyboard</Text>
        </View>
        <View style={styles.View_107_10358}>
          <View style={styles.View_107_10359}>
            <View style={styles.View_107_10360}>
              <View style={styles.View_107_10361}>
                <Text style={styles.Text_107_10361}>Light</Text>
              </View>
              <View style={styles.View_107_10362}>
                <Text style={styles.Text_107_10362}>Dark</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_107_10365}>
            <View style={styles.View_107_10302}>
              <View style={styles.View_107_10141}>
                <View style={styles.View_I107_10141_5_3093} />
              </View>
              <View style={styles.View_107_10142}>
                <View style={styles.View_107_10143}>
                  <View style={styles.View_I107_10143_107_9970} />
                  <View style={styles.View_I107_10143_107_9972}>
                    <Text style={styles.Text_I107_10143_107_9972}>1</Text>
                  </View>
                </View>
                <View style={styles.View_107_10144}>
                  <View style={styles.View_I107_10144_107_9970} />
                  <View style={styles.View_I107_10144_107_9973}>
                    <Text style={styles.Text_I107_10144_107_9973}>ABC</Text>
                  </View>
                  <View style={styles.View_I107_10144_107_9972}>
                    <Text style={styles.Text_I107_10144_107_9972}>2</Text>
                  </View>
                </View>
                <View style={styles.View_107_10145}>
                  <View style={styles.View_I107_10145_107_9970} />
                  <View style={styles.View_I107_10145_107_9973}>
                    <Text style={styles.Text_I107_10145_107_9973}>DEF</Text>
                  </View>
                  <View style={styles.View_I107_10145_107_9972}>
                    <Text style={styles.Text_I107_10145_107_9972}>3</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_107_10253}>
                <View style={styles.View_107_10254}>
                  <View style={styles.View_I107_10254_107_9970} />
                  <View style={styles.View_I107_10254_107_9973}>
                    <Text style={styles.Text_I107_10254_107_9973}>GHI</Text>
                  </View>
                  <View style={styles.View_I107_10254_107_9972}>
                    <Text style={styles.Text_I107_10254_107_9972}>4</Text>
                  </View>
                </View>
                <View style={styles.View_107_10255}>
                  <View style={styles.View_I107_10255_107_9970} />
                  <View style={styles.View_I107_10255_107_9973}>
                    <Text style={styles.Text_I107_10255_107_9973}>JKL</Text>
                  </View>
                  <View style={styles.View_I107_10255_107_9972}>
                    <Text style={styles.Text_I107_10255_107_9972}>5</Text>
                  </View>
                </View>
                <View style={styles.View_107_10256}>
                  <View style={styles.View_I107_10256_107_9970} />
                  <View style={styles.View_I107_10256_107_9973}>
                    <Text style={styles.Text_I107_10256_107_9973}>MNO</Text>
                  </View>
                  <View style={styles.View_I107_10256_107_9972}>
                    <Text style={styles.Text_I107_10256_107_9972}>6</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_107_10266}>
                <View style={styles.View_107_10267}>
                  <View style={styles.View_I107_10267_107_9970} />
                  <View style={styles.View_I107_10267_107_9973}>
                    <Text style={styles.Text_I107_10267_107_9973}>PQRS</Text>
                  </View>
                  <View style={styles.View_I107_10267_107_9972}>
                    <Text style={styles.Text_I107_10267_107_9972}>7</Text>
                  </View>
                </View>
                <View style={styles.View_107_10268}>
                  <View style={styles.View_I107_10268_107_9970} />
                  <View style={styles.View_I107_10268_107_9973}>
                    <Text style={styles.Text_I107_10268_107_9973}>TUV</Text>
                  </View>
                  <View style={styles.View_I107_10268_107_9972}>
                    <Text style={styles.Text_I107_10268_107_9972}>8</Text>
                  </View>
                </View>
                <View style={styles.View_107_10269}>
                  <View style={styles.View_I107_10269_107_9970} />
                  <View style={styles.View_I107_10269_107_9973}>
                    <Text style={styles.Text_I107_10269_107_9973}>WXYZ</Text>
                  </View>
                  <View style={styles.View_I107_10269_107_9972}>
                    <Text style={styles.Text_I107_10269_107_9972}>9</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_107_10279}>
                <View style={styles.View_107_10280} />
                <View style={styles.View_107_10281}>
                  <View style={styles.View_I107_10281_107_925} />
                  <View style={styles.View_I107_10281_107_911}>
                    <Text style={styles.Text_I107_10281_107_911}>0</Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bc7/c1af/45117b3dacced4449dcb65426c8bba3a"
                  }}
                  style={styles.ImageBackground_107_10282}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a14/b9e0/69144bd4104100dcb42513ed21f8b6fd"
              }}
              style={styles.ImageBackground_107_10911}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_107_16680}>
        <View style={styles.View_107_16681}>
          <Text style={styles.Text_107_16681}>Emoji Keyboard</Text>
        </View>
        <View style={styles.View_107_16682}>
          <View style={styles.View_107_16683}>
            <View style={styles.View_107_16684}>
              <View style={styles.View_107_16685}>
                <Text style={styles.Text_107_16685}>Light</Text>
              </View>
              <View style={styles.View_107_16686}>
                <Text style={styles.Text_107_16686}>Dark</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_107_16687}>
            <View style={styles.View_107_13634}>
              <View style={styles.View_107_13639}>
                <Text style={styles.Text_107_13639}>SMILEYS &amp; PEOPLE</Text>
              </View>
              <View style={styles.View_107_16440}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d64b/b1f3/1d2ed20d04c407ac0e29b95bcd425a49"
                  }}
                  style={styles.ImageBackground_I107_16440_140_9380}
                />
                <View style={styles.View_I107_16440_26_525}>
                  <Text style={styles.Text_I107_16440_26_525}>
                    Search Emoji
                  </Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f68/6437/538ded931e4d0a99373080a13968932a"
                  }}
                  style={styles.ImageBackground_I107_16440_140_9337}
                />
              </View>
              <View style={styles.View_107_13771}>
                <View style={styles.View_107_13729}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfe4/8d82/b975959e1a205e4cc30e778a4dee8784"
                    }}
                    style={styles.ImageBackground_107_13641}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0668/82bf/4eaa99e788a7a4fd17654f44f91fda63"
                    }}
                    style={styles.ImageBackground_107_13646}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4156/695a/a0365def5e0588af48a15720865f93f8"
                    }}
                    style={styles.ImageBackground_107_13651}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66c6/d00c/0f68d482a9a20aa983914263db81f782"
                    }}
                    style={styles.ImageBackground_107_13656}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/414a/0da6/e4f0bff5145b586e7593c32ca42df89b"
                    }}
                    style={styles.ImageBackground_107_13661}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a450/635d/0fbe772f308d3c56ecc4195762038395"
                    }}
                    style={styles.ImageBackground_107_13666}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/693d/b33e/2355e98483344136327bc7e71d0c92fb"
                    }}
                    style={styles.ImageBackground_107_13671}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d22a/0da6/016b0feb52e290e89b674c449bebd484"
                    }}
                    style={styles.ImageBackground_107_13676}
                  />
                </View>
              </View>
              <View style={styles.View_107_13921}>
                <View style={styles.View_107_13922}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f7c/fc22/4899f6eb6f5a04493f153d87dbdc6da5"
                    }}
                    style={styles.ImageBackground_107_13923}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8205/2e08/ee966549e4eebaa4079c79715751bc00"
                    }}
                    style={styles.ImageBackground_107_13924}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af25/8d5c/5efeb3aa40a8bead290dd1a6f70b3824"
                    }}
                    style={styles.ImageBackground_107_13925}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94d0/a124/eccfa7cb2e1aea37d1cf838689f49c7a"
                    }}
                    style={styles.ImageBackground_107_13926}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ded3/c0c7/e6cc814ad6e70831487d2faa42f82d15"
                    }}
                    style={styles.ImageBackground_107_13927}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31cf/778a/8827623b05650fd16193bf45daa8dd0e"
                    }}
                    style={styles.ImageBackground_107_13928}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9f1/b824/0592490a0dc8b70da7aacf768dd3bc61"
                    }}
                    style={styles.ImageBackground_107_13929}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2ae/8cbd/7104dcedc30eb9956777d976f1ac0892"
                    }}
                    style={styles.ImageBackground_107_13930}
                  />
                </View>
              </View>
              <View style={styles.View_107_13957}>
                <View style={styles.View_107_13958}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9aab/7c9a/6ec2a272a10d4f02968f6fcc5d416b04"
                    }}
                    style={styles.ImageBackground_107_13959}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa61/7d03/27517778ee2c5dbde39280891d6daaec"
                    }}
                    style={styles.ImageBackground_107_13960}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c503/9d18/62a3e1099e0d1b7615cf06b8bc68de49"
                    }}
                    style={styles.ImageBackground_107_13961}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d483/e8a1/3ffdfb6347f929674da7d13cd0d62237"
                    }}
                    style={styles.ImageBackground_107_13962}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6844/1870/f5a18db0a6f9c06a14cc3233b2c3e383"
                    }}
                    style={styles.ImageBackground_107_13963}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee8f/3aea/61c741c9b447273c95a0901f6467612f"
                    }}
                    style={styles.ImageBackground_107_13964}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb6f/eb9a/b42a3352cca6a75416f3c82c3f666eaf"
                    }}
                    style={styles.ImageBackground_107_13965}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a88b/56c6/6dc2acd5370597cc4445ffed9a39d9f4"
                    }}
                    style={styles.ImageBackground_107_13966}
                  />
                </View>
              </View>
              <View style={styles.View_107_14003}>
                <View style={styles.View_107_14004}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f097/0fe1/b600309d82e6f6da71a9bb1857eab3e0"
                    }}
                    style={styles.ImageBackground_107_14005}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bf2/8a76/06e2718db3243689337e2638b1f7ee68"
                    }}
                    style={styles.ImageBackground_107_14006}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0115/ea09/1b3523727ec81a0832a36e8e620b85a0"
                    }}
                    style={styles.ImageBackground_107_14007}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2356/5a1e/c7c5bf18247a87af2c84d2529c9cbf06"
                    }}
                    style={styles.ImageBackground_107_14008}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/593f/ec18/26e0fbd9df941ed5a46b663956e14685"
                    }}
                    style={styles.ImageBackground_107_14009}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09d2/20bd/dcfe443877ecd2c8157bfab0e3b5e779"
                    }}
                    style={styles.ImageBackground_107_14010}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14ab/4996/41fe4bc51d96afea96e614f1ee3e0bc4"
                    }}
                    style={styles.ImageBackground_107_14011}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5ab/66fa/502eb636b74f2faad669f47bb6100eda"
                    }}
                    style={styles.ImageBackground_107_14012}
                  />
                </View>
              </View>
              <View style={styles.View_107_14059}>
                <View style={styles.View_107_14060}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dac2/6e46/389dc9cba968fc78a5bdf280eaa0d863"
                    }}
                    style={styles.ImageBackground_107_14061}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bac5/cc6e/9c585cf245d5cc728f6fc43344143de8"
                    }}
                    style={styles.ImageBackground_107_14062}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d44b/da77/2020ec795790f26d58e90b4fde18d39b"
                    }}
                    style={styles.ImageBackground_107_14063}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9aee/2a70/a6af6294e38d68553b3b07e1bfd4e96a"
                    }}
                    style={styles.ImageBackground_107_14064}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ee9/dd7b/abf9652a062f26237626fe8f9bedc899"
                    }}
                    style={styles.ImageBackground_107_14065}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d45/6d21/d8be9da742f0a9d6f4d5b80c0bbf987b"
                    }}
                    style={styles.ImageBackground_107_14066}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28bc/81b5/f6ee644093e0d31c34b68ad21d044910"
                    }}
                    style={styles.ImageBackground_107_14067}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22cf/c183/e91c9526e320795308ad6e0915af6d9c"
                    }}
                    style={styles.ImageBackground_107_14068}
                  />
                </View>
              </View>
              <View style={styles.View_107_14483}>
                <View style={styles.View_107_15175}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0f22/6555/dee4c08d2b10675bbb468957039518ee"
                    }}
                    style={styles.ImageBackground_107_16118}
                  />
                  <View style={styles.View_107_15321}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf8d/1efc/5d44570f8dfb8497acb2967242b1063e"
                      }}
                      style={styles.ImageBackground_107_16131}
                    />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/674c/716c/50fce78c91b3611ded01da7f516ba431"
                    }}
                    style={styles.ImageBackground_107_16088}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a636/ab73/53364c10059f7dd9fdaedc721077beaf"
                    }}
                    style={styles.ImageBackground_107_16053}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a989/b9a8/6877acac03d31af549c8aba3e0e3bdac"
                    }}
                    style={styles.ImageBackground_107_16012}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5fce/0f43/6a96b2ea7f3caf5e78e6a8b540be7fe3"
                    }}
                    style={styles.ImageBackground_107_15949}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b54/94c7/0b2daf03e1b8759d60b3276e4dff2e79"
                    }}
                    style={styles.ImageBackground_107_15859}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5149/3ce4/a928db5790f9bf7728f1afeb10bafec1"
                    }}
                    style={styles.ImageBackground_107_15748}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c404/d4cd/2854091f849dd8cb5b8fc4fcbe47c201"
                    }}
                    style={styles.ImageBackground_107_15634}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1243/a1a9/fc8433e5f4bb48f2bf21db47a72d81db"
                    }}
                    style={styles.ImageBackground_107_15515}
                  />
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c520/7a59/89e9ae6fd035d50795cde7834c41a44b"
                }}
                style={styles.ImageBackground_107_13568}
              />
              <View style={styles.View_107_13531}>
                <View style={styles.View_I107_13531_5_3093} />
              </View>
            </View>
            <View style={styles.View_107_16351}>
              <View style={styles.View_107_16597}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d377/77b4/6a5af237959cedd190739ecb5c530dc6"
                  }}
                  style={styles.ImageBackground_I107_16597_140_9425}
                />
                <View style={styles.View_I107_16597_26_7539}>
                  <Text style={styles.Text_I107_16597_26_7539}>
                    Search Emoji
                  </Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c69/6527/2cab4082d9cd7d2ff285cbc6fbf810d2"
                  }}
                  style={styles.ImageBackground_I107_16597_140_9453}
                />
              </View>
              <View style={styles.View_107_16284}>
                <Text style={styles.Text_107_16284}>SMILEYS &amp; PEOPLE</Text>
              </View>
              <View style={styles.View_107_16285}>
                <View style={styles.View_107_16286}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfe4/8d82/b975959e1a205e4cc30e778a4dee8784"
                    }}
                    style={styles.ImageBackground_107_16287}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0668/82bf/4eaa99e788a7a4fd17654f44f91fda63"
                    }}
                    style={styles.ImageBackground_107_16288}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4156/695a/a0365def5e0588af48a15720865f93f8"
                    }}
                    style={styles.ImageBackground_107_16289}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66c6/d00c/0f68d482a9a20aa983914263db81f782"
                    }}
                    style={styles.ImageBackground_107_16290}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/414a/0da6/e4f0bff5145b586e7593c32ca42df89b"
                    }}
                    style={styles.ImageBackground_107_16291}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a450/635d/0fbe772f308d3c56ecc4195762038395"
                    }}
                    style={styles.ImageBackground_107_16292}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/693d/b33e/2355e98483344136327bc7e71d0c92fb"
                    }}
                    style={styles.ImageBackground_107_16293}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d22a/0da6/016b0feb52e290e89b674c449bebd484"
                    }}
                    style={styles.ImageBackground_107_16294}
                  />
                </View>
              </View>
              <View style={styles.View_107_16295}>
                <View style={styles.View_107_16296}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f7c/fc22/4899f6eb6f5a04493f153d87dbdc6da5"
                    }}
                    style={styles.ImageBackground_107_16297}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8205/2e08/ee966549e4eebaa4079c79715751bc00"
                    }}
                    style={styles.ImageBackground_107_16298}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af25/8d5c/5efeb3aa40a8bead290dd1a6f70b3824"
                    }}
                    style={styles.ImageBackground_107_16299}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94d0/a124/eccfa7cb2e1aea37d1cf838689f49c7a"
                    }}
                    style={styles.ImageBackground_107_16300}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ded3/c0c7/e6cc814ad6e70831487d2faa42f82d15"
                    }}
                    style={styles.ImageBackground_107_16301}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31cf/778a/8827623b05650fd16193bf45daa8dd0e"
                    }}
                    style={styles.ImageBackground_107_16302}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9f1/b824/0592490a0dc8b70da7aacf768dd3bc61"
                    }}
                    style={styles.ImageBackground_107_16303}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2ae/8cbd/7104dcedc30eb9956777d976f1ac0892"
                    }}
                    style={styles.ImageBackground_107_16304}
                  />
                </View>
              </View>
              <View style={styles.View_107_16305}>
                <View style={styles.View_107_16306}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9aab/7c9a/6ec2a272a10d4f02968f6fcc5d416b04"
                    }}
                    style={styles.ImageBackground_107_16307}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa61/7d03/27517778ee2c5dbde39280891d6daaec"
                    }}
                    style={styles.ImageBackground_107_16308}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c503/9d18/62a3e1099e0d1b7615cf06b8bc68de49"
                    }}
                    style={styles.ImageBackground_107_16309}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d483/e8a1/3ffdfb6347f929674da7d13cd0d62237"
                    }}
                    style={styles.ImageBackground_107_16310}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6844/1870/f5a18db0a6f9c06a14cc3233b2c3e383"
                    }}
                    style={styles.ImageBackground_107_16311}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee8f/3aea/61c741c9b447273c95a0901f6467612f"
                    }}
                    style={styles.ImageBackground_107_16312}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb6f/eb9a/b42a3352cca6a75416f3c82c3f666eaf"
                    }}
                    style={styles.ImageBackground_107_16313}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a88b/56c6/6dc2acd5370597cc4445ffed9a39d9f4"
                    }}
                    style={styles.ImageBackground_107_16314}
                  />
                </View>
              </View>
              <View style={styles.View_107_16315}>
                <View style={styles.View_107_16316}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f097/0fe1/b600309d82e6f6da71a9bb1857eab3e0"
                    }}
                    style={styles.ImageBackground_107_16317}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bf2/8a76/06e2718db3243689337e2638b1f7ee68"
                    }}
                    style={styles.ImageBackground_107_16318}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0115/ea09/1b3523727ec81a0832a36e8e620b85a0"
                    }}
                    style={styles.ImageBackground_107_16319}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2356/5a1e/c7c5bf18247a87af2c84d2529c9cbf06"
                    }}
                    style={styles.ImageBackground_107_16320}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/593f/ec18/26e0fbd9df941ed5a46b663956e14685"
                    }}
                    style={styles.ImageBackground_107_16321}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09d2/20bd/dcfe443877ecd2c8157bfab0e3b5e779"
                    }}
                    style={styles.ImageBackground_107_16322}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14ab/4996/41fe4bc51d96afea96e614f1ee3e0bc4"
                    }}
                    style={styles.ImageBackground_107_16323}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c5ab/66fa/502eb636b74f2faad669f47bb6100eda"
                    }}
                    style={styles.ImageBackground_107_16324}
                  />
                </View>
              </View>
              <View style={styles.View_107_16325}>
                <View style={styles.View_107_16326}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dac2/6e46/389dc9cba968fc78a5bdf280eaa0d863"
                    }}
                    style={styles.ImageBackground_107_16327}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bac5/cc6e/9c585cf245d5cc728f6fc43344143de8"
                    }}
                    style={styles.ImageBackground_107_16328}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d44b/da77/2020ec795790f26d58e90b4fde18d39b"
                    }}
                    style={styles.ImageBackground_107_16329}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9aee/2a70/a6af6294e38d68553b3b07e1bfd4e96a"
                    }}
                    style={styles.ImageBackground_107_16330}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ee9/dd7b/abf9652a062f26237626fe8f9bedc899"
                    }}
                    style={styles.ImageBackground_107_16331}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d45/6d21/d8be9da742f0a9d6f4d5b80c0bbf987b"
                    }}
                    style={styles.ImageBackground_107_16332}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/28bc/81b5/f6ee644093e0d31c34b68ad21d044910"
                    }}
                    style={styles.ImageBackground_107_16333}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22cf/c183/e91c9526e320795308ad6e0915af6d9c"
                    }}
                    style={styles.ImageBackground_107_16334}
                  />
                </View>
              </View>
              <View style={styles.View_107_16335}>
                <View style={styles.View_107_16336}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f99d/fbfc/6a40e6212721473e7d85c1205b8004ef"
                    }}
                    style={styles.ImageBackground_108_3777}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9619/dc8e/efaf9150ce38ee0e5f13a74ce24aad04"
                    }}
                    style={styles.ImageBackground_108_3778}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b647/c11c/3422e25d33433c849a1d7c32877e154b"
                    }}
                    style={styles.ImageBackground_108_3787}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6074/fdb9/538dd564e8d7c38bc56df11423776945"
                    }}
                    style={styles.ImageBackground_108_3788}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b229/1b1e/c0ad243ce36499b8ffe5214b22434bf4"
                    }}
                    style={styles.ImageBackground_108_3789}
                  />
                  <View style={styles.View_108_3790}>
                    <View style={styles.View_108_3791}>
                      <View style={styles.View_108_3792}>
                        <View style={styles.View_108_3793}>
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f70/357b/2a79fb73c053fecf0bf66b5e40f99e9a"
                            }}
                            style={styles.ImageBackground_108_3794}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d18d/4008/2688b2bfb1116938d569830c04545315"
                            }}
                            style={styles.ImageBackground_108_3798}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef6e/e6dd/b2fbc60288fc9272259d2d03505afe10"
                            }}
                            style={styles.ImageBackground_108_3799}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc6c/1423/03f3fb6560deb81ab39c0a999f3bc94c"
                            }}
                            style={styles.ImageBackground_108_3800}
                          />
                          <ImageBackground
                            source={{
                              uri:
                                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e92/3b64/ee9577a6d51066d1744a5ca7b3867e5a"
                            }}
                            style={styles.ImageBackground_108_3801}
                          />
                        </View>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f81b/2f43/a12d9d81248b98948b2408490fe39371"
                          }}
                          style={styles.ImageBackground_108_3802}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f81b/2f43/a12d9d81248b98948b2408490fe39371"
                          }}
                          style={styles.ImageBackground_108_3803}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f81b/2f43/a12d9d81248b98948b2408490fe39371"
                          }}
                          style={styles.ImageBackground_108_3804}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f81b/2f43/a12d9d81248b98948b2408490fe39371"
                          }}
                          style={styles.ImageBackground_108_3805}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f81b/2f43/a12d9d81248b98948b2408490fe39371"
                          }}
                          style={styles.ImageBackground_108_3806}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce37/cb1c/67b96b3b99016c8f64054a26088a3458"
                          }}
                          style={styles.ImageBackground_108_3807}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f81b/2f43/a12d9d81248b98948b2408490fe39371"
                          }}
                          style={styles.ImageBackground_108_3808}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d242/d514/fc8e7b8f467202c7e916820dcf2b1a97"
                          }}
                          style={styles.ImageBackground_108_3809}
                        />
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62ee/65f3/af2fd2a817dfd8cacac61330e6c8c5aa"
                        }}
                        style={styles.ImageBackground_108_3810}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62ee/65f3/af2fd2a817dfd8cacac61330e6c8c5aa"
                        }}
                        style={styles.ImageBackground_108_3811}
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3134/845e/739a495234ef4b70b414a4a21686d4f9"
                        }}
                        style={styles.ImageBackground_108_3812}
                      />
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e847/4f8d/95221a173e1e8eeedbc8b320e2bfc170"
                      }}
                      style={styles.ImageBackground_108_3813}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa13/12e6/b6e3364fd14f79afe392ba0f613838de"
                      }}
                      style={styles.ImageBackground_108_3814}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa13/12e6/b6e3364fd14f79afe392ba0f613838de"
                      }}
                      style={styles.ImageBackground_108_3815}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/280e/1d6c/e72bdd44fe7899269679de6aa59ce75a"
                      }}
                      style={styles.ImageBackground_108_3816}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e19e/20ed/591c0080ac2f28c615d710f59302ad3e"
                      }}
                      style={styles.ImageBackground_108_3817}
                    />
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2dc6/91c8/ce85ece20241e44d62662c48a0ca2100"
                    }}
                    style={styles.ImageBackground_108_3818}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f6f/7dcc/88e1a029ba72a7546d53a445a2e097fd"
                    }}
                    style={styles.ImageBackground_108_3824}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/837e/7aa9/4210c2c1ce9d4304dff4fc602a5c1d83"
                    }}
                    style={styles.ImageBackground_108_3825}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e969/ab0c/84c2ce4467ebb297dd3d6a5f47b221d7"
                    }}
                    style={styles.ImageBackground_108_3826}
                  />
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d56/018a/c9a01306b424a92e54a4beed314d51c0"
                }}
                style={styles.ImageBackground_107_16364}
              />
              <View style={styles.View_107_16280}>
                <View style={styles.View_I107_16280_36_10050} />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_107_12878}>
        <View style={styles.View_107_12879}>
          <Text style={styles.Text_107_12879}>Braille Keyboard</Text>
        </View>
        <View style={styles.View_107_12880}>
          <View style={styles.View_5_1248}>
            <View style={styles.View_5_1769} />
            <View style={styles.View_5_1250}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4be6/bae5/ef1252558f085b15d01a46eb76545c8b"
                }}
                style={styles.ImageBackground_5_1251}
              />
              <View style={styles.View_5_1252}>
                <Text style={styles.Text_5_1252}>6</Text>
              </View>
            </View>
            <View style={styles.View_5_1253}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4be6/bae5/ef1252558f085b15d01a46eb76545c8b"
                }}
                style={styles.ImageBackground_5_1254}
              />
              <View style={styles.View_5_1255}>
                <Text style={styles.Text_5_1255}>4</Text>
              </View>
            </View>
            <View style={styles.View_5_1256}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4be6/bae5/ef1252558f085b15d01a46eb76545c8b"
                }}
                style={styles.ImageBackground_5_1257}
              />
              <View style={styles.View_5_1258}>
                <Text style={styles.Text_5_1258}>5</Text>
              </View>
            </View>
            <View style={styles.View_5_1259}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4be6/bae5/ef1252558f085b15d01a46eb76545c8b"
                }}
                style={styles.ImageBackground_5_1260}
              />
              <View style={styles.View_5_1261}>
                <Text style={styles.Text_5_1261}>3</Text>
              </View>
            </View>
            <View style={styles.View_5_1262}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4be6/bae5/ef1252558f085b15d01a46eb76545c8b"
                }}
                style={styles.ImageBackground_5_1263}
              />
              <View style={styles.View_5_1264}>
                <Text style={styles.Text_5_1264}>1</Text>
              </View>
            </View>
            <View style={styles.View_5_1265}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4be6/bae5/ef1252558f085b15d01a46eb76545c8b"
                }}
                style={styles.ImageBackground_5_1266}
              />
              <View style={styles.View_5_1267}>
                <Text style={styles.Text_5_1267}>2</Text>
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
  View_2: { height: hp("838.3879781420765%") },
  View_140_5505: {
    width: wp("84.01997503121099%"),
    minWidth: wp("84.01997503121099%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.990012484394507%"),
    top: hp("8.743169398907105%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_1930: {
    flexGrow: 1,
    width: wp("84.01997503121099%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1930_5_19: {
    flexGrow: 1,
    width: wp("84.01997503121099%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1930_5_20: {
    width: wp("36.079900124843945%"),
    minWidth: wp("36.079900124843945%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1930_5_21: {
    width: wp("6.991260923845194%"),
    minWidth: wp("6.991260923845194%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_1930_5_22: {
    width: wp("25.0936329588015%"),
    minWidth: wp("25.0936329588015%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.986267166042447%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_1930_5_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1930_5_23: {
    width: wp("43.94506866416979%"),
    minWidth: wp("43.94506866416979%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.0749063670412%"),
    top: hp("2.185792349726775%"),
    justifyContent: "center"
  },
  Text_I5_1930_5_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_1930_5_24: {
    flexGrow: 1,
    width: wp("84.01997503121099%"),
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
  ImageBackground_140_5526: {
    width: wp("6.991260923845194%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_107_9906: {
    width: wp("84.01997503121099%"),
    minWidth: wp("84.01997503121099%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.990012484394507%"),
    top: hp("29.6448087431694%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_9906_10_2304: {
    flexGrow: 1,
    width: wp("8.863920099875156%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I107_9906_10_2304: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I107_9906_10_2303: {
    flexGrow: 1,
    width: wp("84.01997503121099%"),
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
  View_107_9968: {
    width: wp("84.01997503121099%"),
    minWidth: wp("84.01997503121099%"),
    height: hp("113.11475409836065%"),
    minHeight: hp("113.11475409836065%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.990012484394507%"),
    top: hp("46.85792349726776%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_9911: {
    width: wp("35.2059925093633%"),
    minWidth: wp("35.2059925093633%"),
    height: hp("72.6775956284153%"),
    minHeight: hp("72.6775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_9912: {
    width: wp("18.726591760299627%"),
    minWidth: wp("18.726591760299627%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_107_9912: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_107_9913: {
    width: wp("35.2059925093633%"),
    minWidth: wp("35.2059925093633%"),
    height: hp("65.02732240437157%"),
    minHeight: hp("65.02732240437157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_107_9914: {
    width: wp("19.22596754057428%"),
    minWidth: wp("19.22596754057428%"),
    height: hp("53.825136612021865%"),
    minHeight: hp("53.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.980024968789015%"),
    top: hp("5.601092896174862%")
  },
  View_107_9915: {
    width: wp("19.22596754057428%"),
    minWidth: wp("19.22596754057428%"),
    height: hp("53.825136612021865%"),
    minHeight: hp("53.825136612021865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_107_9916: {
    width: wp("16.978776529338326%"),
    minWidth: wp("16.978776529338326%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_107_9916: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_107_9917: {
    width: wp("19.22596754057428%"),
    minWidth: wp("19.22596754057428%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.10928961748634%"),
    justifyContent: "center"
  },
  Text_107_9917: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_107_9918: {
    width: wp("15.85518102372035%"),
    minWidth: wp("15.85518102372035%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.21857923497268%"),
    justifyContent: "center"
  },
  Text_107_9918: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_107_9942: {
    width: wp("15.85518102372035%"),
    minWidth: wp("15.85518102372035%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30.32786885245902%"),
    justifyContent: "center"
  },
  Text_107_9942: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_107_9943: {
    width: wp("18.102372034956304%"),
    minWidth: wp("18.102372034956304%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40.43715846994536%"),
    justifyContent: "center"
  },
  Text_107_9943: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_107_9944: {
    width: wp("14.731585518102372%"),
    minWidth: wp("14.731585518102372%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("50.5464480874317%"),
    justifyContent: "center"
  },
  Text_107_9944: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_107_2983: {
    width: wp("11.985018726591761%"),
    minWidth: wp("11.985018726591761%"),
    height: hp("65.02732240437157%"),
    minHeight: hp("65.02732240437157%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_107_912: {
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    top: hp("4.371584699453557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9950062421972543%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_107_2982: {
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    top: hp("14.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9950062421972543%"),
    backgroundColor: "rgba(173, 179, 188, 1)"
  },
  View_107_3294: {
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    top: hp("24.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9950062421972543%"),
    backgroundColor: "rgba(0, 122, 255, 1)"
  },
  View_107_5010: {
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    top: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9950062421972543%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_107_5011: {
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    top: hp("44.80874316939891%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9950062421972543%"),
    backgroundColor: "rgba(71, 71, 71, 1)"
  },
  View_107_5012: {
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    top: hp("54.918032786885234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9950062421972543%"),
    backgroundColor: "rgba(10, 132, 255, 1)"
  },
  View_107_9945: {
    width: wp("40.823970037453186%"),
    minWidth: wp("40.823970037453186%"),
    height: hp("113.11475409836065%"),
    minHeight: hp("113.11475409836065%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43.19600499375781%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_9946: {
    width: wp("4.369538077403246%"),
    minWidth: wp("4.369538077403246%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_107_9946: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_107_9947: {
    width: wp("40.823970037453186%"),
    minWidth: wp("40.823970037453186%"),
    height: hp("105.46448087431695%"),
    minHeight: hp("105.46448087431695%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_107_9948: {
    width: wp("24.84394506866417%"),
    minWidth: wp("24.84394506866417%"),
    height: hp("94.26229508196722%"),
    minHeight: hp("94.26229508196722%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.980024968789003%"),
    top: hp("5.601092896174862%")
  },
  View_107_9949: {
    width: wp("24.84394506866417%"),
    minWidth: wp("24.84394506866417%"),
    height: hp("94.26229508196722%"),
    minHeight: hp("94.26229508196722%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_107_9950: {
    width: wp("15.85518102372035%"),
    minWidth: wp("15.85518102372035%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_107_9950: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_107_9951: {
    width: wp("16.978776529338326%"),
    minWidth: wp("16.978776529338326%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.10928961748634%"),
    justifyContent: "center"
  },
  Text_107_9951: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_107_9952: {
    width: wp("22.596754057428214%"),
    minWidth: wp("22.596754057428214%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.21857923497268%"),
    justifyContent: "center"
  },
  Text_107_9952: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_107_9963: {
    width: wp("24.84394506866417%"),
    minWidth: wp("24.84394506866417%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30.32786885245902%"),
    justifyContent: "center"
  },
  Text_107_9963: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_107_9964: {
    width: wp("15.85518102372035%"),
    minWidth: wp("15.85518102372035%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40.43715846994536%"),
    justifyContent: "center"
  },
  Text_107_9964: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_118_30034: {
    width: wp("14.731585518102372%"),
    minWidth: wp("14.731585518102372%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("50.5464480874317%"),
    justifyContent: "center"
  },
  Text_118_30034: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_118_30035: {
    width: wp("15.85518102372035%"),
    minWidth: wp("15.85518102372035%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60.65573770491804%"),
    justifyContent: "center"
  },
  Text_118_30035: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_118_30036: {
    width: wp("21.473158551810236%"),
    minWidth: wp("21.473158551810236%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("70.76502732240438%"),
    justifyContent: "center"
  },
  Text_118_30036: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_118_30037: {
    width: wp("23.72034956304619%"),
    minWidth: wp("23.72034956304619%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("80.8743169398907%"),
    justifyContent: "center"
  },
  Text_118_30037: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_118_30038: {
    width: wp("14.731585518102372%"),
    minWidth: wp("14.731585518102372%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("90.98360655737706%"),
    justifyContent: "center"
  },
  Text_118_30038: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_107_2356: {
    width: wp("11.985018726591761%"),
    minWidth: wp("11.985018726591761%"),
    height: hp("105.46448087431695%"),
    minHeight: hp("105.46448087431695%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_107_926: {
    width: wp("3.9950062421972534%"),
    minWidth: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.995006242197249%"),
    top: hp("4.371584699453557%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054556%"),
    justifyContent: "center"
  },
  Text_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_9969: {
    width: wp("3.9950062421972534%"),
    minWidth: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.995006242197249%"),
    top: hp("14.48087431693989%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_9970: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_107_9973: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.551912568306008%"),
    justifyContent: "flex-start"
  },
  Text_107_9973: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_107_9972: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_107_9972: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_107_2354: {
    width: wp("3.9950062421972534%"),
    minWidth: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.995006242197249%"),
    top: hp("24.59016393442623%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_2352: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(173, 179, 188, 1)"
  },
  ImageBackground_107_2355: {
    flexGrow: 1,
    width: wp("2.3720349563046192%"),
    height: hp("2.2267758520574517%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.811485642946316%"),
    top: hp("1.7759562841530112%")
  },
  View_107_3290: {
    width: wp("3.9950062421972534%"),
    minWidth: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.995006242197249%"),
    top: hp("34.69945355191257%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_3291: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(173, 179, 188, 1)"
  },
  ImageBackground_107_3293: {
    flexGrow: 1,
    width: wp("2.3720349563046192%"),
    height: hp("2.2267758520574517%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.811485642946316%"),
    top: hp("1.775956284152997%")
  },
  View_107_2751: {
    width: wp("3.9950062421972534%"),
    minWidth: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.995006242197249%"),
    top: hp("44.80874316939891%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_2752: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(173, 179, 188, 1)"
  },
  ImageBackground_107_2754: {
    flexGrow: 1,
    width: wp("2.871410736579276%"),
    height: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.49937578027465435%"),
    top: hp("1.6393442622950687%")
  },
  View_107_5013: {
    width: wp("3.9950062421972534%"),
    minWidth: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.995006242197249%"),
    top: hp("54.918032786885234%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_10874: {
    width: wp("3.9950062421972534%"),
    minWidth: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.995006242197249%"),
    top: hp("65.02732240437157%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_10875: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_107_10876: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683060224%"),
    justifyContent: "flex-start"
  },
  Text_107_10876: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_107_10877: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_107_10877: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_107_5016: {
    width: wp("3.9950062421972534%"),
    minWidth: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.995006242197249%"),
    top: hp("75.13661202185791%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_5017: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(71, 71, 71, 1)"
  },
  ImageBackground_107_5018: {
    flexGrow: 1,
    width: wp("2.3720349563046192%"),
    height: hp("2.2267758520574517%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.811485642946316%"),
    top: hp("1.7759562841530112%")
  },
  View_107_5019: {
    width: wp("3.9950062421972534%"),
    minWidth: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.995006242197249%"),
    top: hp("85.24590163934427%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_5020: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(71, 71, 71, 1)"
  },
  ImageBackground_107_5021: {
    flexGrow: 1,
    width: wp("2.3720349563046192%"),
    height: hp("2.2267758520574517%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.811485642946316%"),
    top: hp("1.7759562841530112%")
  },
  View_107_5022: {
    width: wp("3.9950062421972534%"),
    minWidth: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.995006242197249%"),
    top: hp("95.3551912568306%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_5023: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(71, 71, 71, 1)"
  },
  ImageBackground_107_5024: {
    flexGrow: 1,
    width: wp("2.871410736579276%"),
    height: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.49937578027465435%"),
    top: hp("1.639344262295083%")
  },
  View_107_9901: {
    width: wp("84.01997503121099%"),
    minWidth: wp("84.01997503121099%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.990012484394507%"),
    top: hp("168.71584699453553%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_9901_10_2311: {
    flexGrow: 1,
    width: wp("13.982521847690387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I107_9901_10_2311: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I107_9901_10_2312: {
    flexGrow: 1,
    width: wp("84.01997503121099%"),
    height: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.333333333333314%"),
    backgroundColor: "rgba(235, 235, 235, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  View_5_293: {
    width: wp("78.02746566791511%"),
    minWidth: wp("78.02746566791511%"),
    height: hp("276.77595628415304%"),
    minHeight: hp("276.77595628415304%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.990012484394507%"),
    top: hp("185.92896174863387%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_71_8841: {
    width: wp("27.340823970037455%"),
    minWidth: wp("27.340823970037455%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_71_8841: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_71_8840: {
    width: wp("78.02746566791511%"),
    minWidth: wp("78.02746566791511%"),
    height: hp("269.1256830601093%"),
    minHeight: hp("269.1256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.65027322404373%")
  },
  View_5_294: {
    width: wp("19.22596754057428%"),
    minWidth: wp("19.22596754057428%"),
    height: hp("223.9071038251366%"),
    minHeight: hp("223.9071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.80149812734083%"),
    top: hp("22.677595628415276%")
  },
  View_5_295: {
    width: wp("19.22596754057428%"),
    minWidth: wp("19.22596754057428%"),
    height: hp("223.9071038251366%"),
    minHeight: hp("223.9071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_296: {
    width: wp("19.22596754057428%"),
    minWidth: wp("19.22596754057428%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_5_296: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_298: {
    width: wp("19.22596754057428%"),
    minWidth: wp("19.22596754057428%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44.12568306010928%"),
    justifyContent: "center"
  },
  Text_5_298: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_107_11197: {
    width: wp("16.978776529338326%"),
    minWidth: wp("16.978776529338326%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("88.25136612021862%"),
    justifyContent: "center"
  },
  Text_107_11197: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_300: {
    width: wp("18.102372034956304%"),
    minWidth: wp("18.102372034956304%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("132.3770491803279%"),
    justifyContent: "center"
  },
  Text_5_300: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_302: {
    width: wp("18.102372034956304%"),
    minWidth: wp("18.102372034956304%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("176.50273224043718%"),
    justifyContent: "center"
  },
  Text_5_302: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_107_11299: {
    width: wp("15.85518102372035%"),
    minWidth: wp("15.85518102372035%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("220.62841530054646%"),
    justifyContent: "center"
  },
  Text_107_11299: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_107_4489: {
    width: wp("54.80649188514357%"),
    minWidth: wp("54.80649188514357%"),
    height: hp("269.1256830601093%"),
    minHeight: hp("269.1256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_107_969: {
    width: wp("46.81647940074906%"),
    minWidth: wp("46.81647940074906%"),
    height: hp("39.75409836065574%"),
    minHeight: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9950062421972543%"),
    top: hp("4.371584699453564%"),
    backgroundColor: "rgba(209, 213, 219, 0.8999999761581421)"
  },
  View_107_927: {
    flexGrow: 1,
    width: wp("46.81647940074906%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.109289617486326%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_927_5_3093: {
    flexGrow: 1,
    width: wp("16.729088639201%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.106117353308363%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_107_968: {
    flexGrow: 1,
    width: wp("45.56803995006242%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6242197253433197%"),
    top: hp("1.0928961748633697%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_938: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_938_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_938_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_938_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_939: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.619225967540576%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_939_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_939_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_939_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_944: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.238451935081148%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_944_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_944_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_944_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_947: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.85767790262172%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_947_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_947_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_947_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_950: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.476903870162296%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_950_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_950_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_950_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_953: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.096129837702872%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_953_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_953_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_953_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_956: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.715355805243444%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_956_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_956_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_956_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_959: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.33458177278402%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_959_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_959_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_959_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_962: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.95380774032459%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_962_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_962_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_962_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_965: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.573033707865164%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_965_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_965_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_965_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_1269: {
    flexGrow: 1,
    width: wp("40.94881398252185%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9962546816479403%"),
    top: hp("8.469945355191214%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_1270: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_1270_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_1270_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054982%"),
    justifyContent: "center"
  },
  Text_I107_1270_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_1271: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.619225967540572%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_1271_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_1271_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054982%"),
    justifyContent: "center"
  },
  Text_I107_1271_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_1272: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.238451935081148%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_1272_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_1272_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054982%"),
    justifyContent: "center"
  },
  Text_I107_1272_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_1273: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.85767790262172%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_1273_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_1273_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054982%"),
    justifyContent: "center"
  },
  Text_I107_1273_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_1274: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.476903870162296%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_1274_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_1274_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054982%"),
    justifyContent: "center"
  },
  Text_I107_1274_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_1275: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.09612983770287%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_1275_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_1275_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054982%"),
    justifyContent: "center"
  },
  Text_I107_1275_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_1276: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.71535580524344%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_1276_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_1276_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054982%"),
    justifyContent: "center"
  },
  Text_I107_1276_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_1277: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.33458177278402%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_1277_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_1277_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054982%"),
    justifyContent: "center"
  },
  Text_I107_1277_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_1278: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.9538077403246%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_1278_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_1278_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054982%"),
    justifyContent: "center"
  },
  Text_I107_1278_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_1522: {
    flexGrow: 1,
    width: wp("45.69288389513109%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6242197253433197%"),
    top: hp("16.120218579234944%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_1523: {
    width: wp("5.2434456928838955%"),
    minWidth: wp("5.2434456928838955%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_1523_107_2352: {
    flexGrow: 1,
    width: wp("5.2434456928838955%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(173, 179, 188, 1)"
  },
  ImageBackground_I107_1523_107_2355: {
    flexGrow: 1,
    width: wp("2.3720349563046192%"),
    height: hp("2.2267758520574517%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4357053682896392%"),
    top: hp("1.7759562841530112%")
  },
  View_107_2722: {
    flexGrow: 1,
    width: wp("31.7103620474407%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.991260923845193%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_1524: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_1524_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_1524_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054982%"),
    justifyContent: "center"
  },
  Text_I107_1524_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_1525: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.619225967540576%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_1525_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_1525_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054982%"),
    justifyContent: "center"
  },
  Text_I107_1525_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_1526: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.238451935081148%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_1526_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_1526_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054982%"),
    justifyContent: "center"
  },
  Text_I107_1526_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_1527: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.857677902621724%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_1527_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_1527_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054982%"),
    justifyContent: "center"
  },
  Text_I107_1527_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_1528: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.476903870162296%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_1528_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_1528_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054982%"),
    justifyContent: "center"
  },
  Text_I107_1528_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_1529: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.09612983770287%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_1529_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_1529_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054982%"),
    justifyContent: "center"
  },
  Text_I107_1529_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_1530: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.715355805243448%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_1530_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_1530_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054982%"),
    justifyContent: "center"
  },
  Text_I107_1530_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_2422: {
    width: wp("5.2434456928838955%"),
    minWidth: wp("5.2434456928838955%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.449438202247194%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_2422_107_2752: {
    flexGrow: 1,
    width: wp("5.2434456928838955%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(173, 179, 188, 1)"
  },
  ImageBackground_I107_2422_107_2754: {
    flexGrow: 1,
    width: wp("2.871410736579276%"),
    height: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1235955056179776%"),
    top: hp("1.6393442622951113%")
  },
  View_107_2929: {
    flexGrow: 1,
    width: wp("45.56803995006242%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6242197253433197%"),
    top: hp("23.770491803278674%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_2760: {
    width: wp("10.674157303370785%"),
    minWidth: wp("10.674157303370785%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_2760_107_925: {
    flexGrow: 1,
    width: wp("10.674157303370785%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(173, 179, 188, 1)"
  },
  View_I107_2760_107_911: {
    flexGrow: 1,
    width: wp("10.736579275905118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "center"
  },
  Text_I107_2760_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_107_2764: {
    width: wp("22.72159800249688%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.423220973782772%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_2764_107_925: {
    flexGrow: 1,
    width: wp("22.72159800249688%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_2764_107_911: {
    flexGrow: 1,
    width: wp("22.72159800249688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "center"
  },
  Text_I107_2764_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_107_2941: {
    width: wp("10.674157303370785%"),
    minWidth: wp("10.674157303370785%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.89388264669164%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_2941_107_925: {
    flexGrow: 1,
    width: wp("10.674157303370785%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(173, 179, 188, 1)"
  },
  View_I107_2941_107_911: {
    flexGrow: 1,
    width: wp("10.736579275905118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371546%"),
    justifyContent: "center"
  },
  Text_I107_2941_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  ImageBackground_107_4174: {
    flexGrow: 1,
    width: wp("40.823970037453186%"),
    height: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9962546816479403%"),
    top: hp("31.83060109289616%")
  },
  View_107_4486: {
    width: wp("46.81647940074906%"),
    minWidth: wp("46.81647940074906%"),
    height: hp("39.75409836065574%"),
    minHeight: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9950062421972543%"),
    top: hp("48.49726775956282%"),
    backgroundColor: "rgba(209, 213, 219, 0.8999999761581421)"
  },
  View_107_4383: {
    flexGrow: 1,
    width: wp("46.81647940074906%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.10928961748638%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_4383_5_3093: {
    flexGrow: 1,
    width: wp("16.729088639201%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.106117353308363%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_107_4384: {
    flexGrow: 1,
    width: wp("45.56803995006242%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6242197253433197%"),
    top: hp("1.092896174863398%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_4385: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_4385_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_4385_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_4385_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_4386: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.619225967540576%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_4386_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_4386_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_4386_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_4387: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.238451935081148%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_4387_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_4387_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_4387_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_4388: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.85767790262172%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_4388_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_4388_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_4388_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_4389: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.476903870162296%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_4389_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_4389_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_4389_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_4390: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.096129837702872%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_4390_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_4390_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_4390_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_4391: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.715355805243444%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_4391_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_4391_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_4391_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_4392: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.33458177278402%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_4392_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_4392_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_4392_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_4393: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.95380774032459%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_4393_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_4393_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_4393_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_4394: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.573033707865164%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_4394_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_4394_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_4394_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_4395: {
    flexGrow: 1,
    width: wp("40.94881398252185%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9962546816479403%"),
    top: hp("8.469945355191271%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_4396: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_4396_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_4396_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%"),
    justifyContent: "flex-end"
  },
  Text_I107_4396_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_4397: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.619225967540572%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_4397_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_4397_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%"),
    justifyContent: "flex-end"
  },
  Text_I107_4397_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_4398: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.238451935081148%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_4398_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_4398_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%"),
    justifyContent: "flex-end"
  },
  Text_I107_4398_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_4399: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.85767790262172%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_4399_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_4399_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%"),
    justifyContent: "flex-end"
  },
  Text_I107_4399_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_4400: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.476903870162296%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_4400_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_4400_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%"),
    justifyContent: "flex-end"
  },
  Text_I107_4400_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_4401: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.09612983770287%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_4401_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_4401_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%"),
    justifyContent: "flex-end"
  },
  Text_I107_4401_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_4402: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.71535580524344%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_4402_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_4402_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%"),
    justifyContent: "flex-end"
  },
  Text_I107_4402_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_4403: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.33458177278402%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_4403_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_4403_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%"),
    justifyContent: "flex-end"
  },
  Text_I107_4403_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_4404: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.9538077403246%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_4404_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_4404_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%"),
    justifyContent: "flex-end"
  },
  Text_I107_4404_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_4405: {
    flexGrow: 1,
    width: wp("45.69288389513109%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6242197253433197%"),
    top: hp("16.120218579235%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_4406: {
    width: wp("5.2434456928838955%"),
    minWidth: wp("5.2434456928838955%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_4406_107_3291: {
    flexGrow: 1,
    width: wp("5.2434456928838955%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(173, 179, 188, 1)"
  },
  ImageBackground_I107_4406_107_3293: {
    flexGrow: 1,
    width: wp("2.3720349563046192%"),
    height: hp("2.2267758520574517%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4357053682896392%"),
    top: hp("1.7759562841529828%")
  },
  View_107_4407: {
    flexGrow: 1,
    width: wp("31.7103620474407%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.991260923845193%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_4408: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_4408_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_4408_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_4408_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_4409: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.619225967540576%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_4409_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_4409_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_4409_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_4410: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.238451935081148%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_4410_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_4410_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_4410_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_4411: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.857677902621724%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_4411_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_4411_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_4411_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_4412: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.476903870162296%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_4412_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_4412_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_4412_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_4413: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.09612983770287%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_4413_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_4413_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_4413_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_4414: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.715355805243448%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_4414_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_4414_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_4414_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_4415: {
    width: wp("5.2434456928838955%"),
    minWidth: wp("5.2434456928838955%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.449438202247194%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_4415_107_2752: {
    flexGrow: 1,
    width: wp("5.2434456928838955%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(173, 179, 188, 1)"
  },
  ImageBackground_I107_4415_107_2754: {
    flexGrow: 1,
    width: wp("2.871410736579276%"),
    height: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1235955056179776%"),
    top: hp("1.639344262295083%")
  },
  View_107_4416: {
    flexGrow: 1,
    width: wp("45.56803995006242%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6242197253433197%"),
    top: hp("23.770491803278702%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_4417: {
    width: wp("10.674157303370785%"),
    minWidth: wp("10.674157303370785%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_4417_107_925: {
    flexGrow: 1,
    width: wp("10.674157303370785%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(173, 179, 188, 1)"
  },
  View_I107_4417_107_911: {
    flexGrow: 1,
    width: wp("10.736579275905118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "center"
  },
  Text_I107_4417_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_107_4418: {
    width: wp("22.72159800249688%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.423220973782772%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_4418_107_925: {
    flexGrow: 1,
    width: wp("22.72159800249688%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_4418_107_911: {
    flexGrow: 1,
    width: wp("22.72159800249688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "center"
  },
  Text_I107_4418_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_107_4419: {
    width: wp("10.674157303370785%"),
    minWidth: wp("10.674157303370785%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.89388264669164%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_4419_107_925: {
    flexGrow: 1,
    width: wp("10.674157303370785%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(173, 179, 188, 1)"
  },
  View_I107_4419_107_911: {
    flexGrow: 1,
    width: wp("10.736579275905118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "center"
  },
  Text_I107_4419_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  ImageBackground_107_4420: {
    flexGrow: 1,
    width: wp("40.823970037453186%"),
    height: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9962546816479403%"),
    top: hp("31.830601092896217%")
  },
  View_107_11056: {
    width: wp("46.81647940074906%"),
    minWidth: wp("46.81647940074906%"),
    height: hp("39.75409836065574%"),
    minHeight: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9950062421972543%"),
    top: hp("92.62295081967213%"),
    backgroundColor: "rgba(209, 213, 219, 0.8999999761581421)"
  },
  View_107_11057: {
    flexGrow: 1,
    width: wp("46.81647940074906%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.109289617486354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11057_5_3093: {
    flexGrow: 1,
    width: wp("16.729088639201%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.106117353308363%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_107_11058: {
    flexGrow: 1,
    width: wp("45.56803995006242%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6242197253433197%"),
    top: hp("1.0928961748633697%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_11059: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11059_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_11059_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_11059_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11060: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.619225967540576%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11060_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_11060_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_11060_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11061: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.238451935081148%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11061_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_11061_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_11061_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11062: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.85767790262172%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11062_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_11062_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_11062_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11063: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.476903870162296%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11063_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_11063_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_11063_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11064: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.096129837702872%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11064_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_11064_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_11064_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11065: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.715355805243444%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11065_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_11065_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_11065_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11066: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.33458177278402%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11066_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_11066_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_11066_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11067: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.95380774032459%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11067_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_11067_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_11067_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11068: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.573033707865164%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11068_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_11068_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_11068_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11166: {
    flexGrow: 1,
    width: wp("45.56803995006242%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6242197253433197%"),
    top: hp("8.743169398907071%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_11167: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11167_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_11167_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530055266%"),
    justifyContent: "center"
  },
  Text_I107_11167_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11168: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.619225967540576%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11168_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_11168_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530055266%"),
    justifyContent: "center"
  },
  Text_I107_11168_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11169: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.238451935081148%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11169_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_11169_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530055266%"),
    justifyContent: "center"
  },
  Text_I107_11169_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11170: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.85767790262172%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11170_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_11170_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530055266%"),
    justifyContent: "center"
  },
  Text_I107_11170_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11171: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.476903870162296%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11171_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_11171_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530055266%"),
    justifyContent: "center"
  },
  Text_I107_11171_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11172: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.096129837702872%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11172_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_11172_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530055266%"),
    justifyContent: "center"
  },
  Text_I107_11172_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11173: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.715355805243444%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11173_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_11173_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530055266%"),
    justifyContent: "center"
  },
  Text_I107_11173_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11174: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.33458177278402%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11174_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_11174_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530055266%"),
    justifyContent: "center"
  },
  Text_I107_11174_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11175: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.95380774032459%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11175_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_11175_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530055266%"),
    justifyContent: "center"
  },
  Text_I107_11175_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11176: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.573033707865164%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11176_107_925: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_11176_107_911: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530055266%"),
    justifyContent: "center"
  },
  Text_I107_11176_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11079: {
    flexGrow: 1,
    width: wp("45.56803995006242%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6242197253433197%"),
    top: hp("16.120218579234972%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_11080: {
    width: wp("5.2434456928838955%"),
    minWidth: wp("5.2434456928838955%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11080_107_925: {
    flexGrow: 1,
    width: wp("5.2434456928838955%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(173, 179, 188, 1)"
  },
  View_I107_11080_107_911: {
    flexGrow: 1,
    width: wp("5.2434456928838955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.639344262295083%"),
    justifyContent: "center"
  },
  Text_I107_11080_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_107_11081: {
    width: wp("31.585518102372035%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.991260923845193%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_11082: {
    width: wp("5.8177276497030075%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11082_107_925: {
    flexGrow: 1,
    width: wp("5.8177276497030075%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_11082_107_911: {
    flexGrow: 1,
    width: wp("5.867665418227216%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_11082_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11083: {
    width: wp("5.8177276497030075%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.441959757334587%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11083_107_925: {
    flexGrow: 1,
    width: wp("5.8177276497030075%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_11083_107_911: {
    flexGrow: 1,
    width: wp("5.867665418227216%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_11083_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11084: {
    width: wp("5.8177276497030075%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.883919514669167%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11084_107_925: {
    flexGrow: 1,
    width: wp("5.8177276497030075%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_11084_107_911: {
    flexGrow: 1,
    width: wp("5.867665418227216%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_11084_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11085: {
    width: wp("5.8177276497030075%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.32581831304619%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11085_107_925: {
    flexGrow: 1,
    width: wp("5.8177276497030075%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_11085_107_911: {
    flexGrow: 1,
    width: wp("5.867665418227216%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_11085_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11086: {
    width: wp("5.8177276497030075%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.76777807038077%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11086_107_925: {
    flexGrow: 1,
    width: wp("5.8177276497030075%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_11086_107_911: {
    flexGrow: 1,
    width: wp("5.867665418227216%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_11086_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11089: {
    width: wp("5.2434456928838955%"),
    minWidth: wp("5.2434456928838955%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.32459425717852%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11089_107_2752: {
    flexGrow: 1,
    width: wp("5.2434456928838955%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(173, 179, 188, 1)"
  },
  ImageBackground_I107_11089_107_2754: {
    flexGrow: 1,
    width: wp("2.871410736579276%"),
    height: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1235955056179847%"),
    top: hp("1.639344262295083%")
  },
  View_107_11090: {
    flexGrow: 1,
    width: wp("45.56803995006242%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6242197253433197%"),
    top: hp("23.770491803278674%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_11091: {
    width: wp("10.674157303370785%"),
    minWidth: wp("10.674157303370785%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11091_107_925: {
    flexGrow: 1,
    width: wp("10.674157303370785%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(173, 179, 188, 1)"
  },
  View_I107_11091_107_911: {
    flexGrow: 1,
    width: wp("10.736579275905118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "center"
  },
  Text_I107_11091_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_107_11092: {
    width: wp("22.72159800249688%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.423220973782772%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11092_107_925: {
    flexGrow: 1,
    width: wp("22.72159800249688%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_11092_107_911: {
    flexGrow: 1,
    width: wp("22.72159800249688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "center"
  },
  Text_I107_11092_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_107_11093: {
    width: wp("10.674157303370785%"),
    minWidth: wp("10.674157303370785%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.89388264669164%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11093_107_925: {
    flexGrow: 1,
    width: wp("10.674157303370785%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(173, 179, 188, 1)"
  },
  View_I107_11093_107_911: {
    flexGrow: 1,
    width: wp("10.736579275905118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "center"
  },
  Text_I107_11093_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  ImageBackground_107_11094: {
    flexGrow: 1,
    width: wp("40.823970037453186%"),
    height: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9962546816479403%"),
    top: hp("31.830601092896188%")
  },
  View_107_6445: {
    width: wp("46.81647940074906%"),
    minWidth: wp("46.81647940074906%"),
    height: hp("39.75409836065574%"),
    minHeight: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9950062421972543%"),
    top: hp("136.7486338797814%"),
    backgroundColor: "rgba(21, 21, 21, 0.8500000238418579)"
  },
  View_107_6446: {
    flexGrow: 1,
    width: wp("46.81647940074906%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.109289617486354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6446_36_10050: {
    flexGrow: 1,
    width: wp("16.729088639201%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.106117353308363%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_107_6447: {
    flexGrow: 1,
    width: wp("45.56803995006242%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6242197253433197%"),
    top: hp("1.0928961748633697%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_6448: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6448_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6448_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_6448_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_6449: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.619225967540576%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6449_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6449_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_6449_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_6450: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.238451935081148%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6450_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6450_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_6450_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_6451: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.85767790262172%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6451_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6451_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_6451_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_6452: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.476903870162296%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6452_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6452_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_6452_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_6453: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.096129837702872%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6453_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6453_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_6453_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_6454: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.715355805243444%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6454_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6454_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_6454_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_6455: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.33458177278402%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6455_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6455_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_6455_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_6456: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.95380774032459%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6456_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6456_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_6456_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_6457: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.573033707865164%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6457_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6457_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_6457_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_6458: {
    flexGrow: 1,
    width: wp("40.94881398252185%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9962546816479403%"),
    top: hp("8.469945355191271%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_6459: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6459_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6459_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_6459_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_6460: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.619225967540572%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6460_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6460_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_6460_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_6461: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.238451935081148%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6461_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6461_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_6461_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_6462: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.85767790262172%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6462_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6462_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_6462_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_6463: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.476903870162296%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6463_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6463_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_6463_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_6464: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.09612983770287%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6464_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6464_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_6464_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_6465: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.71535580524344%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6465_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6465_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_6465_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_6466: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.33458177278402%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6466_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6466_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_6466_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_6467: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.9538077403246%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6467_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6467_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_6467_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_6468: {
    flexGrow: 1,
    width: wp("45.69288389513109%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6242197253433197%"),
    top: hp("16.120218579234972%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_6469: {
    width: wp("5.2434456928838955%"),
    minWidth: wp("5.2434456928838955%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6469_107_5017: {
    flexGrow: 1,
    width: wp("5.2434456928838955%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(71, 71, 71, 1)"
  },
  ImageBackground_I107_6469_107_5018: {
    flexGrow: 1,
    width: wp("2.3720349563046192%"),
    height: hp("2.2267758520574517%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4357053682896392%"),
    top: hp("1.7759562841529828%")
  },
  View_107_6470: {
    flexGrow: 1,
    width: wp("31.7103620474407%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.991260923845193%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_6471: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6471_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6471_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_6471_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_6472: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.619225967540576%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6472_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6472_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_6472_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_6473: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.238451935081148%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6473_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6473_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_6473_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_6474: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.857677902621724%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6474_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6474_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_6474_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_6475: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.476903870162296%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6475_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6475_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_6475_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_6476: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.09612983770287%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6476_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6476_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_6476_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_6477: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.715355805243448%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6477_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6477_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_6477_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_6478: {
    width: wp("5.2434456928838955%"),
    minWidth: wp("5.2434456928838955%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.449438202247194%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6478_107_5023: {
    flexGrow: 1,
    width: wp("5.2434456928838955%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(71, 71, 71, 1)"
  },
  ImageBackground_I107_6478_107_5024: {
    flexGrow: 1,
    width: wp("2.871410736579276%"),
    height: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1235955056179776%"),
    top: hp("1.639344262295083%")
  },
  View_107_6479: {
    flexGrow: 1,
    width: wp("45.56803995006242%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6242197253433197%"),
    top: hp("23.770491803278674%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_6480: {
    width: wp("10.674157303370785%"),
    minWidth: wp("10.674157303370785%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6480_107_5014: {
    flexGrow: 1,
    width: wp("10.674157303370785%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(71, 71, 71, 1)"
  },
  View_I107_6480_107_5015: {
    flexGrow: 1,
    width: wp("10.736579275905118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "center"
  },
  Text_I107_6480_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_107_6481: {
    width: wp("22.72159800249688%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.423220973782772%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6481_107_5014: {
    flexGrow: 1,
    width: wp("22.72159800249688%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6481_107_5015: {
    flexGrow: 1,
    width: wp("22.72159800249688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "center"
  },
  Text_I107_6481_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_107_6482: {
    width: wp("10.674157303370785%"),
    minWidth: wp("10.674157303370785%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.89388264669164%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6482_107_5014: {
    flexGrow: 1,
    width: wp("10.674157303370785%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(71, 71, 71, 1)"
  },
  View_I107_6482_107_5015: {
    flexGrow: 1,
    width: wp("10.736579275905118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "center"
  },
  Text_I107_6482_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  ImageBackground_107_6483: {
    flexGrow: 1,
    width: wp("40.823970037453186%"),
    height: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9962546816479403%"),
    top: hp("31.830601092896188%")
  },
  View_107_6274: {
    width: wp("46.81647940074906%"),
    minWidth: wp("46.81647940074906%"),
    height: hp("39.75409836065574%"),
    minHeight: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9950062421972543%"),
    top: hp("180.87431693989075%"),
    backgroundColor: "rgba(21, 21, 21, 0.8500000238418579)"
  },
  View_107_6275: {
    flexGrow: 1,
    width: wp("46.81647940074906%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.1092896174863%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6275_36_10050: {
    flexGrow: 1,
    width: wp("16.729088639201%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.106117353308363%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_107_6276: {
    flexGrow: 1,
    width: wp("45.56803995006242%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6242197253433197%"),
    top: hp("1.0928961748633128%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_6277: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6277_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6277_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_6277_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_6278: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.619225967540576%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6278_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6278_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_6278_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_6279: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.238451935081148%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6279_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6279_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_6279_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_6280: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.85767790262172%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6280_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6280_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_6280_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_6281: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.476903870162296%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6281_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6281_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_6281_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_6282: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.096129837702872%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6282_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6282_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_6282_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_6283: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.715355805243444%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6283_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6283_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_6283_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_6284: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.33458177278402%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6284_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6284_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_6284_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_6285: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.95380774032459%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6285_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6285_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_6285_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_6286: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.573033707865164%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6286_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6286_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_6286_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_6287: {
    flexGrow: 1,
    width: wp("40.94881398252185%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9962546816479403%"),
    top: hp("8.469945355191214%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_6288: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6288_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6288_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_6288_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_6289: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.619225967540572%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6289_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6289_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_6289_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_6290: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.238451935081148%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6290_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6290_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_6290_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_6291: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.85767790262172%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6291_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6291_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_6291_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_6292: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.476903870162296%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6292_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6292_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_6292_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_6293: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.09612983770287%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6293_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6293_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_6293_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_6294: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.71535580524344%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6294_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6294_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_6294_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_6295: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.33458177278402%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6295_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6295_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_6295_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_6296: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.9538077403246%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6296_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6296_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_6296_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_6297: {
    flexGrow: 1,
    width: wp("45.69288389513109%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6242197253433197%"),
    top: hp("16.120218579234916%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_6298: {
    width: wp("5.2434456928838955%"),
    minWidth: wp("5.2434456928838955%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6298_107_5020: {
    flexGrow: 1,
    width: wp("5.2434456928838955%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(71, 71, 71, 1)"
  },
  ImageBackground_I107_6298_107_5021: {
    flexGrow: 1,
    width: wp("2.3720349563046192%"),
    height: hp("2.2267758520574517%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4357053682896392%"),
    top: hp("1.7759562841530396%")
  },
  View_107_6299: {
    flexGrow: 1,
    width: wp("31.7103620474407%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.991260923845193%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_6300: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6300_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6300_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_6300_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_6301: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.619225967540576%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6301_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6301_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_6301_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_6302: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.238451935081148%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6302_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6302_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_6302_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_6303: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.857677902621724%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6303_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6303_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_6303_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_6304: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.476903870162296%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6304_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6304_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_6304_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_6305: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.09612983770287%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6305_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6305_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_6305_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_6306: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.715355805243448%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6306_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6306_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-end"
  },
  Text_I107_6306_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.36399999260902405,
    textTransform: "none"
  },
  View_107_6307: {
    width: wp("5.2434456928838955%"),
    minWidth: wp("5.2434456928838955%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.449438202247194%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6307_107_5023: {
    flexGrow: 1,
    width: wp("5.2434456928838955%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(71, 71, 71, 1)"
  },
  ImageBackground_I107_6307_107_5024: {
    flexGrow: 1,
    width: wp("2.871410736579276%"),
    height: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1235955056179776%"),
    top: hp("1.639344262295083%")
  },
  View_107_6308: {
    flexGrow: 1,
    width: wp("45.56803995006242%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6242197253433197%"),
    top: hp("23.770491803278617%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_6309: {
    width: wp("10.674157303370785%"),
    minWidth: wp("10.674157303370785%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6309_107_5014: {
    flexGrow: 1,
    width: wp("10.674157303370785%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(71, 71, 71, 1)"
  },
  View_I107_6309_107_5015: {
    flexGrow: 1,
    width: wp("10.736579275905118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "center"
  },
  Text_I107_6309_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_107_6310: {
    width: wp("22.72159800249688%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.423220973782772%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6310_107_5014: {
    flexGrow: 1,
    width: wp("22.72159800249688%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_6310_107_5015: {
    flexGrow: 1,
    width: wp("22.72159800249688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "center"
  },
  Text_I107_6310_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_107_6311: {
    width: wp("10.674157303370785%"),
    minWidth: wp("10.674157303370785%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.89388264669164%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_6311_107_5014: {
    flexGrow: 1,
    width: wp("10.674157303370785%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(71, 71, 71, 1)"
  },
  View_I107_6311_107_5015: {
    flexGrow: 1,
    width: wp("10.736579275905118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "center"
  },
  Text_I107_6311_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  ImageBackground_107_16358: {
    flexGrow: 1,
    width: wp("40.823970037453186%"),
    height: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9962546816479403%"),
    top: hp("31.830601092896188%")
  },
  View_107_11198: {
    width: wp("46.81647940074906%"),
    minWidth: wp("46.81647940074906%"),
    height: hp("39.75409836065574%"),
    minHeight: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9950062421972543%"),
    top: hp("224.99999999999997%"),
    backgroundColor: "rgba(21, 21, 21, 0.8500000238418579)"
  },
  View_107_11199: {
    flexGrow: 1,
    width: wp("46.81647940074906%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.109289617486354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11199_36_10050: {
    flexGrow: 1,
    width: wp("16.729088639201%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.106117353308363%"),
    top: hp("2.8688524590164093%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_107_11200: {
    flexGrow: 1,
    width: wp("45.56803995006242%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6242197253433197%"),
    top: hp("1.0928961748634265%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_11201: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11201_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_11201_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_11201_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11202: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.619225967540576%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11202_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_11202_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_11202_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11203: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.238451935081148%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11203_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_11203_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_11203_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11204: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.85767790262172%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11204_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_11204_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_11204_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11205: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.476903870162296%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11205_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_11205_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_11205_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11206: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.096129837702872%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11206_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_11206_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_11206_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11207: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.715355805243444%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11207_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_11207_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_11207_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11208: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.33458177278402%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11208_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_11208_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_11208_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11209: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.95380774032459%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11209_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_11209_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_11209_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11210: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.573033707865164%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11210_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_11210_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_11210_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11211: {
    flexGrow: 1,
    width: wp("45.56803995006242%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6242197253433197%"),
    top: hp("8.743169398907128%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_11212: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11212_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_11212_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054129%"),
    justifyContent: "center"
  },
  Text_I107_11212_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11213: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.619225967540576%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11213_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_11213_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054129%"),
    justifyContent: "center"
  },
  Text_I107_11213_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11214: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.238451935081148%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11214_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_11214_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054129%"),
    justifyContent: "center"
  },
  Text_I107_11214_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11215: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.85767790262172%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11215_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_11215_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054129%"),
    justifyContent: "center"
  },
  Text_I107_11215_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11216: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.476903870162296%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11216_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_11216_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054129%"),
    justifyContent: "center"
  },
  Text_I107_11216_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11217: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.096129837702872%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11217_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_11217_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054129%"),
    justifyContent: "center"
  },
  Text_I107_11217_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11218: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.715355805243444%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11218_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_11218_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054129%"),
    justifyContent: "center"
  },
  Text_I107_11218_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11219: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.33458177278402%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11219_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_11219_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054129%"),
    justifyContent: "center"
  },
  Text_I107_11219_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11220: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.95380774032459%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11220_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_11220_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054129%"),
    justifyContent: "center"
  },
  Text_I107_11220_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11221: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.573033707865164%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11221_107_5014: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_11221_107_5015: {
    flexGrow: 1,
    width: wp("3.9950062421972534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054129%"),
    justifyContent: "center"
  },
  Text_I107_11221_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11222: {
    flexGrow: 1,
    width: wp("45.56803995006242%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6242197253433197%"),
    top: hp("16.120218579234972%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_11223: {
    width: wp("5.2434456928838955%"),
    minWidth: wp("5.2434456928838955%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11223_107_5014: {
    flexGrow: 1,
    width: wp("5.2434456928838955%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(71, 71, 71, 1)"
  },
  View_I107_11223_107_5015: {
    flexGrow: 1,
    width: wp("5.2434456928838955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.639344262295083%"),
    justifyContent: "center"
  },
  Text_I107_11223_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_107_11224: {
    width: wp("31.585518102372035%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.991260923845193%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_11225: {
    width: wp("5.8177276497030075%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11225_107_5014: {
    flexGrow: 1,
    width: wp("5.8177276497030075%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_11225_107_5015: {
    flexGrow: 1,
    width: wp("5.867665418227216%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_11225_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11226: {
    width: wp("5.8177276497030075%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.441959757334587%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11226_107_5014: {
    flexGrow: 1,
    width: wp("5.8177276497030075%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_11226_107_5015: {
    flexGrow: 1,
    width: wp("5.867665418227216%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_11226_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11227: {
    width: wp("5.8177276497030075%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.883919514669167%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11227_107_5014: {
    flexGrow: 1,
    width: wp("5.8177276497030075%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_11227_107_5015: {
    flexGrow: 1,
    width: wp("5.867665418227216%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_11227_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11228: {
    width: wp("5.8177276497030075%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.32581831304619%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11228_107_5014: {
    flexGrow: 1,
    width: wp("5.8177276497030075%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_11228_107_5015: {
    flexGrow: 1,
    width: wp("5.867665418227216%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_11228_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11229: {
    width: wp("5.8177276497030075%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.76777807038077%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11229_107_5014: {
    flexGrow: 1,
    width: wp("5.8177276497030075%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_11229_107_5015: {
    flexGrow: 1,
    width: wp("5.867665418227216%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "center"
  },
  Text_I107_11229_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_107_11230: {
    width: wp("5.2434456928838955%"),
    minWidth: wp("5.2434456928838955%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.32459425717852%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11230_107_5023: {
    flexGrow: 1,
    width: wp("5.2434456928838955%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(71, 71, 71, 1)"
  },
  ImageBackground_I107_11230_107_5024: {
    flexGrow: 1,
    width: wp("2.871410736579276%"),
    height: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1235955056179847%"),
    top: hp("1.639344262295083%")
  },
  View_107_11231: {
    flexGrow: 1,
    width: wp("45.56803995006242%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6242197253433197%"),
    top: hp("23.77049180327873%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_11232: {
    width: wp("10.674157303370785%"),
    minWidth: wp("10.674157303370785%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11232_107_5014: {
    flexGrow: 1,
    width: wp("10.674157303370785%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(71, 71, 71, 1)"
  },
  View_I107_11232_107_5015: {
    flexGrow: 1,
    width: wp("10.736579275905118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "center"
  },
  Text_I107_11232_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_107_11233: {
    width: wp("22.72159800249688%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.423220973782772%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11233_107_5014: {
    flexGrow: 1,
    width: wp("22.72159800249688%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(107, 107, 107, 1)"
  },
  View_I107_11233_107_5015: {
    flexGrow: 1,
    width: wp("22.72159800249688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "center"
  },
  Text_I107_11233_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_107_11234: {
    width: wp("10.674157303370785%"),
    minWidth: wp("10.674157303370785%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.89388264669164%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_11234_107_5014: {
    flexGrow: 1,
    width: wp("10.674157303370785%"),
    height: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(71, 71, 71, 1)"
  },
  View_I107_11234_107_5015: {
    flexGrow: 1,
    width: wp("10.736579275905118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.502732240437183%"),
    justifyContent: "center"
  },
  Text_I107_11234_107_5015: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  ImageBackground_107_16361: {
    flexGrow: 1,
    width: wp("40.823970037453186%"),
    height: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9962546816479403%"),
    top: hp("31.830601092896245%")
  },
  View_107_10356: {
    width: wp("64.41947565543072%"),
    minWidth: wp("64.41947565543072%"),
    height: hp("100.27322404371584%"),
    minHeight: hp("100.27322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.990012484394507%"),
    top: hp("471.448087431694%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_10357: {
    width: wp("22.971285892634207%"),
    minWidth: wp("22.971285892634207%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_107_10357: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_107_10358: {
    width: wp("64.41947565543072%"),
    minWidth: wp("64.41947565543072%"),
    height: hp("92.62295081967213%"),
    minHeight: hp("92.62295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043758%")
  },
  View_107_10359: {
    width: wp("5.617977528089887%"),
    minWidth: wp("5.617977528089887%"),
    height: hp("47.404371584699454%"),
    minHeight: hp("47.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.80149812734083%"),
    top: hp("22.677595628415247%")
  },
  View_107_10360: {
    width: wp("5.617977528089887%"),
    minWidth: wp("5.617977528089887%"),
    height: hp("47.404371584699454%"),
    minHeight: hp("47.404371584699454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_107_10361: {
    width: wp("5.617977528089887%"),
    minWidth: wp("5.617977528089887%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_107_10361: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_107_10362: {
    width: wp("4.49438202247191%"),
    minWidth: wp("4.49438202247191%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44.125683060109225%"),
    justifyContent: "center"
  },
  Text_107_10362: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_107_10365: {
    width: wp("54.80649188514357%"),
    minWidth: wp("54.80649188514357%"),
    height: hp("92.62295081967213%"),
    minHeight: hp("92.62295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_107_10302: {
    width: wp("46.81647940074906%"),
    minWidth: wp("46.81647940074906%"),
    height: hp("39.75409836065574%"),
    minHeight: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9950062421972543%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(209, 213, 219, 0.8999999761581421)"
  },
  View_107_10141: {
    flexGrow: 1,
    width: wp("46.81647940074906%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.1092896174863%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_10141_5_3093: {
    flexGrow: 1,
    width: wp("16.729088639201%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.106117353308363%"),
    top: hp("2.8688524590163524%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_107_10142: {
    flexGrow: 1,
    width: wp("45.31835205992509%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7490636704119851%"),
    top: hp("0.8196721311475699%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_10143: {
    width: wp("14.68997055225158%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_10143_107_9970: {
    flexGrow: 1,
    width: wp("14.68997055225158%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_10143_107_9972: {
    flexGrow: 1,
    width: wp("14.731585518102372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437157998%"),
    justifyContent: "center"
  },
  Text_I107_10143_107_9972: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_107_10144: {
    width: wp("14.68997055225158%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.314170275436954%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_10144_107_9970: {
    flexGrow: 1,
    width: wp("14.68997055225158%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_10144_107_9973: {
    flexGrow: 1,
    width: wp("14.731585518102372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.890174073599667%"),
    justifyContent: "flex-start"
  },
  Text_I107_10144_107_9973: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I107_10144_107_9972: {
    flexGrow: 1,
    width: wp("14.731585518102372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437157998%"),
    justifyContent: "center"
  },
  Text_I107_10144_107_9972: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_107_10145: {
    width: wp("14.68997055225158%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.628401509831463%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_10145_107_9970: {
    flexGrow: 1,
    width: wp("14.68997055225158%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_10145_107_9973: {
    flexGrow: 1,
    width: wp("14.731585518102372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.890174073599667%"),
    justifyContent: "flex-start"
  },
  Text_I107_10145_107_9973: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I107_10145_107_9972: {
    flexGrow: 1,
    width: wp("14.731585518102372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437157998%"),
    justifyContent: "center"
  },
  Text_I107_10145_107_9972: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_107_10253: {
    flexGrow: 1,
    width: wp("45.31835205992509%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7490636704119851%"),
    top: hp("8.060109289617458%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_10254: {
    width: wp("14.68997055225158%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_10254_107_9970: {
    flexGrow: 1,
    width: wp("14.68997055225158%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_10254_107_9973: {
    flexGrow: 1,
    width: wp("14.731585518102372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8901740735997805%"),
    justifyContent: "flex-start"
  },
  Text_I107_10254_107_9973: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I107_10254_107_9972: {
    flexGrow: 1,
    width: wp("14.731585518102372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158566%"),
    justifyContent: "center"
  },
  Text_I107_10254_107_9972: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_107_10255: {
    width: wp("14.68997055225158%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.314170275436954%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_10255_107_9970: {
    flexGrow: 1,
    width: wp("14.68997055225158%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_10255_107_9973: {
    flexGrow: 1,
    width: wp("14.731585518102372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8901740735997805%"),
    justifyContent: "flex-start"
  },
  Text_I107_10255_107_9973: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I107_10255_107_9972: {
    flexGrow: 1,
    width: wp("14.731585518102372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158566%"),
    justifyContent: "center"
  },
  Text_I107_10255_107_9972: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_107_10256: {
    width: wp("14.68997055225158%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.628401509831463%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_10256_107_9970: {
    flexGrow: 1,
    width: wp("14.68997055225158%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_10256_107_9973: {
    flexGrow: 1,
    width: wp("14.731585518102372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8901740735997805%"),
    justifyContent: "flex-start"
  },
  Text_I107_10256_107_9973: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I107_10256_107_9972: {
    flexGrow: 1,
    width: wp("14.731585518102372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.2732240437158566%"),
    justifyContent: "center"
  },
  Text_I107_10256_107_9972: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_107_10266: {
    flexGrow: 1,
    width: wp("45.31835205992509%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7490636704119851%"),
    top: hp("15.300546448087402%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_10267: {
    width: wp("14.68997055225158%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_10267_107_9970: {
    flexGrow: 1,
    width: wp("14.68997055225158%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_10267_107_9973: {
    flexGrow: 1,
    width: wp("14.731585518102372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8901740735997805%"),
    justifyContent: "flex-start"
  },
  Text_I107_10267_107_9973: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I107_10267_107_9972: {
    flexGrow: 1,
    width: wp("14.731585518102372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.27322404371591347%"),
    justifyContent: "center"
  },
  Text_I107_10267_107_9972: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_107_10268: {
    width: wp("14.68997055225158%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.314170275436954%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_10268_107_9970: {
    flexGrow: 1,
    width: wp("14.68997055225158%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_10268_107_9973: {
    flexGrow: 1,
    width: wp("14.731585518102372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8901740735997805%"),
    justifyContent: "flex-start"
  },
  Text_I107_10268_107_9973: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I107_10268_107_9972: {
    flexGrow: 1,
    width: wp("14.731585518102372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.27322404371591347%"),
    justifyContent: "center"
  },
  Text_I107_10268_107_9972: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_107_10269: {
    width: wp("14.68997055225158%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.628401509831463%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_10269_107_9970: {
    flexGrow: 1,
    width: wp("14.68997055225158%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_10269_107_9973: {
    flexGrow: 1,
    width: wp("14.731585518102372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8901740735997805%"),
    justifyContent: "flex-start"
  },
  Text_I107_10269_107_9973: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 2,
    textTransform: "none"
  },
  View_I107_10269_107_9972: {
    flexGrow: 1,
    width: wp("14.731585518102372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.27322404371591347%"),
    justifyContent: "center"
  },
  Text_I107_10269_107_9972: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  View_107_10279: {
    flexGrow: 1,
    width: wp("45.31835205992509%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7490636704119851%"),
    top: hp("22.540983606557347%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_10280: {
    width: wp("14.68997055225158%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_10281: {
    width: wp("14.68997055225158%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.314170275436954%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_10281_107_925: {
    flexGrow: 1,
    width: wp("14.68997055225158%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I107_10281_107_911: {
    flexGrow: 1,
    width: wp("14.731585518102372%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.0928961748634265%"),
    justifyContent: "center"
  },
  Text_I107_10281_107_911: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.29122498631477356,
    textTransform: "none"
  },
  ImageBackground_107_10282: {
    width: wp("14.68997055225158%"),
    height: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.628401509831463%"),
    top: hp("0%")
  },
  ImageBackground_107_10911: {
    width: wp("46.81647940074906%"),
    minWidth: wp("46.81647940074906%"),
    height: hp("39.75409836065574%"),
    minHeight: hp("39.75409836065574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9950062421972543%"),
    top: hp("48.49726775956282%")
  },
  View_107_16680: {
    width: wp("64.41947565543072%"),
    minWidth: wp("64.41947565543072%"),
    height: hp("121.85792349726776%"),
    minHeight: hp("121.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.990012484394507%"),
    top: hp("580.4644808743169%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_16681: {
    width: wp("20.09987515605493%"),
    minWidth: wp("20.09987515605493%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_107_16681: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_107_16682: {
    width: wp("64.41947565543072%"),
    minWidth: wp("64.41947565543072%"),
    height: hp("114.20765027322403%"),
    minHeight: hp("114.20765027322403%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043758%")
  },
  View_107_16683: {
    width: wp("5.617977528089887%"),
    minWidth: wp("5.617977528089887%"),
    height: hp("58.19672131147541%"),
    minHeight: hp("58.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.80149812734083%"),
    top: hp("28.005464480874366%")
  },
  View_107_16684: {
    width: wp("5.617977528089887%"),
    minWidth: wp("5.617977528089887%"),
    height: hp("58.19672131147541%"),
    minHeight: hp("58.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_107_16685: {
    width: wp("5.617977528089887%"),
    minWidth: wp("5.617977528089887%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_107_16685: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_107_16686: {
    width: wp("4.49438202247191%"),
    minWidth: wp("4.49438202247191%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("54.91803278688519%"),
    justifyContent: "center"
  },
  Text_107_16686: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_107_16687: {
    width: wp("54.80649188514357%"),
    minWidth: wp("54.80649188514357%"),
    height: hp("114.20765027322403%"),
    minHeight: hp("114.20765027322403%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_107_13634: {
    width: wp("46.81647940074906%"),
    minWidth: wp("46.81647940074906%"),
    height: hp("50.54644808743169%"),
    minHeight: hp("50.54644808743169%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9950062421972543%"),
    top: hp("4.371584699453592%"),
    backgroundColor: "rgba(250, 250, 250, 0.9300000071525574)"
  },
  View_107_13639: {
    flexGrow: 1,
    width: wp("13.358302122347066%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9975031210986263%"),
    top: hp("9.01639344262287%"),
    justifyContent: "flex-start"
  },
  Text_107_13639: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.05999999865889549,
    textTransform: "none"
  },
  View_107_16440: {
    flexGrow: 1,
    width: wp("43.320848938826465%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7478152309612973%"),
    top: hp("2.1857923497267393%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I107_16440_140_9380: {
    flexGrow: 1,
    width: wp("1.9513571902309612%"),
    height: hp("2.155708354678962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.998751560549314%"),
    top: hp("1.381195568647513%")
  },
  View_I107_16440_26_525: {
    flexGrow: 1,
    width: wp("36.39091272627965%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6991724211922588%"),
    top: hp("0.9562841530054129%"),
    justifyContent: "flex-start"
  },
  Text_I107_16440_26_525: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I107_16440_140_9337: {
    flexGrow: 1,
    width: wp("1.4829485603932584%"),
    height: hp("2.4153912653688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.839148817883896%"),
    top: hp("1.2513207607581762%")
  },
  View_107_13771: {
    flexGrow: 1,
    width: wp("44.19475655430712%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7478152309612973%"),
    top: hp("12.021857923497237%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_13729: {
    flexGrow: 1,
    width: wp("44.19475655430712%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_107_13641: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_107_13646: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.742821473158553%"),
    resizeMode: "cover"
  },
  ImageBackground_107_13651: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.485642946317103%"),
    resizeMode: "cover"
  },
  ImageBackground_107_13656: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.228464419475653%"),
    resizeMode: "cover"
  },
  ImageBackground_107_13661: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.97128589263421%"),
    resizeMode: "cover"
  },
  ImageBackground_107_13666: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.71410736579276%"),
    resizeMode: "cover"
  },
  ImageBackground_107_13671: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.45692883895131%"),
    resizeMode: "cover"
  },
  ImageBackground_107_13676: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.199750312109856%"),
    resizeMode: "cover"
  },
  View_107_13921: {
    flexGrow: 1,
    width: wp("44.19475655430712%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7478152309612973%"),
    top: hp("17.213114754098342%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_13922: {
    flexGrow: 1,
    width: wp("44.19475655430712%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_107_13923: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_107_13924: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.742821473158553%"),
    resizeMode: "cover"
  },
  ImageBackground_107_13925: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.485642946317103%"),
    resizeMode: "cover"
  },
  ImageBackground_107_13926: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.228464419475653%"),
    resizeMode: "cover"
  },
  ImageBackground_107_13927: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.97128589263421%"),
    resizeMode: "cover"
  },
  ImageBackground_107_13928: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.71410736579276%"),
    resizeMode: "cover"
  },
  ImageBackground_107_13929: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.45692883895131%"),
    resizeMode: "cover"
  },
  ImageBackground_107_13930: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.199750312109856%"),
    resizeMode: "cover"
  },
  View_107_13957: {
    flexGrow: 1,
    width: wp("44.19475655430712%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7478152309612973%"),
    top: hp("22.404371584699334%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_13958: {
    flexGrow: 1,
    width: wp("44.19475655430712%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_107_13959: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_107_13960: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.742821473158553%"),
    resizeMode: "cover"
  },
  ImageBackground_107_13961: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.485642946317103%"),
    resizeMode: "cover"
  },
  ImageBackground_107_13962: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.228464419475653%"),
    resizeMode: "cover"
  },
  ImageBackground_107_13963: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.97128589263421%"),
    resizeMode: "cover"
  },
  ImageBackground_107_13964: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.71410736579276%"),
    resizeMode: "cover"
  },
  ImageBackground_107_13965: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.45692883895131%"),
    resizeMode: "cover"
  },
  ImageBackground_107_13966: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.199750312109856%"),
    resizeMode: "cover"
  },
  View_107_14003: {
    flexGrow: 1,
    width: wp("44.19475655430712%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7478152309612973%"),
    top: hp("27.59562841530044%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_14004: {
    flexGrow: 1,
    width: wp("44.19475655430712%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_107_14005: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_107_14006: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.742821473158553%"),
    resizeMode: "cover"
  },
  ImageBackground_107_14007: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.485642946317103%"),
    resizeMode: "cover"
  },
  ImageBackground_107_14008: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.228464419475653%"),
    resizeMode: "cover"
  },
  ImageBackground_107_14009: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.97128589263421%"),
    resizeMode: "cover"
  },
  ImageBackground_107_14010: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.71410736579276%"),
    resizeMode: "cover"
  },
  ImageBackground_107_14011: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.45692883895131%"),
    resizeMode: "cover"
  },
  ImageBackground_107_14012: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.199750312109856%"),
    resizeMode: "cover"
  },
  View_107_14059: {
    flexGrow: 1,
    width: wp("44.19475655430712%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7478152309612973%"),
    top: hp("32.786885245901544%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_14060: {
    flexGrow: 1,
    width: wp("44.19475655430712%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_107_14061: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_107_14062: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.742821473158553%"),
    resizeMode: "cover"
  },
  ImageBackground_107_14063: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.485642946317103%"),
    resizeMode: "cover"
  },
  ImageBackground_107_14064: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.228464419475653%"),
    resizeMode: "cover"
  },
  ImageBackground_107_14065: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.97128589263421%"),
    resizeMode: "cover"
  },
  ImageBackground_107_14066: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.71410736579276%"),
    resizeMode: "cover"
  },
  ImageBackground_107_14067: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.45692883895131%"),
    resizeMode: "cover"
  },
  ImageBackground_107_14068: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.199750312109856%"),
    resizeMode: "cover"
  },
  View_107_14483: {
    flexGrow: 1,
    width: wp("43.320848938826465%"),
    height: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7478152309612973%"),
    top: hp("38.25136612021856%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_15175: {
    flexGrow: 1,
    width: wp("43.2397011365188%"),
    height: hp("2.276866422976301%"),
    minHeight: hp("2.276866422976301%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.7650406634221554%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_107_16118: {
    width: wp("1.9975031210986267%"),
    height: hp("2.185792349726776%"),
    top: hp("0.04555957564889468%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_107_15321: {
    width: wp("1.9975031210986267%"),
    minWidth: wp("1.9975031210986267%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.646962293227215%"),
    top: hp("0.04555957564889468%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_107_16131: {
    width: wp("3.7453183520599254%"),
    height: hp("4.098360655737705%"),
    top: hp("-1.0837575776981794%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.9016439411672899%")
  },
  ImageBackground_107_16088: {
    width: wp("1.9987515891238248%"),
    height: hp("2.1815134527904743%"),
    top: hp("0.04769413849032844%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.293924586454434%")
  },
  ImageBackground_107_16053: {
    width: wp("1.9937578360834967%"),
    height: hp("2.1835053553346726%"),
    top: hp("0.046693562158338864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.942167017790265%")
  },
  ImageBackground_107_16012: {
    width: wp("1.9912609000331007%"),
    height: hp("2.1789617225772044%"),
    top: hp("0.048961535177568294%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.585349855649188%")
  },
  ImageBackground_107_15949: {
    width: wp("1.9975031210986267%"),
    height: hp("2.185792349726776%"),
    top: hp("0.04555957564889468%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.226094335205996%")
  },
  ImageBackground_107_15859: {
    width: wp("1.4157303561283259%"),
    height: hp("2.185780233372756%"),
    top: hp("0.04555957564889468%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.873056628433208%")
  },
  ImageBackground_107_15748: {
    width: wp("1.7990012293897764%"),
    height: hp("2.193123916459214%"),
    top: hp("0.04189079576497079%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.938287589731583%")
  },
  ImageBackground_107_15634: {
    width: wp("1.373283395755306%"),
    height: hp("1.9529599309619006%"),
    top: hp("0.16195995560110532%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.386767517166035%")
  },
  ImageBackground_107_15515: {
    width: wp("2.8302122442314537%"),
    height: hp("2.276866422976301%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.409510085049945%")
  },
  ImageBackground_107_13568: {
    flexGrow: 1,
    width: wp("40.823970037453186%"),
    height: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9962546816479403%"),
    top: hp("44.12568306010928%")
  },
  View_107_13531: {
    flexGrow: 1,
    width: wp("46.81647940074906%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("45.90163934426221%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_13531_5_3093: {
    flexGrow: 1,
    width: wp("16.729088639201%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.106117353308363%"),
    top: hp("2.868852459016466%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_107_16351: {
    width: wp("46.81647940074906%"),
    minWidth: wp("46.81647940074906%"),
    height: hp("50.54644808743169%"),
    minHeight: hp("50.54644808743169%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.9950062421972543%"),
    top: hp("59.289617486338784%"),
    backgroundColor: "rgba(21, 21, 21, 0.8500000238418579)"
  },
  View_107_16597: {
    flexGrow: 1,
    width: wp("43.320848938826465%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7478152309612973%"),
    top: hp("2.1857923497267393%"),
    backgroundColor: "rgba(118, 118, 128, 0.23999999463558197)"
  },
  ImageBackground_I107_16597_140_9425: {
    flexGrow: 1,
    width: wp("1.9513571902309612%"),
    height: hp("2.155708354678962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.998751560549314%"),
    top: hp("1.3811955686476267%")
  },
  View_I107_16597_26_7539: {
    flexGrow: 1,
    width: wp("36.39091272627965%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6991724211922588%"),
    top: hp("0.9562841530055266%"),
    justifyContent: "flex-start"
  },
  Text_I107_16597_26_7539: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  ImageBackground_I107_16597_140_9453: {
    flexGrow: 1,
    width: wp("1.4829485603932584%"),
    height: hp("2.4153912653688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.839148817883896%"),
    top: hp("1.2513207607581762%")
  },
  View_107_16284: {
    flexGrow: 1,
    width: wp("13.358302122347066%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9975031210986263%"),
    top: hp("9.016393442622984%"),
    justifyContent: "flex-start"
  },
  Text_107_16284: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.05999999865889549,
    textTransform: "none"
  },
  View_107_16285: {
    flexGrow: 1,
    width: wp("44.19475655430712%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7478152309612973%"),
    top: hp("12.021857923497237%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_16286: {
    flexGrow: 1,
    width: wp("44.19475655430712%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_107_16287: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_107_16288: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.742821473158553%"),
    resizeMode: "cover"
  },
  ImageBackground_107_16289: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.485642946317103%"),
    resizeMode: "cover"
  },
  ImageBackground_107_16290: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.228464419475653%"),
    resizeMode: "cover"
  },
  ImageBackground_107_16291: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.97128589263421%"),
    resizeMode: "cover"
  },
  ImageBackground_107_16292: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.71410736579276%"),
    resizeMode: "cover"
  },
  ImageBackground_107_16293: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.45692883895131%"),
    resizeMode: "cover"
  },
  ImageBackground_107_16294: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.199750312109856%"),
    resizeMode: "cover"
  },
  View_107_16295: {
    flexGrow: 1,
    width: wp("44.19475655430712%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7478152309612973%"),
    top: hp("17.213114754098342%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_16296: {
    flexGrow: 1,
    width: wp("44.19475655430712%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_107_16297: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_107_16298: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.742821473158553%"),
    resizeMode: "cover"
  },
  ImageBackground_107_16299: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.485642946317103%"),
    resizeMode: "cover"
  },
  ImageBackground_107_16300: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.228464419475653%"),
    resizeMode: "cover"
  },
  ImageBackground_107_16301: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.97128589263421%"),
    resizeMode: "cover"
  },
  ImageBackground_107_16302: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.71410736579276%"),
    resizeMode: "cover"
  },
  ImageBackground_107_16303: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.45692883895131%"),
    resizeMode: "cover"
  },
  ImageBackground_107_16304: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.199750312109856%"),
    resizeMode: "cover"
  },
  View_107_16305: {
    flexGrow: 1,
    width: wp("44.19475655430712%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7478152309612973%"),
    top: hp("22.404371584699447%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_16306: {
    flexGrow: 1,
    width: wp("44.19475655430712%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_107_16307: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_107_16308: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.742821473158553%"),
    resizeMode: "cover"
  },
  ImageBackground_107_16309: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.485642946317103%"),
    resizeMode: "cover"
  },
  ImageBackground_107_16310: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.228464419475653%"),
    resizeMode: "cover"
  },
  ImageBackground_107_16311: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.97128589263421%"),
    resizeMode: "cover"
  },
  ImageBackground_107_16312: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.71410736579276%"),
    resizeMode: "cover"
  },
  ImageBackground_107_16313: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.45692883895131%"),
    resizeMode: "cover"
  },
  ImageBackground_107_16314: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.199750312109856%"),
    resizeMode: "cover"
  },
  View_107_16315: {
    flexGrow: 1,
    width: wp("44.19475655430712%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7478152309612973%"),
    top: hp("27.595628415300553%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_16316: {
    flexGrow: 1,
    width: wp("44.19475655430712%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_107_16317: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_107_16318: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.742821473158553%"),
    resizeMode: "cover"
  },
  ImageBackground_107_16319: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.485642946317103%"),
    resizeMode: "cover"
  },
  ImageBackground_107_16320: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.228464419475653%"),
    resizeMode: "cover"
  },
  ImageBackground_107_16321: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.97128589263421%"),
    resizeMode: "cover"
  },
  ImageBackground_107_16322: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.71410736579276%"),
    resizeMode: "cover"
  },
  ImageBackground_107_16323: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.45692883895131%"),
    resizeMode: "cover"
  },
  ImageBackground_107_16324: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.199750312109856%"),
    resizeMode: "cover"
  },
  View_107_16325: {
    flexGrow: 1,
    width: wp("44.19475655430712%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7478152309612973%"),
    top: hp("32.78688524590166%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_16326: {
    flexGrow: 1,
    width: wp("44.19475655430712%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_107_16327: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_107_16328: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.742821473158553%"),
    resizeMode: "cover"
  },
  ImageBackground_107_16329: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.485642946317103%"),
    resizeMode: "cover"
  },
  ImageBackground_107_16330: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.228464419475653%"),
    resizeMode: "cover"
  },
  ImageBackground_107_16331: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.97128589263421%"),
    resizeMode: "cover"
  },
  ImageBackground_107_16332: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.71410736579276%"),
    resizeMode: "cover"
  },
  ImageBackground_107_16333: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.45692883895131%"),
    resizeMode: "cover"
  },
  ImageBackground_107_16334: {
    width: wp("3.9950062421972534%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.199750312109856%"),
    resizeMode: "cover"
  },
  View_107_16335: {
    flexGrow: 1,
    width: wp("43.320848938826465%"),
    height: hp("4.2349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7478152309612973%"),
    top: hp("38.25136612021856%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_16336: {
    flexGrow: 1,
    width: wp("43.2397011365188%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.08198055413254224%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_108_3777: {
    width: wp("1.9975031210986267%"),
    height: hp("2.185792349726776%"),
    top: hp("0.9562841530055266%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_108_3778: {
    width: wp("3.7453183520599254%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.452076505930087%")
  },
  ImageBackground_108_3787: {
    width: wp("1.9987515891238248%"),
    height: hp("2.1815134527904743%"),
    top: hp("0.9584187158469604%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.651968242821471%")
  },
  ImageBackground_108_3788: {
    width: wp("1.9937578360834967%"),
    height: hp("2.1765853537887825%"),
    top: hp("0.9608868041325422%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.105263927902623%")
  },
  ImageBackground_108_3789: {
    width: wp("1.9975031210986267%"),
    minWidth: wp("1.9975031210986267%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.553621937421976%"),
    top: hp("0.9562841530055266%")
  },
  View_108_3790: {
    width: wp("1.9975031210986267%"),
    height: hp("2.185792349726776%"),
    top: hp("0.9562841530055266%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.005698443352056%")
  },
  View_108_3791: {
    width: wp("1.9975031210986267%"),
    minWidth: wp("1.9975031210986267%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_108_3792: {
    width: wp("1.9975031210986267%"),
    minWidth: wp("1.9975031210986267%"),
    height: hp("2.047768707483844%"),
    minHeight: hp("2.047768707483844%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_108_3793: {
    width: wp("1.9975031210986267%"),
    minWidth: wp("1.9975031210986267%"),
    height: hp("2.047768707483844%"),
    minHeight: hp("2.047768707483844%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_108_3794: {
    width: wp("1.9975031210986267%"),
    height: hp("2.047768707483844%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_108_3798: {
    width: wp("0.4577611418401406%"),
    height: hp("1.1187613336114934%"),
    top: hp("0.9562841530054129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.12484394506866892%")
  },
  ImageBackground_108_3799: {
    width: wp("0.7490636704119851%"),
    height: hp("1.2752732292550508%"),
    top: hp("0.819672131147513%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1235955056179847%")
  },
  ImageBackground_108_3800: {
    width: wp("0.6267998251278005%"),
    height: hp("1.9794626965548825%"),
    top: hp("0.1366120218578999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5383895131086192%")
  },
  ImageBackground_108_3801: {
    width: wp("0.5826050571436887%"),
    height: hp("1.398360664075841%"),
    top: hp("0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.290074418695383%")
  },
  ImageBackground_108_3802: {
    width: wp("0.12484394506866417%"),
    height: hp("0.1366120218579235%"),
    top: hp("1.0914953679986183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24968789013733073%")
  },
  ImageBackground_108_3803: {
    width: wp("0.12484394506866417%"),
    height: hp("0.1366120218579235%"),
    top: hp("0.5464480874317132%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9155425834893904%")
  },
  ImageBackground_108_3804: {
    width: wp("0.12484394506866417%"),
    height: hp("0.1366120218579235%"),
    top: hp("0.5464480874317132%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6658546933520668%")
  },
  ImageBackground_108_3805: {
    width: wp("0.12484394506866417%"),
    height: hp("0.1366120218579235%"),
    top: hp("0.8182713242827049%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.622971285892639%")
  },
  ImageBackground_108_3806: {
    width: wp("0.12484394506866417%"),
    height: hp("0.1366120218579235%"),
    top: hp("1.0914953679986183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.622971285892639%")
  },
  ImageBackground_108_3807: {
    width: wp("0.12484394506866417%"),
    height: hp("0.13802367481377606%"),
    top: hp("0.27182323685099163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6658546933520668%")
  },
  ImageBackground_108_3808: {
    width: wp("0.12484394506866417%"),
    height: hp("0.1366120218579235%"),
    top: hp("0.2732240437157998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9155425834893904%")
  },
  ImageBackground_108_3809: {
    width: wp("1.414898004424706%"),
    height: hp("0.546448087431694%"),
    top: hp("1.4571726647882315%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2913228581460743%")
  },
  ImageBackground_108_3810: {
    width: wp("0.24968789013732834%"),
    height: hp("0.20632968574273783%"),
    top: hp("1.9794735100750813%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3732833957553083%")
  },
  ImageBackground_108_3811: {
    width: wp("0.24968789013732834%"),
    height: hp("0.20632968574273783%"),
    top: hp("1.9794735100750813%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.37453183520599254%")
  },
  ImageBackground_108_3812: {
    width: wp("0.9987515605493134%"),
    height: hp("0.8196790361664985%"),
    top: hp("0.9107245773565182%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.49937578027466145%")
  },
  ImageBackground_108_3813: {
    width: wp("0.7490636704119851%"),
    height: hp("0.4098360655737705%"),
    top: hp("1.0473365992144181%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6242197253433233%")
  },
  ImageBackground_108_3814: {
    width: wp("0.18726591760299627%"),
    height: hp("0.20491803278688525%"),
    top: hp("1.558230874316905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4239695497815248%")
  },
  ImageBackground_108_3815: {
    width: wp("0.18726591760299627%"),
    height: hp("0.20491803278688525%"),
    top: hp("1.558230874316905%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3837073774968829%")
  },
  ImageBackground_108_3816: {
    width: wp("1.2484394506866416%"),
    height: hp("0.08966302285428907%"),
    top: hp("1.8215158598018206%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.37453183520599254%")
  },
  ImageBackground_108_3817: {
    width: wp("0.6242197253433208%"),
    height: hp("0.1366120218579235%"),
    top: hp("1.7745554772882315%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6866416978776542%")
  },
  ImageBackground_108_3818: {
    width: wp("1.4157303561283259%"),
    height: hp("2.185780233372756%"),
    top: hp("0.9562841530055266%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.45777494928215%")
  },
  ImageBackground_108_3824: {
    width: wp("1.7990012293897764%"),
    height: hp("2.193123916459214%"),
    top: hp("0.9526153731216027%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.328059164325836%")
  },
  ImageBackground_108_3825: {
    width: wp("1.3732719659507646%"),
    height: hp("1.9529599309619006%"),
    top: hp("1.0726845329576236%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.581653304463174%")
  },
  ImageBackground_108_3826: {
    width: wp("2.8302122442314537%"),
    height: hp("2.276866422976301%"),
    top: hp("0.9107245773565182%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.409510085049945%")
  },
  ImageBackground_107_16364: {
    flexGrow: 1,
    width: wp("40.823970037453186%"),
    height: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9962546816479403%"),
    top: hp("44.12568306010928%")
  },
  View_107_16280: {
    flexGrow: 1,
    width: wp("46.81647940074906%"),
    height: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("45.90163934426232%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I107_16280_36_10050: {
    flexGrow: 1,
    width: wp("16.729088639201%"),
    height: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.106117353308363%"),
    top: hp("2.8688524590163524%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_107_12878: {
    width: wp("46.81647940074906%"),
    minWidth: wp("46.81647940074906%"),
    height: hp("118.5792349726776%"),
    minHeight: hp("118.5792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.990012484394507%"),
    top: hp("711.0655737704918%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_107_12879: {
    width: wp("22.971285892634207%"),
    minWidth: wp("22.971285892634207%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_107_12879: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_107_12880: {
    width: wp("46.81647940074906%"),
    minWidth: wp("46.81647940074906%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043644%")
  },
  View_5_1248: {
    width: wp("46.81647940074906%"),
    minWidth: wp("46.81647940074906%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_1769: {
    flexGrow: 1,
    width: wp("46.81647940074906%"),
    height: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0.6000000238418579)"
  },
  View_5_1250: {
    flexGrow: 1,
    width: wp("11.235955056179774%"),
    height: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6217228464419478%"),
    top: hp("5.601092896174919%")
  },
  ImageBackground_5_1251: {
    width: wp("11.235955056179774%"),
    minWidth: wp("11.235955056179774%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_1252: {
    width: wp("5.118601747815231%"),
    minWidth: wp("5.118601747815231%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9962546816479403%"),
    top: hp("3.825136612021879%"),
    justifyContent: "flex-start"
  },
  Text_5_1252: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 45,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.37400001287460327,
    textTransform: "none"
  },
  View_5_1253: {
    flexGrow: 1,
    width: wp("11.235955056179774%"),
    height: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.083645443196005%"),
    top: hp("5.601092896174919%")
  },
  ImageBackground_5_1254: {
    width: wp("11.235955056179774%"),
    minWidth: wp("11.235955056179774%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_1255: {
    width: wp("5.118601747815231%"),
    minWidth: wp("5.118601747815231%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9962546816479474%"),
    top: hp("3.825136612021879%"),
    justifyContent: "flex-start"
  },
  Text_5_1255: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 45,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.37400001287460327,
    textTransform: "none"
  },
  View_5_1256: {
    flexGrow: 1,
    width: wp("11.235955056179774%"),
    height: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.85268414481898%"),
    top: hp("5.601092896174919%")
  },
  ImageBackground_5_1257: {
    width: wp("11.235955056179774%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_1258: {
    width: wp("5.118601747815231%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9962546816479367%"),
    top: hp("3.961748633879779%"),
    justifyContent: "flex-start"
  },
  Text_5_1258: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 45,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.37400001287460327,
    textTransform: "none"
  },
  View_5_1259: {
    flexGrow: 1,
    width: wp("11.235955056179774%"),
    height: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6217228464419478%"),
    top: hp("94.2622950819673%")
  },
  ImageBackground_5_1260: {
    width: wp("11.235955056179774%"),
    minWidth: wp("11.235955056179774%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_1261: {
    width: wp("5.118601747815231%"),
    minWidth: wp("5.118601747815231%"),
    minHeight: hp("4.508196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9962546816479403%"),
    top: hp("3.961748633879779%"),
    justifyContent: "flex-start"
  },
  Text_5_1261: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 45,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.37400001287460327,
    textTransform: "none"
  },
  View_5_1262: {
    flexGrow: 1,
    width: wp("11.235955056179774%"),
    height: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.083645443196005%"),
    top: hp("94.2622950819673%")
  },
  ImageBackground_5_1263: {
    width: wp("11.235955056179774%"),
    minWidth: wp("11.235955056179774%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_1264: {
    width: wp("5.118601747815231%"),
    minWidth: wp("5.118601747815231%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9962546816479474%"),
    top: hp("4.508196721311492%"),
    justifyContent: "flex-start"
  },
  Text_5_1264: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 45,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.37400001287460327,
    textTransform: "none"
  },
  View_5_1265: {
    flexGrow: 1,
    width: wp("11.235955056179774%"),
    height: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.85268414481898%"),
    top: hp("94.2622950819673%")
  },
  ImageBackground_5_1266: {
    width: wp("11.235955056179774%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_5_1267: {
    width: wp("5.118601747815231%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9962546816479367%"),
    top: hp("3.961748633879779%"),
    justifyContent: "flex-start"
  },
  Text_5_1267: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 45,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.37400001287460327,
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
