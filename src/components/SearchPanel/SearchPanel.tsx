import { FC, CSSProperties, ChangeEventHandler, FormEvent, useRef } from "react";

import { useAppDispatch, useAppSelector } from "../../store/store";
import {changeFocus, changeInputValue, fetchData} from '../../store/userSlice';

import './SearchPanel.scss';



const SearchPanel: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const {inputFocus, inputValue} = useAppSelector(state => state.userInfo);

  const animationUp = {
    animationName: 'flyUp',
    animationDuration: '.2s',
    animationTimingFunction: 'linear',
    animationFillMode: 'forwards'
  }
  const animationDown = {
    animationName: 'flyDown',
    animationDuration: '.2s',
    animationTimingFunction: 'linear',
    animationFillMode: 'forwards'
  }

  const onFocus = (status: boolean) => {
    inputRef.current?.focus();
    dispatch(changeFocus(status))
  }

  const labelStyle = (): CSSProperties => {

     if ((inputFocus && inputValue !== '') || (inputFocus && inputValue === '')) {     
      return animationUp;
    } else if (!inputFocus && inputValue === '') {
      return animationDown
    } else if (!inputFocus && inputValue !== '') {     
      return {top: 0}
    } else {
      return animationUp
    }
  }

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(changeInputValue(e.target.value))
  }


  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchData(inputValue));

    dispatch(changeInputValue(''))
      
  }
  
  return (
    <form   
      className="search"
      onSubmit={submitForm}
      >
      <div className="search__line">
        <input 
          onFocus={() => onFocus(true)}
          onBlur={() => onFocus(false)}
          ref={inputRef}
          onChange={onInputChange}
          id="search__line-input" 
          type="text" 
          className="search__line-input" 
          placeholder=""
          value={inputValue}/>
        <label 
          onClick={() => onFocus(true)}
          htmlFor="search__line-input" 
          style={labelStyle()}
          className="search__line-label">Write username</label>
      </div>
      
      <button type='submit' className="search__button">Search User</button>
    </form>
  )
}

export default SearchPanel;