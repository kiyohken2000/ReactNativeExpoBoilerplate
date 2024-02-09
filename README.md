# React Native Expo Boilerplate

<a href="https://www.buymeacoffee.com/votepurchase" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

## Screens

<img src='https://github.com/kiyohken2000/ReactNativeExpoBoilerplate/blob/master/__DELELE_ME__/img.jpg' width='80%'>

Sign in and Sign up screen(option)

<img src='https://github.com/kiyohken2000/ReactNativeExpoBoilerplate/blob/master/__DELELE_ME__/img1.jpg' width='80%'>

## Infrastructure

- React Native 
- Expo

## Libraries

- expo
- axios
- react-navigation
- react-native-svg
- react-native-vector-icons
- moment
- lottie-react-native

## Features

- BottomTab, TopTab, Modal and Stack navigation
- Local storage
- lottie animation

## Requirements

- Node 18
- Yarn 1.22.x

## How to use

### 1. Install

Download zip or click "Use this template"

```
yarn install
```

### 2. update `app.json`

```
"name": "your-app-name",
"slug": "your-app-slug",
```

### 3. Run

```
yarn start
```

**Option**

If you do not need sign in screen, set `isAutoLogin` to `true` in `config.js`.

## How to use utils

- ### Storage

```javascript
import { storage } from '../../utils/storage'

const saveStorage = async() => {
  const today = moment().toString()
  await storage.save({
    key: 'date',
    data: {
      'date': today
    }
  })
}

const loadStorage = async() => {
  try {
    const result = await storage.load({key: 'date'})
  } catch (e) {
    console.log(e)
  }
}

const removeStorage = async() => {
  await storage.remove({ key: 'date' })
}
```

- ### Toast

```javascript
import { showToast } from '../../utils/showToast'

const onShowToastPress = () => {
  showToast({title: 'Hello', body: 'React Native Developer'})
}
```

- ### Data fetch, Loading, Error

```javascript
export default function Print() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false) // Create loading flag
  const [isError, setIsError] = useState(false) // Create error flag

  const fetchData = async() => {
    try {
      setIsLoading(true) // Set flag
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setData(data)
    } catch(e) {
      console.log('error', e)
      setIsError(true) // Set flag
    } finally {
      setIsLoading(false) // Set flag
    }
  }

  return (
    <ScreenTemplate isLoading={isLoading} isError={isError} isEmpty={data.length === 0}> {/* Pass flag to ScreenTemplate component */}
      <ScrollView style={styles.main}>
        {data.map((item, i) => {
          return (
            <RenderItem item={item} key={i} index={i} />
          )
        })}
      </ScrollView>
    </ScreenTemplate>
  )
}
```

- ### Dynamic header title

Example `src\routes\navigation\stacks\ModalStacks.js` and `src\scenes\modal\Modal.js`.

Step 1: Import `HomeTitleContext` into stacks component.

```javascript
import { HomeTitleContext } from "../../../contexts/HomeTitleContext";
```

Step 2: Create default title state.

```javascript
const [title, setTitle] = useState('default title')
```

Step 3: Wrap `Stack.Navigator` with `HomeTitleContext`. And pass `ctx.title` to `options.title`.

```javascript
<HomeTitleContext.Provider
  value={{
    title,
    setTitle,
  }}
>
  <HomeTitleContext.Consumer>
    {(ctx) => (
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen
          name='Modal'
          component={Modal}
          options={{
            title: ctx.title, // <= this
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
  )}
  </HomeTitleContext.Consumer>
</HomeTitleContext.Provider>
```

Step 4: Import `useFocusEffect` and `useContext` and `HomeTitleContext` in scene component.

```javascript
import React, { useContext } from "react";
import { useFocusEffect } from '@react-navigation/native'
import { HomeTitleContext } from "../../contexts/HomeTitleContext";
```

Step 5: Set header title.

```javascript
const { setTitle } = useContext(HomeTitleContext)

useFocusEffect(() => {
  setTitle('header title')
});
```

## Licence

This project is available under the MIT license. See the [LICENSE](https://github.com/kiyohken2000/ReactNativeExpoBoilerplate/blob/master/LICENSE) file for more info.