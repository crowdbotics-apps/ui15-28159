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
      <View style={styles.View_140_5502}>
        <View style={styles.View_5_1898}>
          <View style={styles.View_I5_1898_5_19}>
            <View style={styles.View_I5_1898_5_20}>
              <View style={styles.View_I5_1898_5_21} />
              <View style={styles.View_I5_1898_5_22}>
                <Text style={styles.Text_I5_1898_5_22}>Colors</Text>
              </View>
            </View>
            <View style={styles.View_I5_1898_5_23}>
              <Text style={styles.Text_I5_1898_5_23}>
                Human Interface Guidelines: Color
              </Text>
            </View>
          </View>
          <View style={styles.View_I5_1898_5_24} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f25c/d3b1/c32aee2ed021b2c18a2f5e92deb57a5b"
          }}
          style={styles.ImageBackground_140_5503}
        />
      </View>
      <View style={styles.View_5_144}>
        <Text style={styles.Text_5_144}>Default</Text>
      </View>
      <View style={styles.View_5_145}>
        <View style={styles.View_5_146}>
          <Text style={styles.Text_5_146}>Light Colors</Text>
        </View>
        <View style={styles.View_5_147}>
          <View style={styles.View_5_148}>
            <View style={styles.View_I5_148_5_224} />
            <View style={styles.View_I5_148_5_225}>
              <View style={styles.View_I5_148_5_226}>
                <Text style={styles.Text_I5_148_5_226}>SystemRed/Light</Text>
              </View>
              <View style={styles.View_I5_148_5_227}>
                <View style={styles.View_I5_148_5_228}>
                  <Text style={styles.Text_I5_148_5_228}>#FF3B30</Text>
                </View>
                <View style={styles.View_I5_148_5_229}>
                  <Text style={styles.Text_I5_148_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_148_5_230}>
                  <Text style={styles.Text_I5_148_5_230}>RGB: 255,59,48</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_149}>
            <View style={styles.View_I5_149_5_224} />
            <View style={styles.View_I5_149_5_225}>
              <View style={styles.View_I5_149_5_226}>
                <Text style={styles.Text_I5_149_5_226}>SystemOrange/Light</Text>
              </View>
              <View style={styles.View_I5_149_5_227}>
                <View style={styles.View_I5_149_5_228}>
                  <Text style={styles.Text_I5_149_5_228}>#FF9500</Text>
                </View>
                <View style={styles.View_I5_149_5_229}>
                  <Text style={styles.Text_I5_149_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_149_5_230}>
                  <Text style={styles.Text_I5_149_5_230}>RGB: 255,149,0</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_150}>
            <View style={styles.View_I5_150_5_224} />
            <View style={styles.View_I5_150_5_225}>
              <View style={styles.View_I5_150_5_226}>
                <Text style={styles.Text_I5_150_5_226}>SystemYellow/Light</Text>
              </View>
              <View style={styles.View_I5_150_5_227}>
                <View style={styles.View_I5_150_5_228}>
                  <Text style={styles.Text_I5_150_5_228}>#FFCC00</Text>
                </View>
                <View style={styles.View_I5_150_5_229}>
                  <Text style={styles.Text_I5_150_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_150_5_230}>
                  <Text style={styles.Text_I5_150_5_230}>RGB: 255,204,0</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_151}>
            <View style={styles.View_I5_151_5_224} />
            <View style={styles.View_I5_151_5_225}>
              <View style={styles.View_I5_151_5_226}>
                <Text style={styles.Text_I5_151_5_226}>SystemGreen/Light</Text>
              </View>
              <View style={styles.View_I5_151_5_227}>
                <View style={styles.View_I5_151_5_228}>
                  <Text style={styles.Text_I5_151_5_228}>#34C759</Text>
                </View>
                <View style={styles.View_I5_151_5_229}>
                  <Text style={styles.Text_I5_151_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_151_5_230}>
                  <Text style={styles.Text_I5_151_5_230}>RGB: 52,199,89</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_152}>
            <View style={styles.View_I5_152_5_224} />
            <View style={styles.View_I5_152_5_225}>
              <View style={styles.View_I5_152_5_226}>
                <Text style={styles.Text_I5_152_5_226}>SystemTeal/Light</Text>
              </View>
              <View style={styles.View_I5_152_5_227}>
                <View style={styles.View_I5_152_5_228}>
                  <Text style={styles.Text_I5_152_5_228}>#5AC8FA</Text>
                </View>
                <View style={styles.View_I5_152_5_229}>
                  <Text style={styles.Text_I5_152_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_152_5_230}>
                  <Text style={styles.Text_I5_152_5_230}>RGB: 90,200,250</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_153}>
            <View style={styles.View_I5_153_5_224} />
            <View style={styles.View_I5_153_5_225}>
              <View style={styles.View_I5_153_5_226}>
                <Text style={styles.Text_I5_153_5_226}>SystemBlue/Light</Text>
              </View>
              <View style={styles.View_I5_153_5_227}>
                <View style={styles.View_I5_153_5_228}>
                  <Text style={styles.Text_I5_153_5_228}>#007AFF</Text>
                </View>
                <View style={styles.View_I5_153_5_229}>
                  <Text style={styles.Text_I5_153_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_153_5_230}>
                  <Text style={styles.Text_I5_153_5_230}>RGB: 0,122,255</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_154}>
            <View style={styles.View_I5_154_5_224} />
            <View style={styles.View_I5_154_5_225}>
              <View style={styles.View_I5_154_5_226}>
                <Text style={styles.Text_I5_154_5_226}>SystemIndigo/Light</Text>
              </View>
              <View style={styles.View_I5_154_5_227}>
                <View style={styles.View_I5_154_5_228}>
                  <Text style={styles.Text_I5_154_5_228}>#5856D6</Text>
                </View>
                <View style={styles.View_I5_154_5_229}>
                  <Text style={styles.Text_I5_154_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_154_5_230}>
                  <Text style={styles.Text_I5_154_5_230}>RGB: 88,86,214</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_155}>
            <View style={styles.View_I5_155_5_224} />
            <View style={styles.View_I5_155_5_225}>
              <View style={styles.View_I5_155_5_226}>
                <Text style={styles.Text_I5_155_5_226}>SystemPurple/Light</Text>
              </View>
              <View style={styles.View_I5_155_5_227}>
                <View style={styles.View_I5_155_5_228}>
                  <Text style={styles.Text_I5_155_5_228}>#FF3B30</Text>
                </View>
                <View style={styles.View_I5_155_5_229}>
                  <Text style={styles.Text_I5_155_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_155_5_230}>
                  <Text style={styles.Text_I5_155_5_230}>RGB: 175,82,222</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_156}>
            <View style={styles.View_I5_156_5_224} />
            <View style={styles.View_I5_156_5_225}>
              <View style={styles.View_I5_156_5_226}>
                <Text style={styles.Text_I5_156_5_226}>SystemPink/Light</Text>
              </View>
              <View style={styles.View_I5_156_5_227}>
                <View style={styles.View_I5_156_5_228}>
                  <Text style={styles.Text_I5_156_5_228}>#FF2D55</Text>
                </View>
                <View style={styles.View_I5_156_5_229}>
                  <Text style={styles.Text_I5_156_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_156_5_230}>
                  <Text style={styles.Text_I5_156_5_230}>RGB: 255,45,85</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_5_157}>
          <View style={styles.View_5_158}>
            <View style={styles.View_I5_158_5_224} />
            <View style={styles.View_I5_158_5_225}>
              <View style={styles.View_I5_158_5_226}>
                <Text style={styles.Text_I5_158_5_226}>SystemGray/Light</Text>
              </View>
              <View style={styles.View_I5_158_5_227}>
                <View style={styles.View_I5_158_5_228}>
                  <Text style={styles.Text_I5_158_5_228}>#8E8E93</Text>
                </View>
                <View style={styles.View_I5_158_5_229}>
                  <Text style={styles.Text_I5_158_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_158_5_230}>
                  <Text style={styles.Text_I5_158_5_230}>RGB: 142,142,147</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_159}>
            <View style={styles.View_I5_159_5_224} />
            <View style={styles.View_I5_159_5_225}>
              <View style={styles.View_I5_159_5_226}>
                <Text style={styles.Text_I5_159_5_226}>
                  SystemGray/02/Light
                </Text>
              </View>
              <View style={styles.View_I5_159_5_227}>
                <View style={styles.View_I5_159_5_228}>
                  <Text style={styles.Text_I5_159_5_228}>#AEAEB2</Text>
                </View>
                <View style={styles.View_I5_159_5_229}>
                  <Text style={styles.Text_I5_159_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_159_5_230}>
                  <Text style={styles.Text_I5_159_5_230}>RGB: 174,174,178</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_160}>
            <View style={styles.View_I5_160_5_224} />
            <View style={styles.View_I5_160_5_225}>
              <View style={styles.View_I5_160_5_226}>
                <Text style={styles.Text_I5_160_5_226}>
                  SystemGray/03/Light
                </Text>
              </View>
              <View style={styles.View_I5_160_5_227}>
                <View style={styles.View_I5_160_5_228}>
                  <Text style={styles.Text_I5_160_5_228}>#C7C7CC</Text>
                </View>
                <View style={styles.View_I5_160_5_229}>
                  <Text style={styles.Text_I5_160_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_160_5_230}>
                  <Text style={styles.Text_I5_160_5_230}>RGB: 199,199,204</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_161}>
            <View style={styles.View_I5_161_5_224} />
            <View style={styles.View_I5_161_5_225}>
              <View style={styles.View_I5_161_5_226}>
                <Text style={styles.Text_I5_161_5_226}>
                  SystemGray/04/Light
                </Text>
              </View>
              <View style={styles.View_I5_161_5_227}>
                <View style={styles.View_I5_161_5_228}>
                  <Text style={styles.Text_I5_161_5_228}>#D1D1D6</Text>
                </View>
                <View style={styles.View_I5_161_5_229}>
                  <Text style={styles.Text_I5_161_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_161_5_230}>
                  <Text style={styles.Text_I5_161_5_230}>RGB: 209,209,214</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_162}>
            <View style={styles.View_I5_162_5_224} />
            <View style={styles.View_I5_162_5_225}>
              <View style={styles.View_I5_162_5_226}>
                <Text style={styles.Text_I5_162_5_226}>
                  SystemGray/05/Light
                </Text>
              </View>
              <View style={styles.View_I5_162_5_227}>
                <View style={styles.View_I5_162_5_228}>
                  <Text style={styles.Text_I5_162_5_228}>#E5E5EA</Text>
                </View>
                <View style={styles.View_I5_162_5_229}>
                  <Text style={styles.Text_I5_162_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_162_5_230}>
                  <Text style={styles.Text_I5_162_5_230}>RGB: 229,229,234</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_163}>
            <View style={styles.View_I5_163_5_224} />
            <View style={styles.View_I5_163_5_225}>
              <View style={styles.View_I5_163_5_226}>
                <Text style={styles.Text_I5_163_5_226}>
                  SystemGray/06/Light
                </Text>
              </View>
              <View style={styles.View_I5_163_5_227}>
                <View style={styles.View_I5_163_5_228}>
                  <Text style={styles.Text_I5_163_5_228}>#F2F2F7</Text>
                </View>
                <View style={styles.View_I5_163_5_229}>
                  <Text style={styles.Text_I5_163_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_163_5_230}>
                  <Text style={styles.Text_I5_163_5_230}>RGB: 242,242,247</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_8_4751}>
        <View style={styles.View_5_165}>
          <Text style={styles.Text_5_165}>Dark Colors</Text>
        </View>
        <View style={styles.View_5_166}>
          <View style={styles.View_5_167}>
            <View style={styles.View_I5_167_5_224} />
            <View style={styles.View_I5_167_5_225}>
              <View style={styles.View_I5_167_5_226}>
                <Text style={styles.Text_I5_167_5_226}>SystemRed/Dark</Text>
              </View>
              <View style={styles.View_I5_167_5_227}>
                <View style={styles.View_I5_167_5_228}>
                  <Text style={styles.Text_I5_167_5_228}>#FF453A</Text>
                </View>
                <View style={styles.View_I5_167_5_229}>
                  <Text style={styles.Text_I5_167_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_167_5_230}>
                  <Text style={styles.Text_I5_167_5_230}>RGB: 255,69,58</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_168}>
            <View style={styles.View_I5_168_5_224} />
            <View style={styles.View_I5_168_5_225}>
              <View style={styles.View_I5_168_5_226}>
                <Text style={styles.Text_I5_168_5_226}>SystemOrange/Dark</Text>
              </View>
              <View style={styles.View_I5_168_5_227}>
                <View style={styles.View_I5_168_5_228}>
                  <Text style={styles.Text_I5_168_5_228}>#FF9F0A</Text>
                </View>
                <View style={styles.View_I5_168_5_229}>
                  <Text style={styles.Text_I5_168_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_168_5_230}>
                  <Text style={styles.Text_I5_168_5_230}>RGB: 255,159,10</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_169}>
            <View style={styles.View_I5_169_5_224} />
            <View style={styles.View_I5_169_5_225}>
              <View style={styles.View_I5_169_5_226}>
                <Text style={styles.Text_I5_169_5_226}>SystemYellow/Dark</Text>
              </View>
              <View style={styles.View_I5_169_5_227}>
                <View style={styles.View_I5_169_5_228}>
                  <Text style={styles.Text_I5_169_5_228}>#FFD60A</Text>
                </View>
                <View style={styles.View_I5_169_5_229}>
                  <Text style={styles.Text_I5_169_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_169_5_230}>
                  <Text style={styles.Text_I5_169_5_230}>RGB: 255,214,10</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_170}>
            <View style={styles.View_I5_170_5_224} />
            <View style={styles.View_I5_170_5_225}>
              <View style={styles.View_I5_170_5_226}>
                <Text style={styles.Text_I5_170_5_226}>SystemGreen/Dark</Text>
              </View>
              <View style={styles.View_I5_170_5_227}>
                <View style={styles.View_I5_170_5_228}>
                  <Text style={styles.Text_I5_170_5_228}>#32D74B</Text>
                </View>
                <View style={styles.View_I5_170_5_229}>
                  <Text style={styles.Text_I5_170_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_170_5_230}>
                  <Text style={styles.Text_I5_170_5_230}>RGB: 48,209,88</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_171}>
            <View style={styles.View_I5_171_5_224} />
            <View style={styles.View_I5_171_5_225}>
              <View style={styles.View_I5_171_5_226}>
                <Text style={styles.Text_I5_171_5_226}>SystemTeal/Dark</Text>
              </View>
              <View style={styles.View_I5_171_5_227}>
                <View style={styles.View_I5_171_5_228}>
                  <Text style={styles.Text_I5_171_5_228}>#64D2FF</Text>
                </View>
                <View style={styles.View_I5_171_5_229}>
                  <Text style={styles.Text_I5_171_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_171_5_230}>
                  <Text style={styles.Text_I5_171_5_230}>RGB: 100,210,255</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_172}>
            <View style={styles.View_I5_172_5_224} />
            <View style={styles.View_I5_172_5_225}>
              <View style={styles.View_I5_172_5_226}>
                <Text style={styles.Text_I5_172_5_226}>SystemBlue/Dark</Text>
              </View>
              <View style={styles.View_I5_172_5_227}>
                <View style={styles.View_I5_172_5_228}>
                  <Text style={styles.Text_I5_172_5_228}>#0A84FF</Text>
                </View>
                <View style={styles.View_I5_172_5_229}>
                  <Text style={styles.Text_I5_172_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_172_5_230}>
                  <Text style={styles.Text_I5_172_5_230}>RGB: 10,132,255</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_173}>
            <View style={styles.View_I5_173_5_224} />
            <View style={styles.View_I5_173_5_225}>
              <View style={styles.View_I5_173_5_226}>
                <Text style={styles.Text_I5_173_5_226}>SystemIndigo/Dark</Text>
              </View>
              <View style={styles.View_I5_173_5_227}>
                <View style={styles.View_I5_173_5_228}>
                  <Text style={styles.Text_I5_173_5_228}>#5E5CE6</Text>
                </View>
                <View style={styles.View_I5_173_5_229}>
                  <Text style={styles.Text_I5_173_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_173_5_230}>
                  <Text style={styles.Text_I5_173_5_230}>RGB: 94,92,230</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_174}>
            <View style={styles.View_I5_174_5_224} />
            <View style={styles.View_I5_174_5_225}>
              <View style={styles.View_I5_174_5_226}>
                <Text style={styles.Text_I5_174_5_226}>SystemPurple/Dark</Text>
              </View>
              <View style={styles.View_I5_174_5_227}>
                <View style={styles.View_I5_174_5_228}>
                  <Text style={styles.Text_I5_174_5_228}>#BF5AF2</Text>
                </View>
                <View style={styles.View_I5_174_5_229}>
                  <Text style={styles.Text_I5_174_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_174_5_230}>
                  <Text style={styles.Text_I5_174_5_230}>RGB: 191,90,242</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_175}>
            <View style={styles.View_I5_175_5_224} />
            <View style={styles.View_I5_175_5_225}>
              <View style={styles.View_I5_175_5_226}>
                <Text style={styles.Text_I5_175_5_226}>SystemPink/Dark</Text>
              </View>
              <View style={styles.View_I5_175_5_227}>
                <View style={styles.View_I5_175_5_228}>
                  <Text style={styles.Text_I5_175_5_228}>#FF2D55</Text>
                </View>
                <View style={styles.View_I5_175_5_229}>
                  <Text style={styles.Text_I5_175_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_175_5_230}>
                  <Text style={styles.Text_I5_175_5_230}>RGB: 255,69,58</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_5_176}>
          <View style={styles.View_5_177}>
            <View style={styles.View_I5_177_5_224} />
            <View style={styles.View_I5_177_5_225}>
              <View style={styles.View_I5_177_5_226}>
                <Text style={styles.Text_I5_177_5_226}>SystemGray/Dark</Text>
              </View>
              <View style={styles.View_I5_177_5_227}>
                <View style={styles.View_I5_177_5_228}>
                  <Text style={styles.Text_I5_177_5_228}>#FF3B30</Text>
                </View>
                <View style={styles.View_I5_177_5_229}>
                  <Text style={styles.Text_I5_177_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_177_5_230}>
                  <Text style={styles.Text_I5_177_5_230}>RGB: 142,142,147</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_178}>
            <View style={styles.View_I5_178_5_224} />
            <View style={styles.View_I5_178_5_225}>
              <View style={styles.View_I5_178_5_226}>
                <Text style={styles.Text_I5_178_5_226}>SystemGray/02/Dark</Text>
              </View>
              <View style={styles.View_I5_178_5_227}>
                <View style={styles.View_I5_178_5_228}>
                  <Text style={styles.Text_I5_178_5_228}>#636366</Text>
                </View>
                <View style={styles.View_I5_178_5_229}>
                  <Text style={styles.Text_I5_178_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_178_5_230}>
                  <Text style={styles.Text_I5_178_5_230}>RGB: 99,99,102</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_179}>
            <View style={styles.View_I5_179_5_224} />
            <View style={styles.View_I5_179_5_225}>
              <View style={styles.View_I5_179_5_226}>
                <Text style={styles.Text_I5_179_5_226}>SystemGray/03/Dark</Text>
              </View>
              <View style={styles.View_I5_179_5_227}>
                <View style={styles.View_I5_179_5_228}>
                  <Text style={styles.Text_I5_179_5_228}>#48484A</Text>
                </View>
                <View style={styles.View_I5_179_5_229}>
                  <Text style={styles.Text_I5_179_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_179_5_230}>
                  <Text style={styles.Text_I5_179_5_230}>RGB: 72,72,74</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_180}>
            <View style={styles.View_I5_180_5_224} />
            <View style={styles.View_I5_180_5_225}>
              <View style={styles.View_I5_180_5_226}>
                <Text style={styles.Text_I5_180_5_226}>SystemGray/04/Dark</Text>
              </View>
              <View style={styles.View_I5_180_5_227}>
                <View style={styles.View_I5_180_5_228}>
                  <Text style={styles.Text_I5_180_5_228}>#3A3A3C</Text>
                </View>
                <View style={styles.View_I5_180_5_229}>
                  <Text style={styles.Text_I5_180_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_180_5_230}>
                  <Text style={styles.Text_I5_180_5_230}>RGB: 58,58,60</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_181}>
            <View style={styles.View_I5_181_5_224} />
            <View style={styles.View_I5_181_5_225}>
              <View style={styles.View_I5_181_5_226}>
                <Text style={styles.Text_I5_181_5_226}>SystemGray/05/Dark</Text>
              </View>
              <View style={styles.View_I5_181_5_227}>
                <View style={styles.View_I5_181_5_228}>
                  <Text style={styles.Text_I5_181_5_228}>#2C2C2E</Text>
                </View>
                <View style={styles.View_I5_181_5_229}>
                  <Text style={styles.Text_I5_181_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_181_5_230}>
                  <Text style={styles.Text_I5_181_5_230}>RGB: 44,44,46</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_182}>
            <View style={styles.View_I5_182_5_224} />
            <View style={styles.View_I5_182_5_225}>
              <View style={styles.View_I5_182_5_226}>
                <Text style={styles.Text_I5_182_5_226}>SystemGray/06/Dark</Text>
              </View>
              <View style={styles.View_I5_182_5_227}>
                <View style={styles.View_I5_182_5_228}>
                  <Text style={styles.Text_I5_182_5_228}>#1C1C1E</Text>
                </View>
                <View style={styles.View_I5_182_5_229}>
                  <Text style={styles.Text_I5_182_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_182_5_230}>
                  <Text style={styles.Text_I5_182_5_230}>RGB: 28,28,30</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_5_183}>
        <Text style={styles.Text_5_183}>Accessible</Text>
      </View>
      <View style={styles.View_5_184}>
        <View style={styles.View_5_185}>
          <Text style={styles.Text_5_185}>Light Colors</Text>
        </View>
        <View style={styles.View_5_186}>
          <View style={styles.View_5_187}>
            <View style={styles.View_I5_187_5_224} />
            <View style={styles.View_I5_187_5_225}>
              <View style={styles.View_I5_187_5_226}>
                <Text style={styles.Text_I5_187_5_226}>SystemRed/Light</Text>
              </View>
              <View style={styles.View_I5_187_5_227}>
                <View style={styles.View_I5_187_5_228}>
                  <Text style={styles.Text_I5_187_5_228}>#FF3B30</Text>
                </View>
                <View style={styles.View_I5_187_5_229}>
                  <Text style={styles.Text_I5_187_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_187_5_230}>
                  <Text style={styles.Text_I5_187_5_230}>RGB: 215,0,21</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_188}>
            <View style={styles.View_I5_188_5_224} />
            <View style={styles.View_I5_188_5_225}>
              <View style={styles.View_I5_188_5_226}>
                <Text style={styles.Text_I5_188_5_226}>SystemOrange/Light</Text>
              </View>
              <View style={styles.View_I5_188_5_227}>
                <View style={styles.View_I5_188_5_228}>
                  <Text style={styles.Text_I5_188_5_228}>#FF9500</Text>
                </View>
                <View style={styles.View_I5_188_5_229}>
                  <Text style={styles.Text_I5_188_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_188_5_230}>
                  <Text style={styles.Text_I5_188_5_230}>RGB: 201,52,0</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_189}>
            <View style={styles.View_I5_189_5_224} />
            <View style={styles.View_I5_189_5_225}>
              <View style={styles.View_I5_189_5_226}>
                <Text style={styles.Text_I5_189_5_226}>SystemYellow/Light</Text>
              </View>
              <View style={styles.View_I5_189_5_227}>
                <View style={styles.View_I5_189_5_228}>
                  <Text style={styles.Text_I5_189_5_228}>#FFCC00</Text>
                </View>
                <View style={styles.View_I5_189_5_229}>
                  <Text style={styles.Text_I5_189_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_189_5_230}>
                  <Text style={styles.Text_I5_189_5_230}>RGB: 178,80,0</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_190}>
            <View style={styles.View_I5_190_5_224} />
            <View style={styles.View_I5_190_5_225}>
              <View style={styles.View_I5_190_5_226}>
                <Text style={styles.Text_I5_190_5_226}>SystemGreen/Light</Text>
              </View>
              <View style={styles.View_I5_190_5_227}>
                <View style={styles.View_I5_190_5_228}>
                  <Text style={styles.Text_I5_190_5_228}>#34C759</Text>
                </View>
                <View style={styles.View_I5_190_5_229}>
                  <Text style={styles.Text_I5_190_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_190_5_230}>
                  <Text style={styles.Text_I5_190_5_230}>RGB: 36,138</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_191}>
            <View style={styles.View_I5_191_5_224} />
            <View style={styles.View_I5_191_5_225}>
              <View style={styles.View_I5_191_5_226}>
                <Text style={styles.Text_I5_191_5_226}>SystemTeal/Light</Text>
              </View>
              <View style={styles.View_I5_191_5_227}>
                <View style={styles.View_I5_191_5_228}>
                  <Text style={styles.Text_I5_191_5_228}>#5AC8FA</Text>
                </View>
                <View style={styles.View_I5_191_5_229}>
                  <Text style={styles.Text_I5_191_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_191_5_230}>
                  <Text style={styles.Text_I5_191_5_230}>RGB: 0,113,164</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_192}>
            <View style={styles.View_I5_192_5_224} />
            <View style={styles.View_I5_192_5_225}>
              <View style={styles.View_I5_192_5_226}>
                <Text style={styles.Text_I5_192_5_226}>SystemBlue/Light</Text>
              </View>
              <View style={styles.View_I5_192_5_227}>
                <View style={styles.View_I5_192_5_228}>
                  <Text style={styles.Text_I5_192_5_228}>#007AFF</Text>
                </View>
                <View style={styles.View_I5_192_5_229}>
                  <Text style={styles.Text_I5_192_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_192_5_230}>
                  <Text style={styles.Text_I5_192_5_230}>RGB: 0,64,221</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_193}>
            <View style={styles.View_I5_193_5_224} />
            <View style={styles.View_I5_193_5_225}>
              <View style={styles.View_I5_193_5_226}>
                <Text style={styles.Text_I5_193_5_226}>SystemIndigo/Light</Text>
              </View>
              <View style={styles.View_I5_193_5_227}>
                <View style={styles.View_I5_193_5_228}>
                  <Text style={styles.Text_I5_193_5_228}>#5856D6</Text>
                </View>
                <View style={styles.View_I5_193_5_229}>
                  <Text style={styles.Text_I5_193_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_193_5_230}>
                  <Text style={styles.Text_I5_193_5_230}>RGB: 54,52,163</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_194}>
            <View style={styles.View_I5_194_5_224} />
            <View style={styles.View_I5_194_5_225}>
              <View style={styles.View_I5_194_5_226}>
                <Text style={styles.Text_I5_194_5_226}>SystemPurple/Light</Text>
              </View>
              <View style={styles.View_I5_194_5_227}>
                <View style={styles.View_I5_194_5_228}>
                  <Text style={styles.Text_I5_194_5_228}>#FF3B30</Text>
                </View>
                <View style={styles.View_I5_194_5_229}>
                  <Text style={styles.Text_I5_194_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_194_5_230}>
                  <Text style={styles.Text_I5_194_5_230}>RGB: 137,68,171</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_195}>
            <View style={styles.View_I5_195_5_224} />
            <View style={styles.View_I5_195_5_225}>
              <View style={styles.View_I5_195_5_226}>
                <Text style={styles.Text_I5_195_5_226}>SystemPink/Light</Text>
              </View>
              <View style={styles.View_I5_195_5_227}>
                <View style={styles.View_I5_195_5_228}>
                  <Text style={styles.Text_I5_195_5_228}>#FF2D55</Text>
                </View>
                <View style={styles.View_I5_195_5_229}>
                  <Text style={styles.Text_I5_195_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_195_5_230}>
                  <Text style={styles.Text_I5_195_5_230}>RGB: 211,15,69</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_5_196}>
          <View style={styles.View_5_197}>
            <View style={styles.View_I5_197_5_224} />
            <View style={styles.View_I5_197_5_225}>
              <View style={styles.View_I5_197_5_226}>
                <Text style={styles.Text_I5_197_5_226}>SystemGray/Light</Text>
              </View>
              <View style={styles.View_I5_197_5_227}>
                <View style={styles.View_I5_197_5_228}>
                  <Text style={styles.Text_I5_197_5_228}>#8E8E93</Text>
                </View>
                <View style={styles.View_I5_197_5_229}>
                  <Text style={styles.Text_I5_197_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_197_5_230}>
                  <Text style={styles.Text_I5_197_5_230}>RGB: 142,142,147</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_198}>
            <View style={styles.View_I5_198_5_224} />
            <View style={styles.View_I5_198_5_225}>
              <View style={styles.View_I5_198_5_226}>
                <Text style={styles.Text_I5_198_5_226}>
                  SystemGray/02/Light
                </Text>
              </View>
              <View style={styles.View_I5_198_5_227}>
                <View style={styles.View_I5_198_5_228}>
                  <Text style={styles.Text_I5_198_5_228}>#AEAEB2</Text>
                </View>
                <View style={styles.View_I5_198_5_229}>
                  <Text style={styles.Text_I5_198_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_198_5_230}>
                  <Text style={styles.Text_I5_198_5_230}>RGB: 174,174,178</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_199}>
            <View style={styles.View_I5_199_5_224} />
            <View style={styles.View_I5_199_5_225}>
              <View style={styles.View_I5_199_5_226}>
                <Text style={styles.Text_I5_199_5_226}>
                  SystemGray/03/Light
                </Text>
              </View>
              <View style={styles.View_I5_199_5_227}>
                <View style={styles.View_I5_199_5_228}>
                  <Text style={styles.Text_I5_199_5_228}>#C7C7CC</Text>
                </View>
                <View style={styles.View_I5_199_5_229}>
                  <Text style={styles.Text_I5_199_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_199_5_230}>
                  <Text style={styles.Text_I5_199_5_230}>RGB: 199,199,204</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_200}>
            <View style={styles.View_I5_200_5_224} />
            <View style={styles.View_I5_200_5_225}>
              <View style={styles.View_I5_200_5_226}>
                <Text style={styles.Text_I5_200_5_226}>
                  SystemGray/04/Light
                </Text>
              </View>
              <View style={styles.View_I5_200_5_227}>
                <View style={styles.View_I5_200_5_228}>
                  <Text style={styles.Text_I5_200_5_228}>#D1D1D6</Text>
                </View>
                <View style={styles.View_I5_200_5_229}>
                  <Text style={styles.Text_I5_200_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_200_5_230}>
                  <Text style={styles.Text_I5_200_5_230}>RGB: 209,209,214</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_201}>
            <View style={styles.View_I5_201_5_224} />
            <View style={styles.View_I5_201_5_225}>
              <View style={styles.View_I5_201_5_226}>
                <Text style={styles.Text_I5_201_5_226}>
                  SystemGray/05/Light
                </Text>
              </View>
              <View style={styles.View_I5_201_5_227}>
                <View style={styles.View_I5_201_5_228}>
                  <Text style={styles.Text_I5_201_5_228}>#E5E5EA</Text>
                </View>
                <View style={styles.View_I5_201_5_229}>
                  <Text style={styles.Text_I5_201_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_201_5_230}>
                  <Text style={styles.Text_I5_201_5_230}>RGB: 229,229,234</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_202}>
            <View style={styles.View_I5_202_5_224} />
            <View style={styles.View_I5_202_5_225}>
              <View style={styles.View_I5_202_5_226}>
                <Text style={styles.Text_I5_202_5_226}>
                  SystemGray/06/Light
                </Text>
              </View>
              <View style={styles.View_I5_202_5_227}>
                <View style={styles.View_I5_202_5_228}>
                  <Text style={styles.Text_I5_202_5_228}>#F2F2F7</Text>
                </View>
                <View style={styles.View_I5_202_5_229}>
                  <Text style={styles.Text_I5_202_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_202_5_230}>
                  <Text style={styles.Text_I5_202_5_230}>RGB: 242,242,247</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_5_203}>
        <View style={styles.View_5_204}>
          <Text style={styles.Text_5_204}>Dark Colors</Text>
        </View>
        <View style={styles.View_5_205}>
          <View style={styles.View_5_206}>
            <View style={styles.View_I5_206_5_224} />
            <View style={styles.View_I5_206_5_225}>
              <View style={styles.View_I5_206_5_226}>
                <Text style={styles.Text_I5_206_5_226}>SystemRed/Dark</Text>
              </View>
              <View style={styles.View_I5_206_5_227}>
                <View style={styles.View_I5_206_5_228}>
                  <Text style={styles.Text_I5_206_5_228}>#FF453A</Text>
                </View>
                <View style={styles.View_I5_206_5_229}>
                  <Text style={styles.Text_I5_206_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_206_5_230}>
                  <Text style={styles.Text_I5_206_5_230}>RGB: 255,105,97</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_207}>
            <View style={styles.View_I5_207_5_224} />
            <View style={styles.View_I5_207_5_225}>
              <View style={styles.View_I5_207_5_226}>
                <Text style={styles.Text_I5_207_5_226}>SystemOrange/Dark</Text>
              </View>
              <View style={styles.View_I5_207_5_227}>
                <View style={styles.View_I5_207_5_228}>
                  <Text style={styles.Text_I5_207_5_228}>#FF9F0A</Text>
                </View>
                <View style={styles.View_I5_207_5_229}>
                  <Text style={styles.Text_I5_207_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_207_5_230}>
                  <Text style={styles.Text_I5_207_5_230}>RGB: 255,179,64</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_208}>
            <View style={styles.View_I5_208_5_224} />
            <View style={styles.View_I5_208_5_225}>
              <View style={styles.View_I5_208_5_226}>
                <Text style={styles.Text_I5_208_5_226}>SystemYellow/Dark</Text>
              </View>
              <View style={styles.View_I5_208_5_227}>
                <View style={styles.View_I5_208_5_228}>
                  <Text style={styles.Text_I5_208_5_228}>#FFD60A</Text>
                </View>
                <View style={styles.View_I5_208_5_229}>
                  <Text style={styles.Text_I5_208_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_208_5_230}>
                  <Text style={styles.Text_I5_208_5_230}>RGB: 255,212,38</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_209}>
            <View style={styles.View_I5_209_5_224} />
            <View style={styles.View_I5_209_5_225}>
              <View style={styles.View_I5_209_5_226}>
                <Text style={styles.Text_I5_209_5_226}>SystemGreen/Dark</Text>
              </View>
              <View style={styles.View_I5_209_5_227}>
                <View style={styles.View_I5_209_5_228}>
                  <Text style={styles.Text_I5_209_5_228}>#32D74B</Text>
                </View>
                <View style={styles.View_I5_209_5_229}>
                  <Text style={styles.Text_I5_209_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_209_5_230}>
                  <Text style={styles.Text_I5_209_5_230}>RGB: 48,219,91</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_210}>
            <View style={styles.View_I5_210_5_224} />
            <View style={styles.View_I5_210_5_225}>
              <View style={styles.View_I5_210_5_226}>
                <Text style={styles.Text_I5_210_5_226}>SystemTeal/Dark</Text>
              </View>
              <View style={styles.View_I5_210_5_227}>
                <View style={styles.View_I5_210_5_228}>
                  <Text style={styles.Text_I5_210_5_228}>#64D2FF</Text>
                </View>
                <View style={styles.View_I5_210_5_229}>
                  <Text style={styles.Text_I5_210_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_210_5_230}>
                  <Text style={styles.Text_I5_210_5_230}>RGB: 112,215,255</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_211}>
            <View style={styles.View_I5_211_5_224} />
            <View style={styles.View_I5_211_5_225}>
              <View style={styles.View_I5_211_5_226}>
                <Text style={styles.Text_I5_211_5_226}>SystemBlue/Dark</Text>
              </View>
              <View style={styles.View_I5_211_5_227}>
                <View style={styles.View_I5_211_5_228}>
                  <Text style={styles.Text_I5_211_5_228}>#0A84FF</Text>
                </View>
                <View style={styles.View_I5_211_5_229}>
                  <Text style={styles.Text_I5_211_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_211_5_230}>
                  <Text style={styles.Text_I5_211_5_230}>RGB: 64,156,255</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_212}>
            <View style={styles.View_I5_212_5_224} />
            <View style={styles.View_I5_212_5_225}>
              <View style={styles.View_I5_212_5_226}>
                <Text style={styles.Text_I5_212_5_226}>SystemIndigo/Dark</Text>
              </View>
              <View style={styles.View_I5_212_5_227}>
                <View style={styles.View_I5_212_5_228}>
                  <Text style={styles.Text_I5_212_5_228}>#5E5CE6</Text>
                </View>
                <View style={styles.View_I5_212_5_229}>
                  <Text style={styles.Text_I5_212_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_212_5_230}>
                  <Text style={styles.Text_I5_212_5_230}>RGB: 125,122,255</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_213}>
            <View style={styles.View_I5_213_5_224} />
            <View style={styles.View_I5_213_5_225}>
              <View style={styles.View_I5_213_5_226}>
                <Text style={styles.Text_I5_213_5_226}>SystemPurple/Dark</Text>
              </View>
              <View style={styles.View_I5_213_5_227}>
                <View style={styles.View_I5_213_5_228}>
                  <Text style={styles.Text_I5_213_5_228}>#BF5AF2</Text>
                </View>
                <View style={styles.View_I5_213_5_229}>
                  <Text style={styles.Text_I5_213_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_213_5_230}>
                  <Text style={styles.Text_I5_213_5_230}>RGB: 218,143,255</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_214}>
            <View style={styles.View_I5_214_5_224} />
            <View style={styles.View_I5_214_5_225}>
              <View style={styles.View_I5_214_5_226}>
                <Text style={styles.Text_I5_214_5_226}>SystemPink/Dark</Text>
              </View>
              <View style={styles.View_I5_214_5_227}>
                <View style={styles.View_I5_214_5_228}>
                  <Text style={styles.Text_I5_214_5_228}>#FF2D55</Text>
                </View>
                <View style={styles.View_I5_214_5_229}>
                  <Text style={styles.Text_I5_214_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_214_5_230}>
                  <Text style={styles.Text_I5_214_5_230}>RGB: 255,100,130</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_5_215}>
          <View style={styles.View_5_216}>
            <View style={styles.View_I5_216_5_224} />
            <View style={styles.View_I5_216_5_225}>
              <View style={styles.View_I5_216_5_226}>
                <Text style={styles.Text_I5_216_5_226}>SystemGray/Dark</Text>
              </View>
              <View style={styles.View_I5_216_5_227}>
                <View style={styles.View_I5_216_5_228}>
                  <Text style={styles.Text_I5_216_5_228}>#FF3B30</Text>
                </View>
                <View style={styles.View_I5_216_5_229}>
                  <Text style={styles.Text_I5_216_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_216_5_230}>
                  <Text style={styles.Text_I5_216_5_230}>RGB: 174,174,178</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_217}>
            <View style={styles.View_I5_217_5_224} />
            <View style={styles.View_I5_217_5_225}>
              <View style={styles.View_I5_217_5_226}>
                <Text style={styles.Text_I5_217_5_226}>SystemGray/02/Dark</Text>
              </View>
              <View style={styles.View_I5_217_5_227}>
                <View style={styles.View_I5_217_5_228}>
                  <Text style={styles.Text_I5_217_5_228}>#636366</Text>
                </View>
                <View style={styles.View_I5_217_5_229}>
                  <Text style={styles.Text_I5_217_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_217_5_230}>
                  <Text style={styles.Text_I5_217_5_230}>RGB: 124,124,128</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_218}>
            <View style={styles.View_I5_218_5_224} />
            <View style={styles.View_I5_218_5_225}>
              <View style={styles.View_I5_218_5_226}>
                <Text style={styles.Text_I5_218_5_226}>SystemGray/03/Dark</Text>
              </View>
              <View style={styles.View_I5_218_5_227}>
                <View style={styles.View_I5_218_5_228}>
                  <Text style={styles.Text_I5_218_5_228}>#48484A</Text>
                </View>
                <View style={styles.View_I5_218_5_229}>
                  <Text style={styles.Text_I5_218_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_218_5_230}>
                  <Text style={styles.Text_I5_218_5_230}>RGB: 84,84,86</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_219}>
            <View style={styles.View_I5_219_5_224} />
            <View style={styles.View_I5_219_5_225}>
              <View style={styles.View_I5_219_5_226}>
                <Text style={styles.Text_I5_219_5_226}>SystemGray/04/Dark</Text>
              </View>
              <View style={styles.View_I5_219_5_227}>
                <View style={styles.View_I5_219_5_228}>
                  <Text style={styles.Text_I5_219_5_228}>#3A3A3C</Text>
                </View>
                <View style={styles.View_I5_219_5_229}>
                  <Text style={styles.Text_I5_219_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_219_5_230}>
                  <Text style={styles.Text_I5_219_5_230}>RGB: 68,68,70</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_220}>
            <View style={styles.View_I5_220_5_224} />
            <View style={styles.View_I5_220_5_225}>
              <View style={styles.View_I5_220_5_226}>
                <Text style={styles.Text_I5_220_5_226}>SystemGray/05/Dark</Text>
              </View>
              <View style={styles.View_I5_220_5_227}>
                <View style={styles.View_I5_220_5_228}>
                  <Text style={styles.Text_I5_220_5_228}>#2C2C2E</Text>
                </View>
                <View style={styles.View_I5_220_5_229}>
                  <Text style={styles.Text_I5_220_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_220_5_230}>
                  <Text style={styles.Text_I5_220_5_230}>RGB: 54,54,56</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_5_221}>
            <View style={styles.View_I5_221_5_224} />
            <View style={styles.View_I5_221_5_225}>
              <View style={styles.View_I5_221_5_226}>
                <Text style={styles.Text_I5_221_5_226}>SystemGray/06/Dark</Text>
              </View>
              <View style={styles.View_I5_221_5_227}>
                <View style={styles.View_I5_221_5_228}>
                  <Text style={styles.Text_I5_221_5_228}>#1C1C1E</Text>
                </View>
                <View style={styles.View_I5_221_5_229}>
                  <Text style={styles.Text_I5_221_5_229}>•</Text>
                </View>
                <View style={styles.View_I5_221_5_230}>
                  <Text style={styles.Text_I5_221_5_230}>RGB: 36,36,38</Text>
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
  View_2: { height: hp("415.71038251366116%") },
  View_140_5502: {
    width: wp("95.59228650137742%"),
    minWidth: wp("95.59228650137742%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.203856749311295%"),
    top: hp("8.743169398907105%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_1898: {
    flexGrow: 1,
    width: wp("95.59228650137742%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1898_5_19: {
    flexGrow: 1,
    width: wp("95.59228650137742%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1898_5_20: {
    width: wp("84.22865013774104%"),
    minWidth: wp("84.22865013774104%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_1898_5_21: {
    width: wp("1.9283746556473829%"),
    minWidth: wp("1.9283746556473829%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_1898_5_22: {
    width: wp("81.19834710743802%"),
    minWidth: wp("81.19834710743802%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0303030303030303%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_1898_5_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_1898_5_23: {
    width: wp("10.261707988980715%"),
    minWidth: wp("10.261707988980715%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.33057851239668%"),
    top: hp("2.185792349726775%"),
    justifyContent: "center"
  },
  Text_I5_1898_5_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_1898_5_24: {
    flexGrow: 1,
    width: wp("95.59228650137742%"),
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
  ImageBackground_140_5503: {
    width: wp("1.9283746556473829%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_144: {
    width: wp("2.7548209366391188%"),
    minWidth: wp("2.7548209366391188%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.203856749311295%"),
    top: hp("29.6448087431694%"),
    justifyContent: "center"
  },
  Text_5_144: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_145: {
    width: wp("95.59228650137742%"),
    minWidth: wp("95.59228650137742%"),
    height: hp("81.4207650273224%"),
    minHeight: hp("81.4207650273224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.203856749311295%"),
    top: hp("42.349726775956285%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_146: {
    width: wp("4.75206611570248%"),
    minWidth: wp("4.75206611570248%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_5_146: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_147: {
    width: wp("95.59228650137742%"),
    minWidth: wp("95.59228650137742%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_148: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_148_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278239%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(255, 59, 48, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_148_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278239%"),
    top: hp("24.863387978142086%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_148_5_226: {
    width: wp("5.957300275482093%"),
    minWidth: wp("5.957300275482093%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_148_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_148_5_227: {
    width: wp("7.403581267217631%"),
    minWidth: wp("7.403581267217631%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_148_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_148_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_148_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672175%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_148_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_148_5_230: {
    width: wp("4.3732782369146%"),
    minWidth: wp("4.3732782369146%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0303030303030303%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_148_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_149: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.74380165289256%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_149_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278248%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(255, 149, 0, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_149_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278248%"),
    top: hp("24.863387978142086%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_149_5_226: {
    width: wp("7.128099173553719%"),
    minWidth: wp("7.128099173553719%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_149_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_149_5_227: {
    width: wp("7.403581267217631%"),
    minWidth: wp("7.403581267217631%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_149_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_149_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_149_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672157%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_149_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_149_5_230: {
    width: wp("4.3732782369146%"),
    minWidth: wp("4.3732782369146%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.030303030303031%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_149_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_150: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.487603305785125%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_150_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(255, 204, 0, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_150_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("24.863387978142086%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_150_5_226: {
    width: wp("7.128099173553719%"),
    minWidth: wp("7.128099173553719%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_150_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_150_5_227: {
    width: wp("7.403581267217631%"),
    minWidth: wp("7.403581267217631%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_150_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_150_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_150_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672157%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_150_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_150_5_230: {
    width: wp("4.3732782369146%"),
    minWidth: wp("4.3732782369146%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0303030303030276%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_150_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_151: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.231404958677686%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_151_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(52, 199, 89, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_151_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("24.863387978142086%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_151_5_226: {
    width: wp("6.749311294765841%"),
    minWidth: wp("6.749311294765841%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_151_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_151_5_227: {
    width: wp("7.403581267217631%"),
    minWidth: wp("7.403581267217631%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_151_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_151_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_151_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672264%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_151_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_151_5_230: {
    width: wp("4.3732782369146%"),
    minWidth: wp("4.3732782369146%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0303030303030383%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_151_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_152: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.97520661157025%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_152_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278284%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(90, 200, 250, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_152_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278284%"),
    top: hp("24.863387978142086%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_152_5_226: {
    width: wp("6.336088154269973%"),
    minWidth: wp("6.336088154269973%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_152_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_152_5_227: {
    width: wp("7.7134986225895315%"),
    minWidth: wp("7.7134986225895315%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_152_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_152_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_152_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.444903581267212%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_152_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_152_5_230: {
    width: wp("4.683195592286501%"),
    minWidth: wp("4.683195592286501%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.030303030303024%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_152_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_153: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.71900826446281%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_153_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278355%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(0, 122, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_153_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278355%"),
    top: hp("24.863387978142086%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_153_5_226: {
    width: wp("6.336088154269973%"),
    minWidth: wp("6.336088154269973%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_153_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_153_5_227: {
    width: wp("7.403581267217631%"),
    minWidth: wp("7.403581267217631%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_153_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_153_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_153_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.444903581267205%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_153_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_153_5_230: {
    width: wp("4.3732782369146%"),
    minWidth: wp("4.3732782369146%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.030303030303024%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_153_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_154: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.46280991735536%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_154_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278355%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(88, 86, 214, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_154_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278355%"),
    top: hp("24.863387978142086%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_154_5_226: {
    width: wp("7.128099173553719%"),
    minWidth: wp("7.128099173553719%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_154_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_154_5_227: {
    width: wp("7.403581267217631%"),
    minWidth: wp("7.403581267217631%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_154_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_154_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_154_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.444903581267212%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_154_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_154_5_230: {
    width: wp("4.3732782369146%"),
    minWidth: wp("4.3732782369146%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.030303030303031%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_154_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_155: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.20661157024793%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_155_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(175, 82, 222, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_155_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("24.863387978142086%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_155_5_226: {
    width: wp("7.128099173553719%"),
    minWidth: wp("7.128099173553719%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_155_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_155_5_227: {
    width: wp("7.7134986225895315%"),
    minWidth: wp("7.7134986225895315%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_155_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_155_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_155_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672264%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_155_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_155_5_230: {
    width: wp("4.683195592286501%"),
    minWidth: wp("4.683195592286501%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.030303030303031%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_155_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_156: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.9504132231405%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_156_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.550964187327807%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(255, 45, 85, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_156_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.550964187327807%"),
    top: hp("24.863387978142086%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_156_5_226: {
    width: wp("6.336088154269973%"),
    minWidth: wp("6.336088154269973%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_156_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_156_5_227: {
    width: wp("7.403581267217631%"),
    minWidth: wp("7.403581267217631%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_156_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_156_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_156_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672264%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_156_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_156_5_230: {
    width: wp("4.3732782369146%"),
    minWidth: wp("4.3732782369146%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0303030303030454%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_156_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_157: {
    width: wp("63.36088154269972%"),
    minWidth: wp("63.36088154269972%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("46.721311475409834%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_158: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_158_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278239%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(142, 142, 147, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_158_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278239%"),
    top: hp("24.863387978142086%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_158_5_226: {
    width: wp("6.336088154269973%"),
    minWidth: wp("6.336088154269973%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_158_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_158_5_227: {
    width: wp("8.023415977961433%"),
    minWidth: wp("8.023415977961433%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.37158469945355%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_158_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_158_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_158_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672175%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_158_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_158_5_230: {
    width: wp("4.993112947658402%"),
    minWidth: wp("4.993112947658402%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0303030303030303%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_158_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_159: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.74380165289256%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_159_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278248%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(174, 174, 178, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_159_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278248%"),
    top: hp("24.863387978142086%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_159_5_226: {
    width: wp("7.541322314049586%"),
    minWidth: wp("7.541322314049586%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_159_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_159_5_227: {
    width: wp("8.023415977961433%"),
    minWidth: wp("8.023415977961433%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.37158469945355%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_159_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_159_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_159_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672157%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_159_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_159_5_230: {
    width: wp("4.993112947658402%"),
    minWidth: wp("4.993112947658402%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.030303030303031%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_159_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_160: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.487603305785125%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_160_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(199, 199, 204, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_160_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("24.863387978142086%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_160_5_226: {
    width: wp("7.541322314049586%"),
    minWidth: wp("7.541322314049586%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_160_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_160_5_227: {
    width: wp("8.023415977961433%"),
    minWidth: wp("8.023415977961433%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.37158469945355%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_160_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_160_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_160_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672157%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_160_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_160_5_230: {
    width: wp("4.993112947658402%"),
    minWidth: wp("4.993112947658402%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0303030303030276%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_160_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_161: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.231404958677686%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_161_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(209, 209, 214, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_161_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("24.863387978142086%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_161_5_226: {
    width: wp("7.541322314049586%"),
    minWidth: wp("7.541322314049586%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_161_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_161_5_227: {
    width: wp("8.023415977961433%"),
    minWidth: wp("8.023415977961433%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.37158469945355%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_161_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_161_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_161_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672264%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_161_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_161_5_230: {
    width: wp("4.993112947658402%"),
    minWidth: wp("4.993112947658402%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0303030303030383%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_161_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_162: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.97520661157025%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_162_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278284%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(229, 229, 234, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_162_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278284%"),
    top: hp("24.863387978142086%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_162_5_226: {
    width: wp("7.541322314049586%"),
    minWidth: wp("7.541322314049586%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_162_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_162_5_227: {
    width: wp("8.023415977961433%"),
    minWidth: wp("8.023415977961433%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.37158469945355%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_162_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_162_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_162_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.444903581267212%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_162_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_162_5_230: {
    width: wp("4.993112947658402%"),
    minWidth: wp("4.993112947658402%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.030303030303024%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_162_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_163: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.71900826446281%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_163_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278355%"),
    top: hp("2.185792349726782%"),
    backgroundColor: "rgba(242, 242, 247, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_163_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278355%"),
    top: hp("24.863387978142086%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_163_5_226: {
    width: wp("7.541322314049586%"),
    minWidth: wp("7.541322314049586%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_163_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_163_5_227: {
    width: wp("8.023415977961433%"),
    minWidth: wp("8.023415977961433%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.37158469945355%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_163_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_163_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_163_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.444903581267205%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_163_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_163_5_230: {
    width: wp("4.993112947658402%"),
    minWidth: wp("4.993112947658402%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.030303030303024%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_163_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_8_4751: {
    width: wp("95.59228650137742%"),
    minWidth: wp("95.59228650137742%"),
    height: hp("81.4207650273224%"),
    minHeight: hp("81.4207650273224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.203856749311295%"),
    top: hp("132.5136612021858%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_165: {
    width: wp("4.3732782369146%"),
    minWidth: wp("4.3732782369146%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_5_165: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_166: {
    width: wp("95.59228650137742%"),
    minWidth: wp("95.59228650137742%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043701%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_167: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_167_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278239%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(255, 69, 58, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_167_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278239%"),
    top: hp("24.8633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_167_5_226: {
    width: wp("5.5440771349862255%"),
    minWidth: wp("5.5440771349862255%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_167_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_167_5_227: {
    width: wp("7.403581267217631%"),
    minWidth: wp("7.403581267217631%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_167_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_167_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_167_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672175%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_167_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_167_5_230: {
    width: wp("4.3732782369146%"),
    minWidth: wp("4.3732782369146%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0303030303030303%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_167_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_168: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.74380165289256%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_168_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278248%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(255, 159, 10, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_168_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278248%"),
    top: hp("24.8633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_168_5_226: {
    width: wp("6.749311294765841%"),
    minWidth: wp("6.749311294765841%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_168_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_168_5_227: {
    width: wp("7.7134986225895315%"),
    minWidth: wp("7.7134986225895315%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_168_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_168_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_168_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672157%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_168_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_168_5_230: {
    width: wp("4.683195592286501%"),
    minWidth: wp("4.683195592286501%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.030303030303031%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_168_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_169: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.487603305785125%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_169_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(255, 214, 10, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_169_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("24.8633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_169_5_226: {
    width: wp("6.749311294765841%"),
    minWidth: wp("6.749311294765841%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_169_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_169_5_227: {
    width: wp("7.7134986225895315%"),
    minWidth: wp("7.7134986225895315%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_169_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_169_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_169_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672157%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_169_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_169_5_230: {
    width: wp("4.683195592286501%"),
    minWidth: wp("4.683195592286501%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0303030303030276%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_169_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_170: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.231404958677686%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_170_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(50, 215, 75, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_170_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("24.8633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_170_5_226: {
    width: wp("6.336088154269973%"),
    minWidth: wp("6.336088154269973%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_170_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_170_5_227: {
    width: wp("7.403581267217631%"),
    minWidth: wp("7.403581267217631%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_170_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_170_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_170_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672264%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_170_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_170_5_230: {
    width: wp("4.3732782369146%"),
    minWidth: wp("4.3732782369146%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0303030303030383%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_170_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_171: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.97520661157025%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_171_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278284%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(100, 210, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_171_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278284%"),
    top: hp("24.8633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_171_5_226: {
    width: wp("5.957300275482093%"),
    minWidth: wp("5.957300275482093%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_171_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_171_5_227: {
    width: wp("8.023415977961433%"),
    minWidth: wp("8.023415977961433%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_171_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_171_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_171_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.444903581267212%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_171_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_171_5_230: {
    width: wp("4.993112947658402%"),
    minWidth: wp("4.993112947658402%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.030303030303024%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_171_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_172: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.71900826446281%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_172_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278355%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(10, 132, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_172_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278355%"),
    top: hp("24.8633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_172_5_226: {
    width: wp("5.957300275482093%"),
    minWidth: wp("5.957300275482093%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_172_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_172_5_227: {
    width: wp("7.7134986225895315%"),
    minWidth: wp("7.7134986225895315%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_172_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_172_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_172_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.444903581267205%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_172_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_172_5_230: {
    width: wp("4.683195592286501%"),
    minWidth: wp("4.683195592286501%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.030303030303024%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_172_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_173: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.46280991735536%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_173_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278355%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(94, 92, 230, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_173_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278355%"),
    top: hp("24.8633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_173_5_226: {
    width: wp("6.749311294765841%"),
    minWidth: wp("6.749311294765841%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_173_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_173_5_227: {
    width: wp("7.403581267217631%"),
    minWidth: wp("7.403581267217631%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_173_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_173_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_173_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.444903581267212%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_173_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_173_5_230: {
    width: wp("4.3732782369146%"),
    minWidth: wp("4.3732782369146%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.030303030303031%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_173_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_174: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.20661157024793%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_174_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(191, 90, 242, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_174_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("24.8633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_174_5_226: {
    width: wp("6.749311294765841%"),
    minWidth: wp("6.749311294765841%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_174_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_174_5_227: {
    width: wp("7.7134986225895315%"),
    minWidth: wp("7.7134986225895315%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_174_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_174_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_174_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672264%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_174_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_174_5_230: {
    width: wp("4.683195592286501%"),
    minWidth: wp("4.683195592286501%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.030303030303031%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_174_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_175: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.9504132231405%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_175_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.550964187327807%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(255, 45, 85, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_175_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.550964187327807%"),
    top: hp("24.8633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_175_5_226: {
    width: wp("5.957300275482093%"),
    minWidth: wp("5.957300275482093%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_175_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_175_5_227: {
    width: wp("7.403581267217631%"),
    minWidth: wp("7.403581267217631%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_175_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_175_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_175_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672264%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_175_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_175_5_230: {
    width: wp("4.3732782369146%"),
    minWidth: wp("4.3732782369146%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0303030303030454%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_175_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_176: {
    width: wp("63.36088154269972%"),
    minWidth: wp("63.36088154269972%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("46.721311475409834%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_177: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_177_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278239%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(142, 142, 147, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_177_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278239%"),
    top: hp("24.86338797814207%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_177_5_226: {
    width: wp("5.957300275482093%"),
    minWidth: wp("5.957300275482093%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_177_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_177_5_227: {
    width: wp("8.023415977961433%"),
    minWidth: wp("8.023415977961433%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_177_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_177_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_177_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672175%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_177_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_177_5_230: {
    width: wp("4.993112947658402%"),
    minWidth: wp("4.993112947658402%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0303030303030303%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_177_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_178: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.74380165289256%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_178_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278248%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(99, 99, 102, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_178_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278248%"),
    top: hp("24.86338797814207%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_178_5_226: {
    width: wp("7.128099173553719%"),
    minWidth: wp("7.128099173553719%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_178_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_178_5_227: {
    width: wp("7.403581267217631%"),
    minWidth: wp("7.403581267217631%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_178_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_178_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_178_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672157%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_178_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_178_5_230: {
    width: wp("4.3732782369146%"),
    minWidth: wp("4.3732782369146%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.030303030303031%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_178_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_179: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.487603305785125%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_179_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(72, 72, 74, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_179_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("24.86338797814207%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_179_5_226: {
    width: wp("7.128099173553719%"),
    minWidth: wp("7.128099173553719%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_179_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_179_5_227: {
    width: wp("7.09366391184573%"),
    minWidth: wp("7.09366391184573%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_179_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_179_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_179_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672157%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_179_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_179_5_230: {
    width: wp("4.0633608815427%"),
    minWidth: wp("4.0633608815427%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0303030303030276%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_179_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_180: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.231404958677686%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_180_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(58, 58, 60, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_180_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("24.86338797814207%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_180_5_226: {
    width: wp("7.128099173553719%"),
    minWidth: wp("7.128099173553719%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_180_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_180_5_227: {
    width: wp("7.09366391184573%"),
    minWidth: wp("7.09366391184573%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_180_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_180_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_180_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672264%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_180_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_180_5_230: {
    width: wp("4.0633608815427%"),
    minWidth: wp("4.0633608815427%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0303030303030383%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_180_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_181: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.97520661157025%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_181_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278284%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(28, 28, 30, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_181_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278284%"),
    top: hp("24.86338797814207%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_181_5_226: {
    width: wp("7.128099173553719%"),
    minWidth: wp("7.128099173553719%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_181_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_181_5_227: {
    width: wp("7.09366391184573%"),
    minWidth: wp("7.09366391184573%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_181_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_181_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_181_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.444903581267212%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_181_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_181_5_230: {
    width: wp("4.0633608815427%"),
    minWidth: wp("4.0633608815427%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.030303030303024%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_181_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_182: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.71900826446281%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_182_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278355%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(28, 28, 30, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_182_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278355%"),
    top: hp("24.86338797814207%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_182_5_226: {
    width: wp("7.128099173553719%"),
    minWidth: wp("7.128099173553719%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_182_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_182_5_227: {
    width: wp("7.09366391184573%"),
    minWidth: wp("7.09366391184573%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_182_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_182_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_182_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.444903581267205%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_182_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_182_5_230: {
    width: wp("4.0633608815427%"),
    minWidth: wp("4.0633608815427%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.030303030303024%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_182_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_183: {
    width: wp("4.132231404958678%"),
    minWidth: wp("4.132231404958678%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.203856749311295%"),
    top: hp("222.6775956284153%"),
    justifyContent: "center"
  },
  Text_5_183: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_184: {
    width: wp("95.59228650137742%"),
    minWidth: wp("95.59228650137742%"),
    height: hp("81.4207650273224%"),
    minHeight: hp("81.4207650273224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.203856749311295%"),
    top: hp("235.38251366120218%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_185: {
    width: wp("4.75206611570248%"),
    minWidth: wp("4.75206611570248%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_5_185: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_186: {
    width: wp("95.59228650137742%"),
    minWidth: wp("95.59228650137742%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.65027322404373%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_187: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_187_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278239%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(215, 0, 21, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_187_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278239%"),
    top: hp("24.8633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_187_5_226: {
    width: wp("5.957300275482093%"),
    minWidth: wp("5.957300275482093%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_187_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_187_5_227: {
    width: wp("7.09366391184573%"),
    minWidth: wp("7.09366391184573%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_187_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_187_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_187_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672175%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_187_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_187_5_230: {
    width: wp("4.0633608815427%"),
    minWidth: wp("4.0633608815427%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0303030303030303%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_187_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_188: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.74380165289256%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_188_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278248%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(201, 52, 0, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_188_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278248%"),
    top: hp("24.8633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_188_5_226: {
    width: wp("7.128099173553719%"),
    minWidth: wp("7.128099173553719%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_188_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_188_5_227: {
    width: wp("7.09366391184573%"),
    minWidth: wp("7.09366391184573%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_188_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_188_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_188_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672157%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_188_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_188_5_230: {
    width: wp("4.0633608815427%"),
    minWidth: wp("4.0633608815427%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.030303030303031%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_188_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_189: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.487603305785125%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_189_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(178, 80, 0, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_189_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("24.8633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_189_5_226: {
    width: wp("7.128099173553719%"),
    minWidth: wp("7.128099173553719%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_189_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_189_5_227: {
    width: wp("7.09366391184573%"),
    minWidth: wp("7.09366391184573%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_189_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_189_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_189_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672157%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_189_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_189_5_230: {
    width: wp("4.0633608815427%"),
    minWidth: wp("4.0633608815427%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0303030303030276%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_189_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_190: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.231404958677686%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_190_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(36, 138, 61, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_190_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("24.8633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_190_5_226: {
    width: wp("6.749311294765841%"),
    minWidth: wp("6.749311294765841%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_190_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_190_5_227: {
    width: wp("6.4393939393939394%"),
    minWidth: wp("6.4393939393939394%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_190_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_190_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_190_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672264%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_190_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_190_5_230: {
    width: wp("3.4090909090909087%"),
    minWidth: wp("3.4090909090909087%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0303030303030383%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_190_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_191: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.97520661157025%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_191_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278284%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 113, 164, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_191_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278284%"),
    top: hp("24.8633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_191_5_226: {
    width: wp("6.336088154269973%"),
    minWidth: wp("6.336088154269973%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_191_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_191_5_227: {
    width: wp("7.403581267217631%"),
    minWidth: wp("7.403581267217631%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_191_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_191_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_191_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.444903581267212%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_191_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_191_5_230: {
    width: wp("4.3732782369146%"),
    minWidth: wp("4.3732782369146%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.030303030303024%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_191_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_192: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.71900826446281%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_192_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278355%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 64, 221, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_192_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278355%"),
    top: hp("24.8633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_192_5_226: {
    width: wp("6.336088154269973%"),
    minWidth: wp("6.336088154269973%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_192_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_192_5_227: {
    width: wp("7.09366391184573%"),
    minWidth: wp("7.09366391184573%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_192_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_192_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_192_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.444903581267205%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_192_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_192_5_230: {
    width: wp("4.0633608815427%"),
    minWidth: wp("4.0633608815427%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.030303030303024%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_192_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_193: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.46280991735536%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_193_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278355%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(54, 52, 163, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_193_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278355%"),
    top: hp("24.8633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_193_5_226: {
    width: wp("7.128099173553719%"),
    minWidth: wp("7.128099173553719%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_193_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_193_5_227: {
    width: wp("7.403581267217631%"),
    minWidth: wp("7.403581267217631%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_193_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_193_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_193_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.444903581267212%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_193_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_193_5_230: {
    width: wp("4.3732782369146%"),
    minWidth: wp("4.3732782369146%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.030303030303031%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_193_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_194: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.20661157024793%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_194_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(137, 68, 171, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_194_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("24.8633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_194_5_226: {
    width: wp("7.128099173553719%"),
    minWidth: wp("7.128099173553719%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_194_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_194_5_227: {
    width: wp("7.7134986225895315%"),
    minWidth: wp("7.7134986225895315%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_194_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_194_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_194_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672264%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_194_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_194_5_230: {
    width: wp("4.683195592286501%"),
    minWidth: wp("4.683195592286501%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.030303030303031%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_194_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_195: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.9504132231405%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_195_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.550964187327807%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(211, 15, 69, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_195_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.550964187327807%"),
    top: hp("24.8633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_195_5_226: {
    width: wp("6.336088154269973%"),
    minWidth: wp("6.336088154269973%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_195_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_195_5_227: {
    width: wp("7.403581267217631%"),
    minWidth: wp("7.403581267217631%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_195_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_195_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_195_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672264%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_195_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_195_5_230: {
    width: wp("4.3732782369146%"),
    minWidth: wp("4.3732782369146%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0303030303030454%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_195_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_196: {
    width: wp("63.36088154269972%"),
    minWidth: wp("63.36088154269972%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("46.721311475409806%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_197: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_197_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278239%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(108, 108, 112, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_197_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278239%"),
    top: hp("24.8633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_197_5_226: {
    width: wp("6.336088154269973%"),
    minWidth: wp("6.336088154269973%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_197_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_197_5_227: {
    width: wp("8.023415977961433%"),
    minWidth: wp("8.023415977961433%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.371584699453592%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_197_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_197_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_197_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672175%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_197_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_197_5_230: {
    width: wp("4.993112947658402%"),
    minWidth: wp("4.993112947658402%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0303030303030303%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_197_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_198: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.74380165289256%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_198_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278248%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(142, 142, 147, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_198_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278248%"),
    top: hp("24.8633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_198_5_226: {
    width: wp("7.541322314049586%"),
    minWidth: wp("7.541322314049586%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_198_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_198_5_227: {
    width: wp("8.023415977961433%"),
    minWidth: wp("8.023415977961433%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.371584699453592%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_198_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_198_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_198_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672157%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_198_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_198_5_230: {
    width: wp("4.993112947658402%"),
    minWidth: wp("4.993112947658402%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.030303030303031%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_198_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_199: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.487603305785125%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_199_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(174, 174, 178, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_199_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("24.8633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_199_5_226: {
    width: wp("7.541322314049586%"),
    minWidth: wp("7.541322314049586%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_199_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_199_5_227: {
    width: wp("8.023415977961433%"),
    minWidth: wp("8.023415977961433%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.371584699453592%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_199_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_199_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_199_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672157%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_199_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_199_5_230: {
    width: wp("4.993112947658402%"),
    minWidth: wp("4.993112947658402%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0303030303030276%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_199_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_200: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.231404958677686%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_200_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(188, 188, 192, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_200_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("24.8633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_200_5_226: {
    width: wp("7.541322314049586%"),
    minWidth: wp("7.541322314049586%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_200_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_200_5_227: {
    width: wp("8.023415977961433%"),
    minWidth: wp("8.023415977961433%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.371584699453592%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_200_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_200_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_200_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672264%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_200_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_200_5_230: {
    width: wp("4.993112947658402%"),
    minWidth: wp("4.993112947658402%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0303030303030383%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_200_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_201: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.97520661157025%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_201_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278284%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(216, 216, 220, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_201_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278284%"),
    top: hp("24.8633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_201_5_226: {
    width: wp("7.541322314049586%"),
    minWidth: wp("7.541322314049586%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_201_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_201_5_227: {
    width: wp("8.023415977961433%"),
    minWidth: wp("8.023415977961433%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.371584699453592%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_201_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_201_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_201_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.444903581267212%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_201_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_201_5_230: {
    width: wp("4.993112947658402%"),
    minWidth: wp("4.993112947658402%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.030303030303024%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_201_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_202: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.71900826446281%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_202_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278355%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(235, 235, 240, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_202_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278355%"),
    top: hp("24.8633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_202_5_226: {
    width: wp("7.541322314049586%"),
    minWidth: wp("7.541322314049586%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_202_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_202_5_227: {
    width: wp("8.023415977961433%"),
    minWidth: wp("8.023415977961433%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.371584699453592%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_202_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_202_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_202_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.444903581267205%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_202_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_202_5_230: {
    width: wp("4.993112947658402%"),
    minWidth: wp("4.993112947658402%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.030303030303024%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_202_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_203: {
    width: wp("95.59228650137742%"),
    minWidth: wp("95.59228650137742%"),
    height: hp("81.4207650273224%"),
    minHeight: hp("81.4207650273224%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.203856749311295%"),
    top: hp("325.54644808743166%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_204: {
    width: wp("4.3732782369146%"),
    minWidth: wp("4.3732782369146%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_5_204: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_205: {
    width: wp("95.59228650137742%"),
    minWidth: wp("95.59228650137742%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043758%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_206: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_206_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278239%"),
    top: hp("2.1857923497267393%"),
    backgroundColor: "rgba(255, 105, 97, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_206_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278239%"),
    top: hp("24.8633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_206_5_226: {
    width: wp("5.5440771349862255%"),
    minWidth: wp("5.5440771349862255%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_206_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_206_5_227: {
    width: wp("7.7134986225895315%"),
    minWidth: wp("7.7134986225895315%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_206_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_206_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_206_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672175%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_206_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_206_5_230: {
    width: wp("4.683195592286501%"),
    minWidth: wp("4.683195592286501%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0303030303030303%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_206_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_207: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.74380165289256%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_207_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278248%"),
    top: hp("2.1857923497267393%"),
    backgroundColor: "rgba(255, 179, 64, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_207_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278248%"),
    top: hp("24.8633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_207_5_226: {
    width: wp("6.749311294765841%"),
    minWidth: wp("6.749311294765841%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_207_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_207_5_227: {
    width: wp("7.7134986225895315%"),
    minWidth: wp("7.7134986225895315%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_207_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_207_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_207_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672157%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_207_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_207_5_230: {
    width: wp("4.683195592286501%"),
    minWidth: wp("4.683195592286501%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.030303030303031%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_207_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_208: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.487603305785125%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_208_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("2.1857923497267393%"),
    backgroundColor: "rgba(255, 212, 38, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_208_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("24.8633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_208_5_226: {
    width: wp("6.749311294765841%"),
    minWidth: wp("6.749311294765841%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_208_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_208_5_227: {
    width: wp("7.7134986225895315%"),
    minWidth: wp("7.7134986225895315%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_208_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_208_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_208_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672157%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_208_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_208_5_230: {
    width: wp("4.683195592286501%"),
    minWidth: wp("4.683195592286501%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0303030303030276%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_208_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_209: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.231404958677686%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_209_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("2.1857923497267393%"),
    backgroundColor: "rgba(48, 219, 91, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_209_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("24.8633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_209_5_226: {
    width: wp("6.336088154269973%"),
    minWidth: wp("6.336088154269973%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_209_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_209_5_227: {
    width: wp("7.403581267217631%"),
    minWidth: wp("7.403581267217631%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_209_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_209_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_209_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672264%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_209_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_209_5_230: {
    width: wp("4.3732782369146%"),
    minWidth: wp("4.3732782369146%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0303030303030383%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_209_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_210: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.97520661157025%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_210_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278284%"),
    top: hp("2.1857923497267393%"),
    backgroundColor: "rgba(112, 215, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_210_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278284%"),
    top: hp("24.8633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_210_5_226: {
    width: wp("5.957300275482093%"),
    minWidth: wp("5.957300275482093%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_210_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_210_5_227: {
    width: wp("8.023415977961433%"),
    minWidth: wp("8.023415977961433%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_210_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_210_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_210_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.444903581267212%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_210_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_210_5_230: {
    width: wp("4.993112947658402%"),
    minWidth: wp("4.993112947658402%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.030303030303024%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_210_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_211: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.71900826446281%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_211_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278355%"),
    top: hp("2.1857923497267393%"),
    backgroundColor: "rgba(64, 156, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_211_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278355%"),
    top: hp("24.8633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_211_5_226: {
    width: wp("5.957300275482093%"),
    minWidth: wp("5.957300275482093%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_211_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_211_5_227: {
    width: wp("7.7134986225895315%"),
    minWidth: wp("7.7134986225895315%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_211_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_211_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_211_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.444903581267205%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_211_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_211_5_230: {
    width: wp("4.683195592286501%"),
    minWidth: wp("4.683195592286501%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.030303030303024%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_211_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_212: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.46280991735536%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_212_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278355%"),
    top: hp("2.1857923497267393%"),
    backgroundColor: "rgba(125, 122, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_212_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278355%"),
    top: hp("24.8633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_212_5_226: {
    width: wp("6.749311294765841%"),
    minWidth: wp("6.749311294765841%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_212_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_212_5_227: {
    width: wp("8.023415977961433%"),
    minWidth: wp("8.023415977961433%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_212_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_212_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_212_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.444903581267212%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_212_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_212_5_230: {
    width: wp("4.993112947658402%"),
    minWidth: wp("4.993112947658402%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.030303030303031%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_212_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_213: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.20661157024793%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_213_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("2.1857923497267393%"),
    backgroundColor: "rgba(218, 143, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_213_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("24.8633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_213_5_226: {
    width: wp("6.749311294765841%"),
    minWidth: wp("6.749311294765841%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_213_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_213_5_227: {
    width: wp("8.023415977961433%"),
    minWidth: wp("8.023415977961433%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_213_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_213_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_213_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672264%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_213_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_213_5_230: {
    width: wp("4.993112947658402%"),
    minWidth: wp("4.993112947658402%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.030303030303031%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_213_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_214: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.9504132231405%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_214_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.550964187327807%"),
    top: hp("2.1857923497267393%"),
    backgroundColor: "rgba(255, 100, 130, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_214_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.550964187327807%"),
    top: hp("24.8633879781421%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_214_5_226: {
    width: wp("5.957300275482093%"),
    minWidth: wp("5.957300275482093%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_214_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_214_5_227: {
    width: wp("8.023415977961433%"),
    minWidth: wp("8.023415977961433%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_214_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_214_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_214_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672264%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_214_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_214_5_230: {
    width: wp("4.993112947658402%"),
    minWidth: wp("4.993112947658402%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0303030303030454%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_214_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_215: {
    width: wp("63.36088154269972%"),
    minWidth: wp("63.36088154269972%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("46.72131147540989%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_216: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_216_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278239%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(174, 174, 178, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_216_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278239%"),
    top: hp("24.863387978142043%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_216_5_226: {
    width: wp("5.957300275482093%"),
    minWidth: wp("5.957300275482093%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_216_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_216_5_227: {
    width: wp("8.023415977961433%"),
    minWidth: wp("8.023415977961433%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_216_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_216_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_216_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672175%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_216_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_216_5_230: {
    width: wp("4.993112947658402%"),
    minWidth: wp("4.993112947658402%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0303030303030303%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_216_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_217: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.74380165289256%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_217_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278248%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(124, 124, 128, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_217_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278248%"),
    top: hp("24.863387978142043%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_217_5_226: {
    width: wp("7.128099173553719%"),
    minWidth: wp("7.128099173553719%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_217_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_217_5_227: {
    width: wp("8.023415977961433%"),
    minWidth: wp("8.023415977961433%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_217_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_217_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_217_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672157%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_217_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_217_5_230: {
    width: wp("4.993112947658402%"),
    minWidth: wp("4.993112947658402%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.030303030303031%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_217_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_218: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.487603305785125%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_218_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(84, 84, 86, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_218_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("24.863387978142043%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_218_5_226: {
    width: wp("7.128099173553719%"),
    minWidth: wp("7.128099173553719%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_218_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_218_5_227: {
    width: wp("7.09366391184573%"),
    minWidth: wp("7.09366391184573%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_218_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_218_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_218_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672157%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_218_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_218_5_230: {
    width: wp("4.0633608815427%"),
    minWidth: wp("4.0633608815427%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0303030303030276%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_218_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_219: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.231404958677686%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_219_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(68, 68, 70, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_219_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278213%"),
    top: hp("24.863387978142043%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_219_5_226: {
    width: wp("7.128099173553719%"),
    minWidth: wp("7.128099173553719%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_219_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_219_5_227: {
    width: wp("7.09366391184573%"),
    minWidth: wp("7.09366391184573%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_219_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_219_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_219_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4449035812672264%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_219_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_219_5_230: {
    width: wp("4.0633608815427%"),
    minWidth: wp("4.0633608815427%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0303030303030383%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_219_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_220: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.97520661157025%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_220_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278284%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(54, 54, 56, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_220_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278284%"),
    top: hp("24.863387978142043%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_220_5_226: {
    width: wp("7.128099173553719%"),
    minWidth: wp("7.128099173553719%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_220_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_220_5_227: {
    width: wp("7.09366391184573%"),
    minWidth: wp("7.09366391184573%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_220_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_220_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_220_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.444903581267212%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_220_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_220_5_230: {
    width: wp("4.0633608815427%"),
    minWidth: wp("4.0633608815427%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.030303030303024%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_220_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_5_221: {
    width: wp("9.641873278236915%"),
    minWidth: wp("9.641873278236915%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.71900826446281%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I5_221_5_224: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278355%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(36, 36, 38, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_I5_221_5_225: {
    flexGrow: 1,
    width: wp("8.539944903581267%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5509641873278355%"),
    top: hp("24.863387978142043%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_221_5_226: {
    width: wp("7.128099173553719%"),
    minWidth: wp("7.128099173553719%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_221_5_226: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_221_5_227: {
    width: wp("7.09366391184573%"),
    minWidth: wp("7.09366391184573%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.3715846994535354%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_221_5_228: {
    width: wp("2.169421487603306%"),
    minWidth: wp("2.169421487603306%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_221_5_228: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I5_221_5_229: {
    width: wp("0.30991735537190085%"),
    minWidth: wp("0.30991735537190085%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.444903581267205%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_221_5_229: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textTransform: "none"
  },
  View_I5_221_5_230: {
    width: wp("4.0633608815427%"),
    minWidth: wp("4.0633608815427%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.030303030303024%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I5_221_5_230: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
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
