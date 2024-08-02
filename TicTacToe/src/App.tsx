import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Snackbar from 'react-native-snackbar';
import Icon from "react-native-vector-icons/FontAwesome"
import Icons from './components/Icons';


export default function App() {

  const [grid, setGrid] = useState(new Array(9).fill('empty', 0, 9));
  const [isCross, setIsCross] = useState<boolean>(false);
  const [winner, setWinner] = useState('');

  const resetGrid = ()=>{
    setGrid(new Array(9).fill('empty', 0, 9));~
    setIsCross(false);
    setWinner('');
  }

  const checkWinner = (newGrid: string[])=>{
    if(newGrid[0] === newGrid[1] && newGrid[0] === newGrid[2] && newGrid[0] !== 'empty'){
      return `${newGrid[0] === 'cross'?'Player 1':'Player 2'} Won the game`;
    }
    if(newGrid[0] === newGrid[3] && newGrid[0] === newGrid[6] && newGrid[0] !== 'empty'){
      return `${newGrid[0] === 'cross'?'Player 1':'Player 2'} Won the game`;
    }
    if(newGrid[1] === newGrid[4] && newGrid[1] === newGrid[7] && newGrid[1] !== 'empty'){
      return `${newGrid[1] === 'cross'?'Player 1':'Player 2'} Won the game`;
    }
    if(newGrid[2] === newGrid[5] && newGrid[2] === newGrid[8] && newGrid[2] !== 'empty'){
      return `${newGrid[2] === 'cross'?'Player 1':'Player 2'} Won the game`;
    }
    if(newGrid[3] === newGrid[4] && newGrid[3] === newGrid[5] && newGrid[3] !== 'empty'){
      return `${newGrid[3] === 'cross'?'Player 1':'Player 2'} Won the game`;
    }
    if(newGrid[6] === newGrid[7] && newGrid[6] === newGrid[8] && newGrid[6] !== 'empty'){
      return `${newGrid[6] === 'cross'?'Player 1':'Player 2'} Won the game`;
    }
    if(newGrid[0] === newGrid[4] && newGrid[0] === newGrid[8] && newGrid[0] !== 'empty'){
      return `${newGrid[0] === 'cross'?'Player 1':'Player 2'} Won the game`;
    }
    if(newGrid[2] === newGrid[4] && newGrid[2] === newGrid[6] && newGrid[2] !== 'empty'){
      return `${newGrid[2] === 'cross'?'Player 1':'Player 2'} Won the game`;
    }
    return '';
  }

  const checkDraw = ():boolean=>{
    if(grid[0] !== 'empty' && grid[1] !== 'empty' && grid[2] !== 'empty'
      && grid[3] !== 'empty' && grid[4] !== 'empty' && grid[5] !== 'empty'
      && grid[6] !== 'empty' && grid[7] !== 'empty' && grid[8] !== 'empty'
    ){
      return true;
    }

    return false;
  }

  const onPressBoard = (indexNumber: number)=>{
    const newGrid = [...grid];
    const alreadyWon = checkWinner(newGrid);
    if(alreadyWon !== ""){
      resetGrid();
      return;
    }
    if(grid[indexNumber] !== 'empty'){
      return Snackbar.show({
        text: "Already selected",
        backgroundColor: 'red'
      })
    }
    else{
      newGrid[indexNumber] = isCross?'cross':'circle';
      setGrid(newGrid);
      const isWin = checkWinner(newGrid);
      if( isWin === ""){
        setIsCross(!isCross);
        if(checkDraw()){
          resetGrid();
          return;
        }
        setGrid(newGrid);
      }
      else{
        setWinner(isWin);
        return Snackbar.show({
          text: isWin,
          backgroundColor: 'green'
        })
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={[styles.playerContainer, {backgroundColor:`${isCross?"green":"grey"}`}]}>
        <Text style={styles.player}>Player 1 <Icon name="times" size={20} color="#F7CD2E"/></Text>
      </View>
      <View style={styles.grid}>
        <FlatList
          data={grid}
          numColumns={3}
          renderItem={({item, index})=>(
            <TouchableOpacity
              style={[styles.item, {backgroundColor: `${item==='cross'?"#134B70":(item==='circle'?"#B43F3F":"grey")}`}]}
              key={index}
              onPress={()=>onPressBoard(index)}
            >
              <View>
                <Icons name={item}/>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={[styles.playerContainer, {backgroundColor:`${!isCross?"green":"grey"}`}]}>
        <Text style={styles.player}>Player 2 <Icon name="circle-thin" size={20} color="#F7CD2E"/></Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  playerContainer: {
    width: '95%',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  player: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  grid: {
    height: 400,
    width: 400,
    marginVertical: 50,
  },
  item: {
    width: '30%',
    aspectRatio: 1, // Keeps the item square
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
})