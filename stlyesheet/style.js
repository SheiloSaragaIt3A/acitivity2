import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',

  }, header: {
    marginTop: 30,
    height: 60,
    justifyContent: 'center',
    padding: 25,
    alignItems: 'flex-end'
  }
  , nav: {
    backgroundColor: '#bf360c',
    height: 30,
    width: 30,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',

  }
  , txt: {
    color: 'white',
    fontSize: 20,
  }, title: {
    alignItems: 'center'
  }
  , txt1: {
    fontSize: 50,
    color: 'whitesmoke',
    fontWeight: '500',
    fontFamily: ''

  }, search: {
    height: 70,
    width: 380,
    backgroundColor: '#303030',
    marginHorizontal: 20,
    marginVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderRadius: 40,
  }, icons: {
    flexDirection: 'row',
    gap: 20,
    marginRight: 10,
  }, seacrhtxt: {
    fontSize: 20,
    color: 'whitesmoke'
  }, col: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: -10,
    marginTop: -13,
  }, col1: {
    backgroundColor: '#303030',
    height: 65,
    width: 180,
    borderRadius: 30,
  }
  , col2: {
    backgroundColor: '#303030',
    height: 65,
    width: 180,
    borderRadius: 30,
  }, box1: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 18,
    marginLeft: -25,
    gap: -5,
  }, icn: {
    height: 30,
    width: 30,
    backgroundColor: '#1f1f1f',
    borderRadius: 50,
  }
  , icon1: {
    marginTop: 7,
    marginRight: 8,
    color: 'white',
    transform: [{ rotateY: '180deg' }],
  }, txts: {
    color: 'whitesmoke',
    fontSize: 12,
  }, txts2: {
    color: 'grey',
    fontSize: 10,
    marginTop: 3
  }, line: {
    height: 1,
    width: 500,
    backgroundColor: '#303030',
    marginTop: 20,
  }, centerbox: {
    height: 65,
    width: 390,
    backgroundColor: '#202125',
    borderWidth: 1.5,
    borderColor: '#303030',
    margin: 15,
    borderRadius: 10,
    flexDirection:'row',
    justifyContent: "space-between",
    padding: 10,
  },cloud:{
    flexDirection: 'row',
    alignItems:'center',
    gap:10,
    
  },num:{
    fontSize: 25,
    fontWeight:'300',
    color: 'whitesmoke'
  },place:{
    gap:5,
    padding:5
  },tagb:{
    fontSize:15,
    color:'whitesmoke'
  },init:{
    fontSize: 10,
    color:'grey'
  },img1:{
    height: 220,
    width:390,
    marginHorizontal:15,
    borderRadius: 15,
  },dis:{
    fontSize: 18,
    fontWeight:'400',
    color:'whitesmoke',
    marginHorizontal:15,
    marginVertical: 5,
  },mainfooter:{
    backgroundColor:'#303030',
    flex:1,
    marginTop: 30,
  },footer:{
    height: 80,
    flexDirection:'row',
    justifyContent:'space-around',
    gap: 30,
    marginTop: 20,
    paddingHorizontal:30,
   
  },dis1:{
    gap:5,
    alignItems:'center'
  }
  ,dis2:{
    gap:5,
    alignItems:'center'
  }
  ,dis3:{
    gap:5,
    alignItems:'center'
  },txtd1:{
    color:'#6c6d71',
  },mid:{
    padding:15,
    flexDirection:'row',
    justifyContent: 'space-between'
  },cpoint:{
    color:'whitesmoke',
    marginTop:-10,
    fontWeight:'300'
  },midicon:{
    flexDirection:'row',
    gap:20,
    margin: -15,
    marginRight:8
  },lrn:{
    padding:15,
    color:'whitesmoke',
    marginTop:-10,
  }
  ,txtd3:{
    color:'#4286f5'
  }


});
