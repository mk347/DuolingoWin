import { useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import question from './assets/data/oneQuestionWithOption';
import ImageItem from "./components/ImageItem";
import Button from "./components/button";

const App = () => {
  
  const [selected, setSelected] = useState(null);
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{question.question}</Text>

      <View style={styles.optionsContainer}>
        {question.options.map((option) => (
          <ImageItem 
            image={option.image}
            text={option.text}
            key={option.id}
            // Using initial state var to compare with options data id
            isSelected={selected?.id === option.id}
            onPress={() => setSelected(option)}
          />
        ))}
      </View>
      <Button />
    </View>
  );
};

export default App;