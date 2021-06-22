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
      <View style={styles.View_140_5517}>
        <View style={styles.View_55_2598}>
          <View style={styles.View_I55_2598_5_19}>
            <View style={styles.View_I55_2598_5_20}>
              <View style={styles.View_I55_2598_5_21} />
              <View style={styles.View_I55_2598_5_22}>
                <Text style={styles.Text_I55_2598_5_22}>Date Picker</Text>
              </View>
            </View>
            <View style={styles.View_I55_2598_5_23}>
              <Text style={styles.Text_I55_2598_5_23}>
                Human Interface Guidelines: Pickers
              </Text>
            </View>
          </View>
          <View style={styles.View_I55_2598_5_24} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/527e/63a9/e1b40e4db784be8f2a05cf79557a781c"
          }}
          style={styles.ImageBackground_140_5550}
        />
      </View>
      <View style={styles.View_55_2599}>
        <View style={styles.View_I55_2599_10_2304}>
          <Text style={styles.Text_I55_2599_10_2304}>Atoms</Text>
        </View>
        <View style={styles.View_I55_2599_10_2303} />
      </View>
      <View style={styles.View_55_2608}>
        <View style={styles.View_55_2609}>
          <Text style={styles.Text_55_2609}>Time Picker</Text>
        </View>
        <View style={styles.View_55_2610}>
          <View style={styles.View_55_2611}>
            <View style={styles.View_55_2612}>
              <View style={styles.View_55_2613}>
                <Text style={styles.Text_55_2613}>Light</Text>
              </View>
              <View style={styles.View_55_3682}>
                <Text style={styles.Text_55_3682}>Dark</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_55_2617}>
            <View style={styles.View_55_4612}>
              <View style={styles.View_55_4605}>
                <View style={styles.View_55_4606}>
                  <Text style={styles.Text_55_4606}>41</Text>
                </View>
                <View style={styles.View_55_4607}>
                  <Text style={styles.Text_55_4607}>:</Text>
                </View>
                <View style={styles.View_55_4608}>
                  <Text style={styles.Text_55_4608}>09</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_55_4624}>
              <View style={styles.View_55_4628}>
                <View style={styles.View_55_4629}>
                  <Text style={styles.Text_55_4629}>41</Text>
                </View>
                <View style={styles.View_55_4630}>
                  <Text style={styles.Text_55_4630}>:</Text>
                </View>
                <View style={styles.View_55_4631}>
                  <Text style={styles.Text_55_4631}>09</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_55_3683}>
        <View style={styles.View_55_3684}>
          <Text style={styles.Text_55_3684}>Day Row</Text>
        </View>
        <View style={styles.View_55_3685}>
          <View style={styles.View_55_3686}>
            <View style={styles.View_55_3687}>
              <View style={styles.View_55_3688}>
                <Text style={styles.Text_55_3688}>Light / Digits</Text>
              </View>
              <View style={styles.View_55_3689}>
                <Text style={styles.Text_55_3689}>Dark / Digits</Text>
              </View>
              <View style={styles.View_55_4151}>
                <Text style={styles.Text_55_4151}>Light / Days of Week</Text>
              </View>
              <View style={styles.View_55_4152}>
                <Text style={styles.Text_55_4152}>Dark / Days of Week</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_55_3690}>
            <View style={styles.View_55_2854}>
              <View style={styles.View_55_7417}>
                <View style={styles.View_55_2861}>
                  <Text style={styles.Text_55_2861}>7</Text>
                </View>
              </View>
              <View style={styles.View_55_7351}>
                <View style={styles.View_55_3914}>
                  <Text style={styles.Text_55_3914}>8</Text>
                </View>
              </View>
              <View style={styles.View_55_7290}>
                <View style={styles.View_55_3927}>
                  <Text style={styles.Text_55_3927}>9</Text>
                </View>
              </View>
              <View style={styles.View_55_7234}>
                <View style={styles.View_55_3946}>
                  <Text style={styles.Text_55_3946}>10</Text>
                </View>
              </View>
              <View style={styles.View_55_7183}>
                <View style={styles.View_55_3971}>
                  <Text style={styles.Text_55_3971}>11</Text>
                </View>
              </View>
              <View style={styles.View_55_7041}>
                <View style={styles.View_55_4002}>
                  <Text style={styles.Text_55_4002}>12</Text>
                </View>
              </View>
              <View style={styles.View_55_7000}>
                <View style={styles.View_55_4039}>
                  <Text style={styles.Text_55_4039}>13</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_55_7698}>
              <View style={styles.View_55_7699}>
                <View style={styles.View_55_7700}>
                  <Text style={styles.Text_55_7700}>7</Text>
                </View>
              </View>
              <View style={styles.View_55_7701}>
                <View style={styles.View_55_7702}>
                  <Text style={styles.Text_55_7702}>8</Text>
                </View>
              </View>
              <View style={styles.View_55_7703}>
                <View style={styles.View_55_7704}>
                  <Text style={styles.Text_55_7704}>9</Text>
                </View>
              </View>
              <View style={styles.View_55_7705}>
                <View style={styles.View_55_7706}>
                  <Text style={styles.Text_55_7706}>10</Text>
                </View>
              </View>
              <View style={styles.View_55_7707}>
                <View style={styles.View_55_7708}>
                  <Text style={styles.Text_55_7708}>11</Text>
                </View>
              </View>
              <View style={styles.View_55_7709}>
                <View style={styles.View_55_7710}>
                  <Text style={styles.Text_55_7710}>12</Text>
                </View>
              </View>
              <View style={styles.View_55_7711}>
                <View style={styles.View_55_7712}>
                  <Text style={styles.Text_55_7712}>13</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_55_4098}>
              <View style={styles.View_55_4106}>
                <View style={styles.View_55_4105}>
                  <Text style={styles.Text_55_4105}>SUN</Text>
                </View>
              </View>
              <View style={styles.View_55_4107}>
                <View style={styles.View_55_4104}>
                  <Text style={styles.Text_55_4104}>MON</Text>
                </View>
              </View>
              <View style={styles.View_55_4108}>
                <View style={styles.View_55_4103}>
                  <Text style={styles.Text_55_4103}>TUE</Text>
                </View>
              </View>
              <View style={styles.View_55_4109}>
                <View style={styles.View_55_4102}>
                  <Text style={styles.Text_55_4102}>WED</Text>
                </View>
              </View>
              <View style={styles.View_55_4110}>
                <View style={styles.View_55_4101}>
                  <Text style={styles.Text_55_4101}>THU</Text>
                </View>
              </View>
              <View style={styles.View_55_4111}>
                <View style={styles.View_55_4100}>
                  <Text style={styles.Text_55_4100}>FRI</Text>
                </View>
              </View>
              <View style={styles.View_55_4112}>
                <View style={styles.View_55_4099}>
                  <Text style={styles.Text_55_4099}>SAT</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_55_4136}>
              <View style={styles.View_55_4137}>
                <View style={styles.View_55_4138}>
                  <Text style={styles.Text_55_4138}>SUN</Text>
                </View>
              </View>
              <View style={styles.View_55_4139}>
                <View style={styles.View_55_4140}>
                  <Text style={styles.Text_55_4140}>MON</Text>
                </View>
              </View>
              <View style={styles.View_55_4141}>
                <View style={styles.View_55_4142}>
                  <Text style={styles.Text_55_4142}>TUE</Text>
                </View>
              </View>
              <View style={styles.View_55_4143}>
                <View style={styles.View_55_4144}>
                  <Text style={styles.Text_55_4144}>WED</Text>
                </View>
              </View>
              <View style={styles.View_55_4145}>
                <View style={styles.View_55_4146}>
                  <Text style={styles.Text_55_4146}>THU</Text>
                </View>
              </View>
              <View style={styles.View_55_4147}>
                <View style={styles.View_55_4148}>
                  <Text style={styles.Text_55_4148}>FRI</Text>
                </View>
              </View>
              <View style={styles.View_55_4149}>
                <View style={styles.View_55_4150}>
                  <Text style={styles.Text_55_4150}>SAT</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_55_2697}>
        <View style={styles.View_I55_2697_10_2311}>
          <Text style={styles.Text_I55_2697_10_2311}>Molecules</Text>
        </View>
        <View style={styles.View_I55_2697_10_2312} />
      </View>
      <View style={styles.View_55_4398}>
        <View style={styles.View_55_4399}>
          <Text style={styles.Text_55_4399}>Calendar</Text>
        </View>
        <View style={styles.View_55_4400}>
          <View style={styles.View_55_4401}>
            <View style={styles.View_55_4402}>
              <View style={styles.View_55_4403}>
                <Text style={styles.Text_55_4403}>Light</Text>
              </View>
              <View style={styles.View_55_8626}>
                <Text style={styles.Text_55_8626}>Dark</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_55_4407}>
            <View style={styles.View_55_2886}>
              <View style={styles.View_55_4647}>
                <View style={styles.View_55_4648}>
                  <View style={styles.View_55_4649}>
                    <Text style={styles.Text_55_4649}>June 2021</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a126/9e3b/1c2d9195adc505309e5fc55f896e8364"
                    }}
                    style={styles.ImageBackground_140_11596}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f580/3724/533a456fe6c4d1681ed5d14b8ecf9af9"
                  }}
                  style={styles.ImageBackground_55_4651}
                />
              </View>
              <View style={styles.View_55_4468}>
                <View style={styles.View_I55_4468_55_4106}>
                  <View style={styles.View_I55_4468_55_4105}>
                    <Text style={styles.Text_I55_4468_55_4105}>SUN</Text>
                  </View>
                </View>
                <View style={styles.View_I55_4468_55_4107}>
                  <View style={styles.View_I55_4468_55_4104}>
                    <Text style={styles.Text_I55_4468_55_4104}>MON</Text>
                  </View>
                </View>
                <View style={styles.View_I55_4468_55_4108}>
                  <View style={styles.View_I55_4468_55_4103}>
                    <Text style={styles.Text_I55_4468_55_4103}>TUE</Text>
                  </View>
                </View>
                <View style={styles.View_I55_4468_55_4109}>
                  <View style={styles.View_I55_4468_55_4102}>
                    <Text style={styles.Text_I55_4468_55_4102}>WED</Text>
                  </View>
                </View>
                <View style={styles.View_I55_4468_55_4110}>
                  <View style={styles.View_I55_4468_55_4101}>
                    <Text style={styles.Text_I55_4468_55_4101}>THU</Text>
                  </View>
                </View>
                <View style={styles.View_I55_4468_55_4111}>
                  <View style={styles.View_I55_4468_55_4100}>
                    <Text style={styles.Text_I55_4468_55_4100}>FRI</Text>
                  </View>
                </View>
                <View style={styles.View_I55_4468_55_4112}>
                  <View style={styles.View_I55_4468_55_4099}>
                    <Text style={styles.Text_I55_4468_55_4099}>SAT</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_55_2889}>
                <View style={styles.View_I55_2889_55_7417} />
                <View style={styles.View_I55_2889_55_7351} />
                <View style={styles.View_I55_2889_55_7290}>
                  <View style={styles.View_I55_2889_55_3927}>
                    <Text style={styles.Text_I55_2889_55_3927}>1</Text>
                  </View>
                </View>
                <View style={styles.View_I55_2889_55_7234}>
                  <View style={styles.View_I55_2889_55_3946}>
                    <Text style={styles.Text_I55_2889_55_3946}>2</Text>
                  </View>
                </View>
                <View style={styles.View_I55_2889_55_7183}>
                  <View style={styles.View_I55_2889_55_3971}>
                    <Text style={styles.Text_I55_2889_55_3971}>3</Text>
                  </View>
                </View>
                <View style={styles.View_I55_2889_55_7041}>
                  <View style={styles.View_I55_2889_55_4002}>
                    <Text style={styles.Text_I55_2889_55_4002}>4</Text>
                  </View>
                </View>
                <View style={styles.View_I55_2889_55_7000}>
                  <View style={styles.View_I55_2889_55_4039}>
                    <Text style={styles.Text_I55_2889_55_4039}>5</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_55_2890}>
                <View style={styles.View_I55_2890_55_7417}>
                  <View style={styles.View_I55_2890_55_2861}>
                    <Text style={styles.Text_I55_2890_55_2861}>6</Text>
                  </View>
                </View>
                <View style={styles.View_I55_2890_55_7351}>
                  <View style={styles.View_I55_2890_55_3914}>
                    <Text style={styles.Text_I55_2890_55_3914}>7</Text>
                  </View>
                </View>
                <View style={styles.View_I55_2890_55_7290}>
                  <View style={styles.View_I55_2890_55_3927}>
                    <Text style={styles.Text_I55_2890_55_3927}>8</Text>
                  </View>
                </View>
                <View style={styles.View_I55_2890_55_7234}>
                  <View style={styles.View_I55_2890_55_3946}>
                    <Text style={styles.Text_I55_2890_55_3946}>9</Text>
                  </View>
                </View>
                <View style={styles.View_I55_2890_55_7183}>
                  <View style={styles.View_I55_2890_55_3971}>
                    <Text style={styles.Text_I55_2890_55_3971}>10</Text>
                  </View>
                </View>
                <View style={styles.View_I55_2890_55_7041}>
                  <View style={styles.View_I55_2890_55_4002}>
                    <Text style={styles.Text_I55_2890_55_4002}>11</Text>
                  </View>
                </View>
                <View style={styles.View_I55_2890_55_7000}>
                  <View style={styles.View_I55_2890_55_4039}>
                    <Text style={styles.Text_I55_2890_55_4039}>12</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_55_2891}>
                <View style={styles.View_I55_2891_55_7417}>
                  <View style={styles.View_I55_2891_55_2861}>
                    <Text style={styles.Text_I55_2891_55_2861}>13</Text>
                  </View>
                </View>
                <View style={styles.View_I55_2891_55_7351}>
                  <View style={styles.View_I55_2891_55_3914}>
                    <Text style={styles.Text_I55_2891_55_3914}>14</Text>
                  </View>
                </View>
                <View style={styles.View_I55_2891_55_7290}>
                  <View style={styles.View_I55_2891_55_3927}>
                    <Text style={styles.Text_I55_2891_55_3927}>15</Text>
                  </View>
                </View>
                <View style={styles.View_I55_2891_55_7234}>
                  <View style={styles.View_I55_2891_55_3946}>
                    <Text style={styles.Text_I55_2891_55_3946}>16</Text>
                  </View>
                </View>
                <View style={styles.View_I55_2891_55_7183}>
                  <View style={styles.View_I55_2891_55_3971}>
                    <Text style={styles.Text_I55_2891_55_3971}>17</Text>
                  </View>
                </View>
                <View style={styles.View_I55_2891_55_7041}>
                  <View style={styles.View_I55_2891_55_4002}>
                    <Text style={styles.Text_I55_2891_55_4002}>18</Text>
                  </View>
                </View>
                <View style={styles.View_I55_2891_55_7000}>
                  <View style={styles.View_I55_2891_55_4039}>
                    <Text style={styles.Text_I55_2891_55_4039}>19</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_55_2892}>
                <View style={styles.View_I55_2892_55_7417}>
                  <View style={styles.View_I55_2892_55_2861}>
                    <Text style={styles.Text_I55_2892_55_2861}>20</Text>
                  </View>
                </View>
                <View style={styles.View_I55_2892_55_7351}>
                  <View style={styles.View_I55_2892_55_3914}>
                    <Text style={styles.Text_I55_2892_55_3914}>21</Text>
                  </View>
                </View>
                <View style={styles.View_I55_2892_55_7290}>
                  <View style={styles.View_I55_2892_55_3927}>
                    <Text style={styles.Text_I55_2892_55_3927}>22</Text>
                  </View>
                </View>
                <View style={styles.View_I55_2892_55_7234}>
                  <View style={styles.View_I55_2892_55_3946}>
                    <Text style={styles.Text_I55_2892_55_3946}>23</Text>
                  </View>
                </View>
                <View style={styles.View_I55_2892_55_7183}>
                  <View style={styles.View_I55_2892_55_3971}>
                    <Text style={styles.Text_I55_2892_55_3971}>24</Text>
                  </View>
                </View>
                <View style={styles.View_I55_2892_55_7041}>
                  <View style={styles.View_I55_2892_55_4002}>
                    <Text style={styles.Text_I55_2892_55_4002}>25</Text>
                  </View>
                </View>
                <View style={styles.View_I55_2892_55_7000}>
                  <View style={styles.View_I55_2892_55_4039}>
                    <Text style={styles.Text_I55_2892_55_4039}>26</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_55_2893}>
                <View style={styles.View_I55_2893_55_7417}>
                  <View style={styles.View_I55_2893_55_2861}>
                    <Text style={styles.Text_I55_2893_55_2861}>27</Text>
                  </View>
                </View>
                <View style={styles.View_I55_2893_55_7351}>
                  <View style={styles.View_I55_2893_55_3914}>
                    <Text style={styles.Text_I55_2893_55_3914}>28</Text>
                  </View>
                </View>
                <View style={styles.View_I55_2893_55_7290}>
                  <View style={styles.View_I55_2893_55_3927}>
                    <Text style={styles.Text_I55_2893_55_3927}>29</Text>
                  </View>
                </View>
                <View style={styles.View_I55_2893_55_7234}>
                  <View style={styles.View_I55_2893_55_3946}>
                    <Text style={styles.Text_I55_2893_55_3946}>30</Text>
                  </View>
                </View>
                <View style={styles.View_I55_2893_55_7183} />
                <View style={styles.View_I55_2893_55_7041} />
                <View style={styles.View_I55_2893_55_7000} />
              </View>
              <View style={styles.View_55_3382}>
                <View style={styles.View_55_3394}>
                  <Text style={styles.Text_55_3394}>Time</Text>
                </View>
                <View style={styles.View_55_4915}>
                  <View style={styles.View_55_4825}>
                    <View style={styles.View_I55_4825_55_4605}>
                      <View style={styles.View_I55_4825_55_4606}>
                        <Text style={styles.Text_I55_4825_55_4606}>41</Text>
                      </View>
                      <View style={styles.View_I55_4825_55_4607}>
                        <Text style={styles.Text_I55_4825_55_4607}>:</Text>
                      </View>
                      <View style={styles.View_I55_4825_55_4608}>
                        <Text style={styles.Text_I55_4825_55_4608}>09</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_55_4759}>
                    <View style={styles.View_I55_4759_6_827}>
                      <View style={styles.View_I55_4759_6_827_6_807}>
                        <Text style={styles.Text_I55_4759_6_827_6_807}>AM</Text>
                      </View>
                    </View>
                    <TouchableOpacity
                      style={styles.TouchableOpacity_I55_4759_6_828}
                      onPress={() =>
                        this.props.navigation.navigate(
                          getNavigationScreen("6_823")
                        )
                      }
                    >
                      <View style={styles.View_I55_4759_6_828_6_811}>
                        <Text style={styles.Text_I55_4759_6_828_6_811}>PM</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_55_8407}>
              <View style={styles.View_55_8408}>
                <View style={styles.View_55_8409}>
                  <View style={styles.View_55_8410}>
                    <Text style={styles.Text_55_8410}>June 2021</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a126/9e3b/1c2d9195adc505309e5fc55f896e8364"
                    }}
                    style={styles.ImageBackground_140_11595}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f580/3724/533a456fe6c4d1681ed5d14b8ecf9af9"
                  }}
                  style={styles.ImageBackground_55_8412}
                />
              </View>
              <View style={styles.View_55_8415}>
                <View style={styles.View_I55_8415_55_4137}>
                  <View style={styles.View_I55_8415_55_4138}>
                    <Text style={styles.Text_I55_8415_55_4138}>SUN</Text>
                  </View>
                </View>
                <View style={styles.View_I55_8415_55_4139}>
                  <View style={styles.View_I55_8415_55_4140}>
                    <Text style={styles.Text_I55_8415_55_4140}>MON</Text>
                  </View>
                </View>
                <View style={styles.View_I55_8415_55_4141}>
                  <View style={styles.View_I55_8415_55_4142}>
                    <Text style={styles.Text_I55_8415_55_4142}>TUE</Text>
                  </View>
                </View>
                <View style={styles.View_I55_8415_55_4143}>
                  <View style={styles.View_I55_8415_55_4144}>
                    <Text style={styles.Text_I55_8415_55_4144}>WED</Text>
                  </View>
                </View>
                <View style={styles.View_I55_8415_55_4145}>
                  <View style={styles.View_I55_8415_55_4146}>
                    <Text style={styles.Text_I55_8415_55_4146}>THU</Text>
                  </View>
                </View>
                <View style={styles.View_I55_8415_55_4147}>
                  <View style={styles.View_I55_8415_55_4148}>
                    <Text style={styles.Text_I55_8415_55_4148}>FRI</Text>
                  </View>
                </View>
                <View style={styles.View_I55_8415_55_4149}>
                  <View style={styles.View_I55_8415_55_4150}>
                    <Text style={styles.Text_I55_8415_55_4150}>SAT</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_55_8416}>
                <View style={styles.View_I55_8416_55_7699} />
                <View style={styles.View_I55_8416_55_7701} />
                <View style={styles.View_I55_8416_55_7703}>
                  <View style={styles.View_I55_8416_55_7704}>
                    <Text style={styles.Text_I55_8416_55_7704}>1</Text>
                  </View>
                </View>
                <View style={styles.View_I55_8416_55_7705}>
                  <View style={styles.View_I55_8416_55_7706}>
                    <Text style={styles.Text_I55_8416_55_7706}>2</Text>
                  </View>
                </View>
                <View style={styles.View_I55_8416_55_7707}>
                  <View style={styles.View_I55_8416_55_7708}>
                    <Text style={styles.Text_I55_8416_55_7708}>3</Text>
                  </View>
                </View>
                <View style={styles.View_I55_8416_55_7709}>
                  <View style={styles.View_I55_8416_55_7710}>
                    <Text style={styles.Text_I55_8416_55_7710}>4</Text>
                  </View>
                </View>
                <View style={styles.View_I55_8416_55_7711}>
                  <View style={styles.View_I55_8416_55_7712}>
                    <Text style={styles.Text_I55_8416_55_7712}>5</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_55_8417}>
                <View style={styles.View_I55_8417_55_7699}>
                  <View style={styles.View_I55_8417_55_7700}>
                    <Text style={styles.Text_I55_8417_55_7700}>6</Text>
                  </View>
                </View>
                <View style={styles.View_I55_8417_55_7701}>
                  <View style={styles.View_I55_8417_55_7702}>
                    <Text style={styles.Text_I55_8417_55_7702}>7</Text>
                  </View>
                </View>
                <View style={styles.View_I55_8417_55_7703}>
                  <View style={styles.View_I55_8417_55_7704}>
                    <Text style={styles.Text_I55_8417_55_7704}>8</Text>
                  </View>
                </View>
                <View style={styles.View_I55_8417_55_7705}>
                  <View style={styles.View_I55_8417_55_7706}>
                    <Text style={styles.Text_I55_8417_55_7706}>9</Text>
                  </View>
                </View>
                <View style={styles.View_I55_8417_55_7707}>
                  <View style={styles.View_I55_8417_55_7708}>
                    <Text style={styles.Text_I55_8417_55_7708}>10</Text>
                  </View>
                </View>
                <View style={styles.View_I55_8417_55_7709}>
                  <View style={styles.View_I55_8417_55_7710}>
                    <Text style={styles.Text_I55_8417_55_7710}>11</Text>
                  </View>
                </View>
                <View style={styles.View_I55_8417_55_7711}>
                  <View style={styles.View_I55_8417_55_7712}>
                    <Text style={styles.Text_I55_8417_55_7712}>12</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_55_8418}>
                <View style={styles.View_I55_8418_55_7699}>
                  <View style={styles.View_I55_8418_55_7700}>
                    <Text style={styles.Text_I55_8418_55_7700}>13</Text>
                  </View>
                </View>
                <View style={styles.View_I55_8418_55_7701}>
                  <View style={styles.View_I55_8418_55_7702}>
                    <Text style={styles.Text_I55_8418_55_7702}>14</Text>
                  </View>
                </View>
                <View style={styles.View_I55_8418_55_7703}>
                  <View style={styles.View_I55_8418_55_7704}>
                    <Text style={styles.Text_I55_8418_55_7704}>15</Text>
                  </View>
                </View>
                <View style={styles.View_I55_8418_55_7705}>
                  <View style={styles.View_I55_8418_55_7706}>
                    <Text style={styles.Text_I55_8418_55_7706}>16</Text>
                  </View>
                </View>
                <View style={styles.View_I55_8418_55_7707}>
                  <View style={styles.View_I55_8418_55_7708}>
                    <Text style={styles.Text_I55_8418_55_7708}>17</Text>
                  </View>
                </View>
                <View style={styles.View_I55_8418_55_7709}>
                  <View style={styles.View_I55_8418_55_7710}>
                    <Text style={styles.Text_I55_8418_55_7710}>18</Text>
                  </View>
                </View>
                <View style={styles.View_I55_8418_55_7711}>
                  <View style={styles.View_I55_8418_55_7712}>
                    <Text style={styles.Text_I55_8418_55_7712}>19</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_55_8419}>
                <View style={styles.View_I55_8419_55_7699}>
                  <View style={styles.View_I55_8419_55_7700}>
                    <Text style={styles.Text_I55_8419_55_7700}>20</Text>
                  </View>
                </View>
                <View style={styles.View_I55_8419_55_7701}>
                  <View style={styles.View_I55_8419_55_7702}>
                    <Text style={styles.Text_I55_8419_55_7702}>21</Text>
                  </View>
                </View>
                <View style={styles.View_I55_8419_55_7703}>
                  <View style={styles.View_I55_8419_55_7704}>
                    <Text style={styles.Text_I55_8419_55_7704}>22</Text>
                  </View>
                </View>
                <View style={styles.View_I55_8419_55_7705}>
                  <View style={styles.View_I55_8419_55_7706}>
                    <Text style={styles.Text_I55_8419_55_7706}>23</Text>
                  </View>
                </View>
                <View style={styles.View_I55_8419_55_7707}>
                  <View style={styles.View_I55_8419_55_7708}>
                    <Text style={styles.Text_I55_8419_55_7708}>24</Text>
                  </View>
                </View>
                <View style={styles.View_I55_8419_55_7709}>
                  <View style={styles.View_I55_8419_55_7710}>
                    <Text style={styles.Text_I55_8419_55_7710}>25</Text>
                  </View>
                </View>
                <View style={styles.View_I55_8419_55_7711}>
                  <View style={styles.View_I55_8419_55_7712}>
                    <Text style={styles.Text_I55_8419_55_7712}>26</Text>
                  </View>
                </View>
              </View>
              <View style={styles.View_55_8420}>
                <View style={styles.View_I55_8420_55_7699}>
                  <View style={styles.View_I55_8420_55_7700}>
                    <Text style={styles.Text_I55_8420_55_7700}>27</Text>
                  </View>
                </View>
                <View style={styles.View_I55_8420_55_7701}>
                  <View style={styles.View_I55_8420_55_7702}>
                    <Text style={styles.Text_I55_8420_55_7702}>28</Text>
                  </View>
                </View>
                <View style={styles.View_I55_8420_55_7703}>
                  <View style={styles.View_I55_8420_55_7704}>
                    <Text style={styles.Text_I55_8420_55_7704}>29</Text>
                  </View>
                </View>
                <View style={styles.View_I55_8420_55_7705}>
                  <View style={styles.View_I55_8420_55_7706}>
                    <Text style={styles.Text_I55_8420_55_7706}>30</Text>
                  </View>
                </View>
                <View style={styles.View_I55_8420_55_7707} />
                <View style={styles.View_I55_8420_55_7709} />
                <View style={styles.View_I55_8420_55_7711} />
              </View>
              <View style={styles.View_55_8421}>
                <View style={styles.View_55_8422}>
                  <Text style={styles.Text_55_8422}>Time</Text>
                </View>
                <View style={styles.View_55_8423}>
                  <View style={styles.View_55_8424}>
                    <View style={styles.View_I55_8424_55_4628}>
                      <View style={styles.View_I55_8424_55_4629}>
                        <Text style={styles.Text_I55_8424_55_4629}>41</Text>
                      </View>
                      <View style={styles.View_I55_8424_55_4630}>
                        <Text style={styles.Text_I55_8424_55_4630}>:</Text>
                      </View>
                      <View style={styles.View_I55_8424_55_4631}>
                        <Text style={styles.Text_I55_8424_55_4631}>09</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.View_55_8425}>
                    <TouchableOpacity
                      style={styles.TouchableOpacity_I55_8425_38_2884}
                      onPress={() =>
                        this.props.navigation.navigate(
                          getNavigationScreen("38_2880")
                        )
                      }
                    >
                      <View style={styles.View_I55_8425_38_2884_6_815}>
                        <Text style={styles.Text_I55_8425_38_2884_6_815}>
                          AM
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <View style={styles.View_I55_8425_38_2885}>
                      <View style={styles.View_I55_8425_38_2885_6_819}>
                        <Text style={styles.Text_I55_8425_38_2885_6_819}>
                          PM
                        </Text>
                      </View>
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
  View_2: { height: hp("294.1256830601093%") },
  View_140_5517: {
    width: wp("84.23645320197043%"),
    minWidth: wp("84.23645320197043%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8817733990147785%"),
    top: hp("8.743169398907105%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_2598: {
    flexGrow: 1,
    width: wp("84.23645320197043%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2598_5_19: {
    flexGrow: 1,
    width: wp("84.23645320197043%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2598_5_20: {
    width: wp("41.37931034482759%"),
    minWidth: wp("41.37931034482759%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2598_5_21: {
    width: wp("6.896551724137931%"),
    minWidth: wp("6.896551724137931%"),
    height: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I55_2598_5_22: {
    width: wp("30.541871921182267%"),
    minWidth: wp("30.541871921182267%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.83743842364532%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I55_2598_5_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I55_2598_5_23: {
    width: wp("38.91625615763547%"),
    minWidth: wp("38.91625615763547%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.32019704433498%"),
    top: hp("2.185792349726775%"),
    justifyContent: "center"
  },
  Text_I55_2598_5_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_2598_5_24: {
    flexGrow: 1,
    width: wp("84.23645320197043%"),
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
  ImageBackground_140_5550: {
    width: wp("6.896551724137931%"),
    height: hp("7.650273224043716%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_55_2599: {
    width: wp("84.23645320197043%"),
    minWidth: wp("84.23645320197043%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8817733990147785%"),
    top: hp("29.6448087431694%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2599_10_2304: {
    flexGrow: 1,
    width: wp("8.74384236453202%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I55_2599_10_2304: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I55_2599_10_2303: {
    flexGrow: 1,
    width: wp("84.23645320197043%"),
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
  View_55_2608: {
    width: wp("27.955665024630544%"),
    minWidth: wp("27.955665024630544%"),
    height: hp("30.601092896174865%"),
    minHeight: hp("30.601092896174865%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8817733990147785%"),
    top: hp("46.85792349726776%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_2609: {
    width: wp("15.64039408866995%"),
    minWidth: wp("15.64039408866995%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_55_2609: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_55_2610: {
    width: wp("27.955665024630544%"),
    minWidth: wp("27.955665024630544%"),
    height: hp("22.950819672131146%"),
    minHeight: hp("22.950819672131146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_55_2611: {
    width: wp("5.541871921182266%"),
    minWidth: wp("5.541871921182266%"),
    height: hp("12.568306010928962%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.413793103448278%"),
    top: hp("5.191256830601098%")
  },
  View_55_2612: {
    width: wp("5.541871921182266%"),
    minWidth: wp("5.541871921182266%"),
    height: hp("12.568306010928962%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_55_2613: {
    width: wp("5.541871921182266%"),
    minWidth: wp("5.541871921182266%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_55_2613: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_55_3682: {
    width: wp("4.433497536945813%"),
    minWidth: wp("4.433497536945813%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.289617486338791%"),
    justifyContent: "center"
  },
  Text_55_3682: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_55_2617: {
    width: wp("18.472906403940886%"),
    minWidth: wp("18.472906403940886%"),
    height: hp("22.950819672131146%"),
    minHeight: hp("22.950819672131146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_55_4612: {
    width: wp("10.591133004926109%"),
    minWidth: wp("10.591133004926109%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.940886699507389%"),
    top: hp("4.371584699453557%"),
    backgroundColor: "rgba(118, 118, 128, 0.11999999731779099)",
    overflow: "hidden"
  },
  View_55_4605: {
    flexGrow: 1,
    width: wp("8.620689655172415%"),
    height: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9852216748768488%"),
    top: hp("0.5464480874316919%")
  },
  View_55_4606: {
    width: wp("3.4482758620689653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.172413793103447%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_55_4606: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_55_4607: {
    width: wp("0.6157635467980296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.064039408866991%"),
    top: hp("0.1366120218579141%"),
    justifyContent: "flex-start"
  },
  Text_55_4607: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_55_4608: {
    width: wp("3.4482758620689653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_55_4608: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_55_4624: {
    width: wp("10.591133004926109%"),
    minWidth: wp("10.591133004926109%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.940886699507389%"),
    top: hp("13.661202185792348%"),
    backgroundColor: "rgba(118, 118, 128, 0.23999999463558197)",
    overflow: "hidden"
  },
  View_55_4628: {
    flexGrow: 1,
    width: wp("8.620689655172415%"),
    height: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9852216748768488%"),
    top: hp("0.546448087431699%")
  },
  View_55_4629: {
    width: wp("3.4482758620689653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.172413793103447%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_55_4629: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_55_4630: {
    width: wp("0.6157635467980296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.064039408866991%"),
    top: hp("0.1366120218579141%"),
    justifyContent: "flex-start"
  },
  Text_55_4630: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_55_4631: {
    width: wp("3.4482758620689653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_55_4631: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_55_3683: {
    width: wp("72.29064039408867%"),
    minWidth: wp("72.29064039408867%"),
    height: hp("48.63387978142077%"),
    minHeight: hp("48.63387978142077%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8817733990147785%"),
    top: hp("86.20218579234972%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_3684: {
    width: wp("9.975369458128078%"),
    minWidth: wp("9.975369458128078%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_55_3684: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_55_3685: {
    width: wp("72.29064039408867%"),
    minWidth: wp("72.29064039408867%"),
    height: hp("40.98360655737705%"),
    minHeight: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.6502732240437155%")
  },
  View_55_3686: {
    width: wp("22.29064039408867%"),
    minWidth: wp("22.29064039408867%"),
    height: hp("30.737704918032787%"),
    minHeight: hp("30.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.00000000000001%"),
    top: hp("6.284153005464489%")
  },
  View_55_3687: {
    width: wp("22.29064039408867%"),
    minWidth: wp("22.29064039408867%"),
    height: hp("30.737704918032787%"),
    minHeight: hp("30.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_55_3688: {
    width: wp("15.64039408866995%"),
    minWidth: wp("15.64039408866995%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_55_3688: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_55_3689: {
    width: wp("14.532019704433496%"),
    minWidth: wp("14.532019704433496%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11.475409836065566%"),
    justifyContent: "center"
  },
  Text_55_3689: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_55_4151: {
    width: wp("22.29064039408867%"),
    minWidth: wp("22.29064039408867%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.62841530054645%"),
    justifyContent: "center"
  },
  Text_55_4151: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_55_4152: {
    width: wp("21.182266009852217%"),
    minWidth: wp("21.182266009852217%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27.45901639344261%"),
    justifyContent: "center"
  },
  Text_55_4152: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_55_3690: {
    width: wp("46.18226600985222%"),
    minWidth: wp("46.18226600985222%"),
    height: hp("40.98360655737705%"),
    minHeight: hp("40.98360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_55_2854: {
    width: wp("38.30049261083744%"),
    minWidth: wp("38.30049261083744%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.940886699507389%"),
    top: hp("4.371584699453564%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_7417: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_2861: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.546448087431699%"),
    justifyContent: "center"
  },
  Text_55_2861: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_55_7351: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.726600985221676%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_3914: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.546448087431699%"),
    justifyContent: "center"
  },
  Text_55_3914: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_55_7290: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.453201970443349%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_3927: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.546448087431699%"),
    justifyContent: "center"
  },
  Text_55_3927: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_55_7234: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.17980295566503%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_3946: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.546448087431699%"),
    justifyContent: "center"
  },
  Text_55_3946: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_55_7183: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.9064039408867%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_3971: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.546448087431699%"),
    justifyContent: "center"
  },
  Text_55_3971: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_55_7041: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.633004926108374%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_4002: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_55_4002: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_55_7000: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.35960591133005%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_4039: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.546448087431699%"),
    justifyContent: "center"
  },
  Text_55_4039: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_55_7698: {
    width: wp("38.30049261083744%"),
    minWidth: wp("38.30049261083744%"),
    height: hp("7.103825136612022%"),
    minHeight: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.940886699507389%"),
    top: hp("15.84699453551913%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_7699: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_7700: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.546448087431699%"),
    justifyContent: "center"
  },
  Text_55_7700: {
    color: "rgba(255, 69, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_55_7701: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.726600985221676%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_7702: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.546448087431699%"),
    justifyContent: "center"
  },
  Text_55_7702: {
    color: "rgba(255, 69, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_55_7703: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.453201970443349%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_7704: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.546448087431699%"),
    justifyContent: "center"
  },
  Text_55_7704: {
    color: "rgba(255, 69, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_55_7705: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.17980295566503%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_7706: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.546448087431699%"),
    justifyContent: "center"
  },
  Text_55_7706: {
    color: "rgba(255, 69, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_55_7707: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.9064039408867%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_7708: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.546448087431699%"),
    justifyContent: "center"
  },
  Text_55_7708: {
    color: "rgba(255, 69, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_55_7709: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.633004926108374%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_7710: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_55_7710: {
    color: "rgba(255, 69, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_55_7711: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.35960591133005%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_7712: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.546448087431699%"),
    justifyContent: "center"
  },
  Text_55_7712: {
    color: "rgba(255, 69, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_55_4098: {
    width: wp("38.30049261083744%"),
    minWidth: wp("38.30049261083744%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.940886699507389%"),
    top: hp("27.322404371584696%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_4106: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_4105: {
    width: wp("3.571428571428571%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24630541871921174%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_55_4105: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_55_4107: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.726600985221676%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_4104: {
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06157635467980427%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_55_4104: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_55_4108: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.453201970443349%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_4103: {
    width: wp("3.32512315270936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3694581280788185%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_55_4103: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_55_4109: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.17980295566503%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_4102: {
    width: wp("3.8177339901477834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06157635467979716%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_55_4102: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_55_4110: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.9064039408867%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_4101: {
    width: wp("3.571428571428571%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24630541871920997%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_55_4101: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_55_4111: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.633004926108374%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_4100: {
    width: wp("2.586206896551724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6773399014778363%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_55_4100: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_55_4112: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.35960591133005%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_4099: {
    width: wp("3.201970443349754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3694581280788114%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_55_4099: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_55_4136: {
    width: wp("38.30049261083744%"),
    minWidth: wp("38.30049261083744%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.940886699507389%"),
    top: hp("34.15300546448087%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_4137: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_4138: {
    width: wp("3.571428571428571%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24630541871921174%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_55_4138: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_55_4139: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.726600985221676%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_4140: {
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06157635467980427%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_55_4140: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_55_4141: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.453201970443349%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_4142: {
    width: wp("3.32512315270936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3694581280788185%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_55_4142: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_55_4143: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.17980295566503%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_4144: {
    width: wp("3.8177339901477834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06157635467979716%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_55_4144: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_55_4145: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.9064039408867%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_4146: {
    width: wp("3.571428571428571%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24630541871920997%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_55_4146: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_55_4147: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.633004926108374%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_4148: {
    width: wp("2.586206896551724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6773399014778363%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_55_4148: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_55_4149: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.35960591133005%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_4150: {
    width: wp("3.201970443349754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3694581280788114%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_55_4150: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_55_2697: {
    width: wp("84.23645320197043%"),
    minWidth: wp("84.23645320197043%"),
    height: hp("8.469945355191257%"),
    minHeight: hp("8.469945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8817733990147785%"),
    top: hp("143.5792349726776%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2697_10_2311: {
    flexGrow: 1,
    width: wp("13.793103448275861%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I55_2697_10_2311: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I55_2697_10_2312: {
    flexGrow: 1,
    width: wp("84.23645320197043%"),
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
  View_55_4398: {
    width: wp("59.60591133004927%"),
    minWidth: wp("59.60591133004927%"),
    height: hp("124.59016393442623%"),
    minHeight: hp("124.59016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.8817733990147785%"),
    top: hp("160.79234972677597%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_4399: {
    width: wp("11.330049261083744%"),
    minWidth: wp("11.330049261083744%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_55_4399: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_55_4400: {
    width: wp("59.60591133004927%"),
    minWidth: wp("59.60591133004927%"),
    height: hp("116.93989071038251%"),
    minHeight: hp("116.93989071038251%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043701%")
  },
  View_55_4401: {
    width: wp("5.541871921182266%"),
    minWidth: wp("5.541871921182266%"),
    height: hp("59.56284153005464%"),
    minHeight: hp("59.56284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.064039408866996%"),
    top: hp("28.688524590163922%")
  },
  View_55_4402: {
    width: wp("5.541871921182266%"),
    minWidth: wp("5.541871921182266%"),
    height: hp("59.56284153005464%"),
    minHeight: hp("59.56284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_55_4403: {
    width: wp("5.541871921182266%"),
    minWidth: wp("5.541871921182266%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_55_4403: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_55_8626: {
    width: wp("4.433497536945813%"),
    minWidth: wp("4.433497536945813%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("56.284153005464475%"),
    justifyContent: "center"
  },
  Text_55_8626: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_55_4407: {
    width: wp("50.12315270935961%"),
    minWidth: wp("50.12315270935961%"),
    height: hp("116.93989071038251%"),
    minHeight: hp("116.93989071038251%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_55_2886: {
    width: wp("42.241379310344826%"),
    minWidth: wp("42.241379310344826%"),
    height: hp("51.91256830601093%"),
    minHeight: hp("51.91256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.940886699507389%"),
    top: hp("4.371584699453564%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_55_4647: {
    flexGrow: 1,
    width: wp("38.30049261083744%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.970443349753694%"),
    top: hp("1.0928961748633697%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_4648: {
    width: wp("13.754979025554187%"),
    minWidth: wp("13.754979025554187%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_55_4649: {
    width: wp("11.945812807881774%"),
    minWidth: wp("11.945812807881774%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_55_4649: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  ImageBackground_140_11596: {
    width: wp("0.8239445427955665%"),
    minWidth: wp("0.8239445427955665%"),
    height: hp("1.5626334101775958%"),
    minHeight: hp("1.5626334101775958%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.93103448275862%"),
    top: hp("0.8580275572062988%")
  },
  ImageBackground_55_4651: {
    width: wp("6.280788177339902%"),
    minWidth: wp("6.280788177339902%"),
    height: hp("2.366696550546448%"),
    minHeight: hp("2.366696550546448%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.01970443349754%"),
    top: hp("1.8221162056011053%")
  },
  View_55_4468: {
    flexGrow: 1,
    width: wp("38.30049261083744%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.970443349753694%"),
    top: hp("7.650273224043701%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_4468_55_4106: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_4468_55_4105: {
    width: wp("3.571428571428571%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24630541871921174%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I55_4468_55_4105: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I55_4468_55_4107: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.726600985221676%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_4468_55_4104: {
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06157635467980427%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I55_4468_55_4104: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I55_4468_55_4108: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.453201970443349%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_4468_55_4103: {
    width: wp("3.32512315270936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.36945812807882206%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I55_4468_55_4103: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I55_4468_55_4109: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.179802955665025%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_4468_55_4102: {
    width: wp("3.8177339901477834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06157635467980427%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I55_4468_55_4102: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I55_4468_55_4110: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.9064039408867%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_4468_55_4101: {
    width: wp("3.571428571428571%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24630541871920997%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I55_4468_55_4101: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I55_4468_55_4111: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.633004926108374%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_4468_55_4100: {
    width: wp("2.586206896551724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6773399014778292%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I55_4468_55_4100: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I55_4468_55_4112: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.35960591133005%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_4468_55_4099: {
    width: wp("3.201970443349754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3694581280788256%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I55_4468_55_4099: {
    color: "rgba(60, 60, 67, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_55_2889: {
    flexGrow: 1,
    width: wp("38.30049261083744%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.970443349753694%"),
    top: hp("11.47540983606558%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2889_55_7417: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2889_55_7351: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.726600985221676%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2889_55_7290: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.453201970443349%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2889_55_3927: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316848%"),
    justifyContent: "center"
  },
  Text_I55_2889_55_3927: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_2889_55_7234: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.179802955665025%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2889_55_3946: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316848%"),
    justifyContent: "center"
  },
  Text_I55_2889_55_3946: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_2889_55_7183: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.9064039408867%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2889_55_3971: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316848%"),
    justifyContent: "center"
  },
  Text_I55_2889_55_3971: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_2889_55_7041: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.633004926108374%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2889_55_4002: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I55_2889_55_4002: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_2889_55_7000: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.35960591133005%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2889_55_4039: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316848%"),
    justifyContent: "center"
  },
  Text_I55_2889_55_4039: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_55_2890: {
    flexGrow: 1,
    width: wp("38.30049261083744%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.970443349753694%"),
    top: hp("18.032786885245883%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2890_55_7417: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792547%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2890_55_2861: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316848%"),
    justifyContent: "center"
  },
  Text_I55_2890_55_2861: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_2890_55_7351: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.726600985221676%"),
    top: hp("1.3661202185792547%"),
    backgroundColor: "rgba(255, 59, 48, 1)"
  },
  View_I55_2890_55_3914: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316848%"),
    justifyContent: "center"
  },
  Text_I55_2890_55_3914: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_2890_55_7290: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.453201970443349%"),
    top: hp("1.3661202185792547%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2890_55_3927: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316848%"),
    justifyContent: "center"
  },
  Text_I55_2890_55_3927: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_2890_55_7234: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.179802955665025%"),
    top: hp("1.3661202185792547%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2890_55_3946: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316848%"),
    justifyContent: "center"
  },
  Text_I55_2890_55_3946: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_2890_55_7183: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.9064039408867%"),
    top: hp("1.3661202185792547%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2890_55_3971: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316848%"),
    justifyContent: "center"
  },
  Text_I55_2890_55_3971: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_2890_55_7041: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.633004926108374%"),
    top: hp("1.3661202185792547%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2890_55_4002: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I55_2890_55_4002: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_2890_55_7000: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.35960591133005%"),
    top: hp("1.3661202185792547%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2890_55_4039: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316848%"),
    justifyContent: "center"
  },
  Text_I55_2890_55_4039: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_55_2891: {
    flexGrow: 1,
    width: wp("38.30049261083744%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.970443349753694%"),
    top: hp("24.590163934426215%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2891_55_7417: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2891_55_2861: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874317132%"),
    justifyContent: "center"
  },
  Text_I55_2891_55_2861: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_2891_55_7351: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.726600985221676%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2891_55_3914: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874317132%"),
    justifyContent: "center"
  },
  Text_I55_2891_55_3914: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_2891_55_7290: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.453201970443349%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2891_55_3927: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874317132%"),
    justifyContent: "center"
  },
  Text_I55_2891_55_3927: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_2891_55_7234: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.179802955665025%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2891_55_3946: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874317132%"),
    justifyContent: "center"
  },
  Text_I55_2891_55_3946: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_2891_55_7183: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.9064039408867%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2891_55_3971: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874317132%"),
    justifyContent: "center"
  },
  Text_I55_2891_55_3971: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_2891_55_7041: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.633004926108374%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2891_55_4002: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I55_2891_55_4002: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_2891_55_7000: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.35960591133005%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2891_55_4039: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874317132%"),
    justifyContent: "center"
  },
  Text_I55_2891_55_4039: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_55_2892: {
    flexGrow: 1,
    width: wp("38.30049261083744%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.970443349753694%"),
    top: hp("31.147540983606547%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2892_55_7417: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2892_55_2861: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874317132%"),
    justifyContent: "center"
  },
  Text_I55_2892_55_2861: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_2892_55_7351: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.726600985221676%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2892_55_3914: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874317132%"),
    justifyContent: "center"
  },
  Text_I55_2892_55_3914: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_2892_55_7290: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.453201970443349%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2892_55_3927: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874317132%"),
    justifyContent: "center"
  },
  Text_I55_2892_55_3927: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_2892_55_7234: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.179802955665025%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2892_55_3946: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874317132%"),
    justifyContent: "center"
  },
  Text_I55_2892_55_3946: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_2892_55_7183: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.9064039408867%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2892_55_3971: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874317132%"),
    justifyContent: "center"
  },
  Text_I55_2892_55_3971: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_2892_55_7041: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.633004926108374%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2892_55_4002: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I55_2892_55_4002: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_2892_55_7000: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.35960591133005%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2892_55_4039: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874317132%"),
    justifyContent: "center"
  },
  Text_I55_2892_55_4039: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_55_2893: {
    flexGrow: 1,
    width: wp("38.30049261083744%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.970443349753694%"),
    top: hp("37.70491803278691%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2893_55_7417: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185791979%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2893_55_2861: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874317132%"),
    justifyContent: "center"
  },
  Text_I55_2893_55_2861: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_2893_55_7351: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.726600985221676%"),
    top: hp("1.3661202185791979%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2893_55_3914: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874317132%"),
    justifyContent: "center"
  },
  Text_I55_2893_55_3914: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_2893_55_7290: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.453201970443349%"),
    top: hp("1.3661202185791979%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2893_55_3927: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874317132%"),
    justifyContent: "center"
  },
  Text_I55_2893_55_3927: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_2893_55_7234: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.179802955665025%"),
    top: hp("1.3661202185791979%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2893_55_3946: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874317132%"),
    justifyContent: "center"
  },
  Text_I55_2893_55_3946: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_2893_55_7183: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.9064039408867%"),
    top: hp("1.3661202185791979%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2893_55_7041: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.633004926108374%"),
    top: hp("1.3661202185791979%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_2893_55_7000: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.35960591133005%"),
    top: hp("1.3661202185791979%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_3382: {
    flexGrow: 1,
    width: wp("42.364532019704434%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06157635467980249%"),
    top: hp("42.62295081967213%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_3394: {
    width: wp("5.541871921182266%"),
    minWidth: wp("5.541871921182266%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9704433497536957%"),
    top: hp("3.005464480874309%"),
    justifyContent: "flex-start"
  },
  Text_55_3394: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_55_4915: {
    width: wp("23.76847290640394%"),
    minWidth: wp("23.76847290640394%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.625615763546804%"),
    top: hp("2.1857923497267677%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_4825: {
    width: wp("10.591133004926109%"),
    minWidth: wp("10.591133004926109%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(118, 118, 128, 0.11999999731779099)",
    overflow: "hidden"
  },
  View_I55_4825_55_4605: {
    flexGrow: 1,
    width: wp("8.620689655172415%"),
    height: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9852216748768434%"),
    top: hp("0.5464480874316848%")
  },
  View_I55_4825_55_4606: {
    width: wp("3.4482758620689653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.172413793103452%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I55_4825_55_4606: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I55_4825_55_4607: {
    width: wp("0.6157635467980296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.064039408866996%"),
    top: hp("0.13661202185795673%"),
    justifyContent: "flex-start"
  },
  Text_I55_4825_55_4607: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I55_4825_55_4608: {
    width: wp("3.4482758620689653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I55_4825_55_4608: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_55_4759: {
    width: wp("12.438423645320198%"),
    minWidth: wp("12.438423645320198%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.33004926108374%"),
    top: hp("0%"),
    backgroundColor: "rgba(118, 118, 128, 0.11999999731779099)",
    overflow: "hidden"
  },
  View_I55_4759_6_827: {
    flexGrow: 1,
    width: wp("5.972906403940887%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24630541871920997%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I55_4759_6_827_6_807: {
    flexGrow: 1,
    width: wp("4.064039408866995%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.985221674876847%"),
    top: hp("1.092896174863398%"),
    justifyContent: "center"
  },
  Text_I55_4759_6_827_6_807: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  TouchableOpacity_I55_4759_6_828: {
    flexGrow: 1,
    width: wp("5.972906403940887%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.2192118226601%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_4759_6_828_6_811: {
    flexGrow: 1,
    width: wp("4.064039408866995%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.985221674876847%"),
    top: hp("1.092896174863398%"),
    justifyContent: "center"
  },
  Text_I55_4759_6_828_6_811: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_55_8407: {
    width: wp("42.241379310344826%"),
    minWidth: wp("42.241379310344826%"),
    height: hp("51.91256830601093%"),
    minHeight: hp("51.91256830601093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.940886699507389%"),
    top: hp("60.65573770491804%"),
    backgroundColor: "rgba(28, 28, 30, 1)"
  },
  View_55_8408: {
    flexGrow: 1,
    width: wp("38.30049261083744%"),
    height: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.970443349753694%"),
    top: hp("1.0928961748633697%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_8409: {
    width: wp("13.754979025554187%"),
    minWidth: wp("13.754979025554187%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792547%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_55_8410: {
    width: wp("11.945812807881774%"),
    minWidth: wp("11.945812807881774%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_55_8410: {
    color: "rgba(255, 59, 48, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  ImageBackground_140_11595: {
    width: wp("0.8239445427955665%"),
    minWidth: wp("0.8239445427955665%"),
    height: hp("1.5626334101775958%"),
    minHeight: hp("1.5626334101775958%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.93103448275862%"),
    top: hp("0.8580275572062703%")
  },
  ImageBackground_55_8412: {
    width: wp("6.280788177339902%"),
    minWidth: wp("6.280788177339902%"),
    height: hp("2.366696550546448%"),
    minHeight: hp("2.366696550546448%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.01970443349754%"),
    top: hp("1.8221162056011053%")
  },
  View_55_8415: {
    flexGrow: 1,
    width: wp("38.30049261083744%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.970443349753694%"),
    top: hp("7.65027322404373%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8415_55_4137: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8415_55_4138: {
    width: wp("3.571428571428571%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24630541871921174%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I55_8415_55_4138: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I55_8415_55_4139: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.726600985221676%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8415_55_4140: {
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06157635467980427%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I55_8415_55_4140: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I55_8415_55_4141: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.453201970443349%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8415_55_4142: {
    width: wp("3.32512315270936%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.36945812807882206%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I55_8415_55_4142: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I55_8415_55_4143: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.179802955665025%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8415_55_4144: {
    width: wp("3.8177339901477834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06157635467980427%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I55_8415_55_4144: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I55_8415_55_4145: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.9064039408867%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8415_55_4146: {
    width: wp("3.571428571428571%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24630541871920997%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I55_8415_55_4146: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I55_8415_55_4147: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.633004926108374%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8415_55_4148: {
    width: wp("2.586206896551724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6773399014778292%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I55_8415_55_4148: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_I55_8415_55_4149: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.35960591133005%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8415_55_4150: {
    width: wp("3.201970443349754%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.3694581280788256%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I55_8415_55_4150: {
    color: "rgba(235, 235, 245, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.07800000160932541,
    textTransform: "none"
  },
  View_55_8416: {
    flexGrow: 1,
    width: wp("38.30049261083744%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.970443349753694%"),
    top: hp("11.475409836065552%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8416_55_7699: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792547%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8416_55_7701: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.726600985221676%"),
    top: hp("1.3661202185792547%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8416_55_7703: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.453201970443349%"),
    top: hp("1.3661202185792547%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8416_55_7704: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874317132%"),
    justifyContent: "center"
  },
  Text_I55_8416_55_7704: {
    color: "rgba(255, 69, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_8416_55_7705: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.179802955665025%"),
    top: hp("1.3661202185792547%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8416_55_7706: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874317132%"),
    justifyContent: "center"
  },
  Text_I55_8416_55_7706: {
    color: "rgba(255, 69, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_8416_55_7707: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.9064039408867%"),
    top: hp("1.3661202185792547%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8416_55_7708: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874317132%"),
    justifyContent: "center"
  },
  Text_I55_8416_55_7708: {
    color: "rgba(255, 69, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_8416_55_7709: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.633004926108374%"),
    top: hp("1.3661202185792547%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8416_55_7710: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I55_8416_55_7710: {
    color: "rgba(255, 69, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_8416_55_7711: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.35960591133005%"),
    top: hp("1.3661202185792547%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8416_55_7712: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874317132%"),
    justifyContent: "center"
  },
  Text_I55_8416_55_7712: {
    color: "rgba(255, 69, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_55_8417: {
    flexGrow: 1,
    width: wp("38.30049261083744%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.970443349753694%"),
    top: hp("18.032786885245883%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8417_55_7699: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792547%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8417_55_7700: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316848%"),
    justifyContent: "center"
  },
  Text_I55_8417_55_7700: {
    color: "rgba(255, 69, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_8417_55_7701: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.726600985221676%"),
    top: hp("1.3661202185792547%"),
    backgroundColor: "rgba(255, 69, 58, 1)"
  },
  View_I55_8417_55_7702: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316848%"),
    justifyContent: "center"
  },
  Text_I55_8417_55_7702: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_8417_55_7703: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.453201970443349%"),
    top: hp("1.3661202185792547%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8417_55_7704: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316848%"),
    justifyContent: "center"
  },
  Text_I55_8417_55_7704: {
    color: "rgba(255, 69, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_8417_55_7705: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.179802955665025%"),
    top: hp("1.3661202185792547%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8417_55_7706: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316848%"),
    justifyContent: "center"
  },
  Text_I55_8417_55_7706: {
    color: "rgba(255, 69, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_8417_55_7707: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.9064039408867%"),
    top: hp("1.3661202185792547%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8417_55_7708: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316848%"),
    justifyContent: "center"
  },
  Text_I55_8417_55_7708: {
    color: "rgba(255, 69, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_8417_55_7709: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.633004926108374%"),
    top: hp("1.3661202185792547%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8417_55_7710: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I55_8417_55_7710: {
    color: "rgba(255, 69, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_8417_55_7711: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.35960591133005%"),
    top: hp("1.3661202185792547%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8417_55_7712: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316848%"),
    justifyContent: "center"
  },
  Text_I55_8417_55_7712: {
    color: "rgba(255, 69, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_55_8418: {
    flexGrow: 1,
    width: wp("38.30049261083744%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.970443349753694%"),
    top: hp("24.590163934426215%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8418_55_7699: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792547%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8418_55_7700: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316848%"),
    justifyContent: "center"
  },
  Text_I55_8418_55_7700: {
    color: "rgba(255, 69, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_8418_55_7701: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.726600985221676%"),
    top: hp("1.3661202185792547%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8418_55_7702: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316848%"),
    justifyContent: "center"
  },
  Text_I55_8418_55_7702: {
    color: "rgba(255, 69, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_8418_55_7703: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.453201970443349%"),
    top: hp("1.3661202185792547%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8418_55_7704: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316848%"),
    justifyContent: "center"
  },
  Text_I55_8418_55_7704: {
    color: "rgba(255, 69, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_8418_55_7705: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.179802955665025%"),
    top: hp("1.3661202185792547%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8418_55_7706: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316848%"),
    justifyContent: "center"
  },
  Text_I55_8418_55_7706: {
    color: "rgba(255, 69, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_8418_55_7707: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.9064039408867%"),
    top: hp("1.3661202185792547%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8418_55_7708: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316848%"),
    justifyContent: "center"
  },
  Text_I55_8418_55_7708: {
    color: "rgba(255, 69, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_8418_55_7709: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.633004926108374%"),
    top: hp("1.3661202185792547%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8418_55_7710: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I55_8418_55_7710: {
    color: "rgba(255, 69, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_8418_55_7711: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.35960591133005%"),
    top: hp("1.3661202185792547%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8418_55_7712: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316848%"),
    justifyContent: "center"
  },
  Text_I55_8418_55_7712: {
    color: "rgba(255, 69, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_55_8419: {
    flexGrow: 1,
    width: wp("38.30049261083744%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.970443349753694%"),
    top: hp("31.147540983606547%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8419_55_7699: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792831%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8419_55_7700: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316564%"),
    justifyContent: "center"
  },
  Text_I55_8419_55_7700: {
    color: "rgba(255, 69, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_8419_55_7701: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.726600985221676%"),
    top: hp("1.3661202185792831%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8419_55_7702: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316564%"),
    justifyContent: "center"
  },
  Text_I55_8419_55_7702: {
    color: "rgba(255, 69, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_8419_55_7703: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.453201970443349%"),
    top: hp("1.3661202185792831%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8419_55_7704: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316564%"),
    justifyContent: "center"
  },
  Text_I55_8419_55_7704: {
    color: "rgba(255, 69, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_8419_55_7705: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.179802955665025%"),
    top: hp("1.3661202185792831%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8419_55_7706: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316564%"),
    justifyContent: "center"
  },
  Text_I55_8419_55_7706: {
    color: "rgba(255, 69, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_8419_55_7707: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.9064039408867%"),
    top: hp("1.3661202185792831%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8419_55_7708: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316564%"),
    justifyContent: "center"
  },
  Text_I55_8419_55_7708: {
    color: "rgba(255, 69, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_8419_55_7709: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.633004926108374%"),
    top: hp("1.3661202185792831%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8419_55_7710: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I55_8419_55_7710: {
    color: "rgba(255, 69, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_8419_55_7711: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.35960591133005%"),
    top: hp("1.3661202185792831%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8419_55_7712: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874316564%"),
    justifyContent: "center"
  },
  Text_I55_8419_55_7712: {
    color: "rgba(255, 69, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_55_8420: {
    flexGrow: 1,
    width: wp("38.30049261083744%"),
    height: hp("7.103825136612022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.970443349753694%"),
    top: hp("37.70491803278688%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8420_55_7699: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8420_55_7700: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874317132%"),
    justifyContent: "center"
  },
  Text_I55_8420_55_7700: {
    color: "rgba(255, 69, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_8420_55_7701: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.726600985221676%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8420_55_7702: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874317132%"),
    justifyContent: "center"
  },
  Text_I55_8420_55_7702: {
    color: "rgba(255, 69, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_8420_55_7703: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.453201970443349%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8420_55_7704: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874317132%"),
    justifyContent: "center"
  },
  Text_I55_8420_55_7704: {
    color: "rgba(255, 69, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_8420_55_7705: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.179802955665025%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8420_55_7706: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.5464480874317132%"),
    justifyContent: "center"
  },
  Text_I55_8420_55_7706: {
    color: "rgba(255, 69, 58, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_I55_8420_55_7707: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.9064039408867%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8420_55_7709: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.633004926108374%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8420_55_7711: {
    flexGrow: 1,
    width: wp("3.9408866995073892%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.35960591133005%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_8421: {
    flexGrow: 1,
    width: wp("42.364532019704434%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.06157635467980249%"),
    top: hp("42.62295081967213%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_8422: {
    width: wp("5.541871921182266%"),
    minWidth: wp("5.541871921182266%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9704433497536957%"),
    top: hp("3.005464480874309%"),
    justifyContent: "flex-start"
  },
  Text_55_8422: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_55_8423: {
    width: wp("23.76847290640394%"),
    minWidth: wp("23.76847290640394%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.625615763546804%"),
    top: hp("2.185792349726796%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_55_8424: {
    width: wp("10.591133004926109%"),
    minWidth: wp("10.591133004926109%"),
    height: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(118, 118, 128, 0.23999999463558197)",
    overflow: "hidden"
  },
  View_I55_8424_55_4628: {
    flexGrow: 1,
    width: wp("8.620689655172415%"),
    height: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9852216748768434%"),
    top: hp("0.5464480874317132%")
  },
  View_I55_8424_55_4629: {
    width: wp("3.4482758620689653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.172413793103452%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I55_8424_55_4629: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I55_8424_55_4630: {
    width: wp("0.6157635467980296%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.064039408866996%"),
    top: hp("0.1366120218578999%"),
    justifyContent: "flex-start"
  },
  Text_I55_8424_55_4630: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_I55_8424_55_4631: {
    width: wp("3.4482758620689653%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I55_8424_55_4631: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_55_8425: {
    width: wp("12.438423645320198%"),
    minWidth: wp("12.438423645320198%"),
    height: hp("4.918032786885246%"),
    minHeight: hp("4.918032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.33004926108374%"),
    top: hp("0%"),
    backgroundColor: "rgba(118, 118, 128, 0.23999999463558197)",
    overflow: "hidden"
  },
  TouchableOpacity_I55_8425_38_2884: {
    flexGrow: 1,
    width: wp("5.972906403940887%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24630541871920997%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(99, 99, 102, 1)"
  },
  View_I55_8425_38_2884_6_815: {
    flexGrow: 1,
    width: wp("4.064039408866995%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.985221674876847%"),
    top: hp("1.0928961748633697%"),
    justifyContent: "center"
  },
  Text_I55_8425_38_2884_6_815: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_I55_8425_38_2885: {
    flexGrow: 1,
    width: wp("5.972906403940887%"),
    height: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.2192118226601%"),
    top: hp("0.2732240437158566%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I55_8425_38_2885_6_819: {
    flexGrow: 1,
    width: wp("4.1871921182266005%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.985221674876847%"),
    top: hp("1.0928961748633697%"),
    justifyContent: "center"
  },
  Text_I55_8425_38_2885_6_819: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
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
