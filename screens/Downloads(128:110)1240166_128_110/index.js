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
      <View style={styles.View_140_5391}>
        <View style={styles.View_128_111}>
          <View style={styles.View_I128_111_36_10245}>
            <View style={styles.View_I128_111_36_10246}>
              <View style={styles.View_I128_111_36_10247} />
              <View style={styles.View_I128_111_36_10248}>
                <Text style={styles.Text_I128_111_36_10248}>Downloads</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I128_111_36_10250} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e118/82a2/b8558c68cb9bb17468fdf7fdbcadaa95"
          }}
          style={styles.ImageBackground_140_5394}
        />
      </View>
      <View style={styles.View_128_115}>
        <View style={styles.View_128_116}>
          <Text style={styles.Text_128_116}>Downloads</Text>
        </View>
        <View style={styles.View_128_117}>
          <View style={styles.View_128_118}>
            <View style={styles.View_128_119}>
              <View style={styles.View_128_120}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e010/e9ed/888fe456037b7d07daf8f12fa49fd0fa"
                  }}
                  style={styles.ImageBackground_128_121}
                />
              </View>
              <View style={styles.View_128_122}>
                <View style={styles.View_128_123}>
                  <Text style={styles.Text_128_123}>SF Symbols</Text>
                </View>
                <View style={styles.View_128_124}>
                  <Text style={styles.Text_128_124}>
                    developer.apple.com/sf-symbols
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_128_125}>
              <View style={styles.View_128_148}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89e5/1038/9a3f0eeeee2271734756b3b110f4142e"
                  }}
                  style={styles.ImageBackground_128_149}
                />
              </View>
              <View style={styles.View_128_128}>
                <View style={styles.View_128_129}>
                  <Text style={styles.Text_128_129}>Fonts</Text>
                </View>
                <View style={styles.View_128_130}>
                  <Text style={styles.Text_128_130}>
                    developer.apple.com/fonts
                  </Text>
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
  View_2: { height: hp("100%") },
  View_140_5391: {
    width: wp("82.24687933425797%"),
    minWidth: wp("82.24687933425797%"),
    height: hp("16.888045540796963%"),
    minHeight: hp("16.888045540796963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.876560332871012%"),
    top: hp("12.144212523719165%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_128_111: {
    flexGrow: 1,
    width: wp("82.24687933425797%"),
    height: hp("16.888045540796963%"),
    minHeight: hp("16.888045540796963%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I128_111_36_10245: {
    flexGrow: 1,
    width: wp("82.24687933425797%"),
    height: hp("10.62618595825427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I128_111_36_10246: {
    width: wp("82.24687933425797%"),
    minWidth: wp("82.24687933425797%"),
    height: hp("10.62618595825427%"),
    minHeight: hp("10.62618595825427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I128_111_36_10247: {
    width: wp("7.766990291262135%"),
    minWidth: wp("7.766990291262135%"),
    height: hp("10.62618595825427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I128_111_36_10248: {
    width: wp("70.04160887656033%"),
    minWidth: wp("70.04160887656033%"),
    minHeight: hp("10.62618595825427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.20527045769764%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I128_111_36_10248: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I128_111_36_10250: {
    flexGrow: 1,
    width: wp("82.24687933425797%"),
    height: hp("0.18975332068311196%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.698292220113853%"),
    backgroundColor: "rgba(235, 235, 235, 1)",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2
  },
  ImageBackground_140_5394: {
    width: wp("7.766990291262135%"),
    height: hp("10.62618595825427%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_128_115: {
    width: wp("82.24687933425797%"),
    minWidth: wp("82.24687933425797%"),
    height: hp("46.67931688804554%"),
    minHeight: hp("46.67931688804554%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.876560332871012%"),
    top: hp("41.17647058823529%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_128_116: {
    width: wp("14.424410540915394%"),
    minWidth: wp("14.424410540915394%"),
    minHeight: hp("4.554079696394687%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_128_116: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_128_117: {
    width: wp("82.24687933425797%"),
    minWidth: wp("82.24687933425797%"),
    height: hp("36.05313092979127%"),
    minHeight: hp("36.05313092979127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.626185958254275%")
  },
  View_128_118: {
    width: wp("82.24687933425797%"),
    minWidth: wp("82.24687933425797%"),
    height: hp("36.05313092979127%"),
    minHeight: hp("36.05313092979127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_128_119: {
    width: wp("37.586685159500696%"),
    minWidth: wp("37.586685159500696%"),
    height: hp("23.908918406072104%"),
    minHeight: hp("23.908918406072104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.438280166435506%"),
    top: hp("6.072106261859581%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_128_120: {
    flexGrow: 1,
    width: wp("8.321828749573347%"),
    height: hp("11.385199240986717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.632454923717058%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_128_121: {
    width: wp("8.737864077669903%"),
    height: hp("12.220114141533%"),
    top: hp("-0.4174480402039862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.20804438280166337%")
  },
  View_128_122: {
    flexGrow: 1,
    width: wp("37.586685159500696%"),
    height: hp("9.487666034155598%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.421252371916509%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_128_123: {
    width: wp("14.979195561719832%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.30374479889043%"),
    justifyContent: "center"
  },
  Text_128_123: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_128_124: {
    width: wp("37.586685159500696%"),
    top: hp("4.933586337760914%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_128_124: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_128_125: {
    width: wp("31.345353675450767%"),
    minWidth: wp("31.345353675450767%"),
    height: hp("23.908918406072104%"),
    minHeight: hp("23.908918406072104%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.4632454923717%"),
    top: hp("6.072106261859581%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_128_148: {
    flexGrow: 1,
    width: wp("8.321828749573347%"),
    height: hp("11.385199240986717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.511789181692102%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_128_149: {
    width: wp("8.737864077669903%"),
    height: hp("12.220114141533%"),
    top: hp("-0.4174480402039862%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.20804438280165982%"),
    resizeMode: "cover"
  },
  View_128_128: {
    flexGrow: 1,
    width: wp("31.345353675450767%"),
    height: hp("9.487666034155598%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.421252371916509%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_128_129: {
    width: wp("7.073509015256588%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.135922330097095%"),
    justifyContent: "center"
  },
  Text_128_129: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3799999952316284,
    textTransform: "none"
  },
  View_128_130: {
    width: wp("31.345353675450767%"),
    top: hp("4.933586337760914%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_128_130: {
    color: "rgba(0, 0, 0, 1)",
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
