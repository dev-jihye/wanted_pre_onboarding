# 원티드 프리온보딩 코스

원티드 프리온보딩 코스 과제 내용입니다.
HTML5, CSS, tailwindcss, Javascript, React를 통해 구현했습니다.

## Toggle

#### 구현한 방법과 이유에 대한 간략한 내용

toggle의 on/off 상태를 관리하기 위해 react의 useState 함수를 사용했습니다. toggle 상태에 따라 css를 적용해 toggle switch의 모양을 구현했습니다.

#### 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)

toggle의 on/off 상태에 따라 background color를 점점 차오르게 변경시키는 것이 tailwindcss로 부드럽게 구현하는데 어려움이 있었습니다. 안에 있는 흰 원을 이동시킬 때 클래스의 변경으로는 duration이 적용되지 않아 고민 끝에 인라인 스타일을 사용했습니다.

#### 자세한 실행 방법

toggle 버튼을 클릭할 때 onClick으로 triggerToggle 함수로 연결시켜 toggle의 on/off 상태를 변경할 수 있도록 만들었습니다.

## Modal

#### 구현한 방법과 이유에 대한 간략한 내용

modal의 open/close 상태를 관리하기 위해 isOpen, setIsOpen을 useState로 만들었습니다. modal button을 클릭하면 modal의 상태를 open으로, x 아이콘을 클릭하면 modal의 상태를 close로 변경시켰습니다.

#### 자세한 실행 방법

재사용이 가능한 컴포넌트로 구현하기 위해 modal btn과 modal content는 btnText, children으로 App.js에서 작성하도록 만들었습니다. modal btn을 눌렀을 때 modal창이 열리도록 onClick에 modalOpen 함수로 isOpen 상태를 조절할 수 있게 만들었고, x 아이콘을 누르면 modal창이 닫히도록 modalClose 함수를 만들었습니다.

## Tab

#### 구현한 방법과 이유에 대한 간략한 내용

tabs에 대한 데이터를 App.js에서 받아와 Tab.js에서 tab name과 content로 각 해당하는 탭에 맞게 보여줍니다.

#### 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)

onClick에 들어가는 함수를 처음에 onClick={setActive(tab.content)}로 작성하여 함수가 즉시 호출되어 탭에 따라 움직이지 않고 상태가 변경되지 않았습니다. 버튼을 클릭했을 때만 작동하게 하기 위해 onClick={() => setActive(tab.content)} 다음과 같은 형식으로 변경하니 onClick 할 때마다 호출할 수 있게 되었습니다.

#### 자세한 실행 방법

재사용이 가능한 컴포넌트로 구현하기 위해 tab name만 Tab.js에 넣고 tab content는 변경해서 쓸 가능성이 높아 App.js에 넣었습니다. active에는 tab에 들어갈 content을 담고 있는데, button을 onClick할 때 active된 tab의 content를 담아 보여줍니다.

## Tag

#### 구현한 방법과 이유에 대한 간략한 내용

input을 form으로 감싸 onSubmit할 때 tags에 추가되도록 했습니다.

#### 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)

처음 구현했을 때는 input을 form으로 감싸는 대신 div로 감싸고 input에 enter keycode를 이용해 저장하려고 했으나 한글 텍스트 저장에 있어 받침 오류 문제나 같은 태그가 두 번 저장 되는 등 근본적인 오류가 있어 form으로 변경했습니다. form으로 구현했을 때 코드 또한 훨씬 간단하게 해결할 수 있었습니다.

#### 자세한 실행 방법

tags의 상태 관리는 App.js에서 inputValue의 상태 관리는 Tag.js로 구분했습니다. onSubmit할 때 tags에 inputValue 값이 새로 추가되도록 하고, 입력된 inputValue 입력창은 공백이 되도록 했습니다. x 아이콘을 누를 때 index를 받아 해당 태그를 찾아 지우도록 만들었습니다.

## Auto Complete

#### 구현한 방법과 이유에 대한 간략한 내용

input에 검색어를 입력했을 때 value를 text에 담아 정규식을 통해 기존의 words 데이터에서 찾아 필터링 후 searched에 넣어 보여줍니다.

#### 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)

처음 구현했을 때는 isOpen 상태없이 text, searched만 useState로 관리했다. 그러다보니 text가 바뀔 때마다 useEffect가 실행되어 word를 검색하고 단어를 onClick했을 때 두 번 눌러야 searched창이 닫혔습니다. searched창의 open/close 상태를 추가하여 단어를 onClick했을 때와 onChange할 때 적용하니 해결할 수 있었습니다.

#### 자세한 실행 방법

input에 검색어를 입력하면 value는 text에 담겨 useEffect를 실행시킵니다. text에 변경이 있을 때마다 실행되며 정규식을 통해 text에 입력한 값과 words 데이터값을 비교하여 searched에 보여줍니다. searched창의 open/close 상태는 isOpen의 상태로 관리되며 onChange를 했을 때 isOpen은 true이며 searched에 결과가 있으면 searched 창이 보여지도록 했고, searched에 있는 word를 클릭하고 나서는 searched 창이 닫히도록 구현했습니다.

## Click to Edit

#### 구현한 방법과 이유에 대한 간략한 내용

input의 readOnly라는 속성을 사용하여 isEditable 상태에 따라 입력을 할 수 있는지 없는지를 결정합니다.

#### 구현하면서 어려웠던 점과 해결 방법 (Error Handling Log)

처음 구현했을 때는 readOnly라는 속성 대신 edit할 수 있는 상태에 따라서 컴포넌트를 다르게 보여주려고 했습니다. edit할 수 있는 컴포넌트와 edit되지 않는 컴포넌트를 따로 만들다 보니 코드의 양이 두배로 길어졌는데 readOnly라는 속성을 찾고 간단하게 구현할 수 있었습니다.

#### 자세한 실행 방법

isEditable이 true일 때 input에 입력을 할 수 있고, false일 때 readOnly만 가능합니다. 이를 활용해 input에 onFocus가 될 떄는 isEditable을 true로 하고, input에 onBlur가 될 떄는 isEditable을 false로 설정하면 포커스에 따라 input을 편집하고 수정할 수 있습니다.
