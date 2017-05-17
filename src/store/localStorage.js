export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if(serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState);
  } catch(err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    console.log("save state done");
    localStorage.setItem('state', serializedState);
  }
  catch (err) {
    console.log("save state false");
  }
}

export const initState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    console.log("init state done");
    localStorage.setItem('state', serializedState);
  }
  catch (err) {
    console.log("init state false");
  }
}

window.initState = initState;