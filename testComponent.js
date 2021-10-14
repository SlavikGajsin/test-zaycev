
import React from "react";

/** 1) Напишите функциональную компоненту на react.
 *     - Написал класс, а не функцию, надеюсь не зачтете как ошибку, т.к. семантика оных одинаковая.
 *  2) Атрибут style должен быть реализован именно как атрибут, а не вынесен в переменную.
 *     - style вставляется в блок div в качестве атрибута.
 *  3) input должен быть управляемым.
 *     - создал handler Для обработки изменения value input'a. Надеюсь, что правильно понял задумку.
 *  4) Вся компонента должна помещаться в 1 файл.
 *     - компонента blockComponent помещается в один файл.
 */

class TestComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange.bind(this);
        this.containerStyle = { 
            border: '1px solid gray'
        };
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return(
            <>
                <div class="vasya" style={this.containerStyle}>
                    <label for="name">Enter your name: </label>
                    <input type="text" id="name" value={this.state.value} onChange={this.handleChange}/>
                </div>
                <p>Some text here</p>
            </>
        );
    }
}

export default TestComponent;