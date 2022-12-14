# 그룹바이 인턴십 - 버즈앤비 사전과제
* 목표: 원화 (KRW) <> 미화(USD) 의 환율정보를 CRUD하는 Graphql API Server 구현
* 기본 사용 기술: `node.js`, `graphql`, `mongodb`
    * 추가 사용 기술: `express`, `express-graphql`, `apollo-server-express`, `mongoose`, `dotenv`, `yarn`
    * 쿼리를 시각적으로 확인하며 원활하게 개발하기 위해 apollo-server-express 라이브러리를 사용했습니다.
    * mongoDB를 간편하게 연결하기 위해 mongoose 라이브러리를 사용했습니다.

## 개발 환경
`Windows_NT x64 10.0.19044`   
`VSCode 1.74.0`   
`Node.js 16.14.2`

## 실행 방법
1. 사전 과제 레포지토리를 클론해 주세요.
```sh
git clone https://github.com/yeoooon/groupby-pre-assignment.git
```
2. 실행에 필요한 패키지를 설치해 주세요.
```sh
npm i
# or
yarn install
```
3. 이메일에 첨부한 환경 변수로 .env 파일을 생성하여 MongoDB를 연결해 주세요.
```env
# .env
MONGODB_URL = "url"
```
4. 테스트하고자 하는 환경을 선택하여 실행해 주세요.
```sh
# express

node index.js
# or
npm start
# or
yarn start
```

```sh
# express + apollo-server

node app.js
# or
npm run dev
# or
yarn dev
```
## 구현 과정 및 트러블 슈팅

1. GraphQL 스키마 생성 (buildSchema vs GraphQLSchema)

GraphQL은 처음 써 보는 기술이라 가장 먼저 스키마를 작성하는 법부터 찾아보았습니다.

스키마를 작성하는 방법은 '**buildSchema**'와 '**GraphQLSchema**' 두 가지가 있었습니다.

둘은 똑같이 GraphQLSchema 객체를 리턴하지만, 스키마를 정의하는 방식에 차이가 있습니다.   

  |buildSchema|GraphQLSchema|   
  |:------:|:---:|   
  |Schema Definition Language|GraphQLSchema & GraphQLObjectType|   

사전 과제에서 주어진 스키마의 형태가 SDL이었기 때문에, 저는 buildSchema를 통해 스키마를 생성했습니다.   
> [출처: How to Build Schema in GraphQL (medium)](https://elfi-y.medium.com/how-to-build-schema-in-graphql-bb0a914a82ad)

2. GraphQL directive

ExchangeInfo 타입을 정의하면서 다음과 같은 에러가 발생했습니다.
```
Error: Unknown directive "key".
```
directive에 대한 이해가 부족해 일어난 에러였고, @key directive를 정의해 주어 에러를 해결했습니다.

GraphQL에서 기본적으로 제공하는 directive는 스키마에서 사용할 수 있는 `@deprecated`, 리졸버 호출 시 사용할 수 있는 `@skip`, `@include`가 있습니다.

그 외에 제가 사용한 '@key'처럼 사용자가 정의하여 사용할 수 있는 custom directive가 있습니다.

[출처: Apollo GraphQL DOCS - Directives](https://www.apollographql.com/docs/apollo-server/schema/directives/#custom-directives)

## 추가적으로 궁금한 점
1. 저는 MongoDB 연결을 위한 .env 파일을 과제 제출 이메일에 별도로 첨부하였는데, 테스트하는 입장에서는 직접 .env 파일을 생성하는 것이 번거롭지 않을까 하는 생각이 들었습니다.   
보통 public에 공개되면 안 되는 환경 변수는 어떻게 전달하는지 여쭙고 싶습니다.

## 구현된 부분
   
- [x] 환율 조회   
- [x] 환율 업데이트   
- [x] 환율 삭제   

(!) 현재 데이터베이스는 비어 있는 상태입니다.
