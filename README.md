# 소개

많은 토이 프로젝트에서 제작하는 todoList를 구현하였습니다.

# 기능

하루 단위 별 일정을 기록할 수 있으며, 해당 일에 해당하는 일정과 전체 일정을 모두 볼 수 있습니다.

또한 현재 시간과, 사용자가 위치해있는 지역의 날씨도 확인할 수 있습니다.

날씨를 확인하기 위해서는 브라우저의 위치확인 권한 설정이 필요합니다.

# 사용방법

![overview](/readme_assets/overview.png)

## 기본사용법
사이트의 전반적인 모습은 위의 사진과 같습니다.

달력의 날짜를 클릭하여 원하는 날을 설정할 수 있으며, 우측에 위치한 입력란에 메모의 제목과 내용을 입력한 뒤, 확인 버튼을 누르면 메모가 등록됩니다.

등록한 메모를 저장하고 싶으면 우측 하단 저장 및 새로고침 버튼을 누르면 됩니다.

&nbsp;

## 일간 / 전체 전환

우측 상단의 일간 및 전체 버튼이 있습니다.

일간 버튼을 클릭할 경우, 달력으로 클릭한 날짜에 저장된 메모가 표시되며, 전체 버튼을 클릭할 경우 그동안 저장된 전체 메모가 표시됩니다.

&nbsp;

## 일정 보기 및 삭제

우선 목록에 뜬 리스트를 확인해보면 두 개의 버튼이 있는 것을 확인할 수 있습니다.

![list](/readme_assets/list.png)

&nbsp;

메모를 등록할 때 내용도 함께 적어 저장했다면 상세 버튼을 눌렀을 때 상세 내용도 열람할 수 있습니다.

![detail](/readme_assets/detail.png)

&nbsp;

만약 메모에 적은 일을 달성했다면 각 메모 좌측에 위치한 체크박스를 눌러 완료 여부를 표시할 수 있습니다.

체크박스를 선택한 뒤 저장을 해야 변경내용이 반영됩니다.

![done](/readme_assets/done.png)

&nbsp;

메모를 지우고 싶다면 삭제 버튼을 누르면 됩니다.
상세 버튼 옆 빨간 기호가 뜨며 삭제할 대상임을 확인할 수 있게 됩니다.

이후 저장을 하면 해당 메모는 삭제됩니다.

![delete](/readme_assets/delete.png)

&nbsp;

## 배경 바꾸기

좌측 베너에 위치한 톱니바퀴 아이콘을 클릭하면 설정 창으로 이동합니다.

배경 이름이 적힌 버튼을 클릭하면 사이트의 배경을 변경할 수 있습니다.

# 유의 사항

이 프로젝트는 Google Chrome 환경에서 테스트되었으며 크로스브라우징을 지원하지 않습니다.

따라서 원활한 사용을 위해 Chrome 환경에서 실행할 것을 권장합니다.


# 환경 변수

~~~
REACT_APP_SERVER_URL

배포가 완료된 백엔드의 주소를 입력합니다.
~~~

~~~
REACT_APP_WEATHER_API_KEY

open weather의 개인별 API KEY를 입력합니다.
[open weather](https://openweathermap.org/api)
~~~

~~~
REACT_APP_GEOCODING_API_KEY

google에서 제공하는 geocoding 서비스의 API KEY를 입력합니다.
[google cloud](https://cloud.google.com/)
~~~


# node.js 버전정보
18.12.0
