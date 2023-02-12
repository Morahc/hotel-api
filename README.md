# Hotel mangement API

An API powered by Express and MongoDB that stores and manages hotel rooms.

## Get Started

Clone or download this repository.

Run `npm install` to install dependencies.

Run `npm run dev` to run in development mode.

## Endpoints

### Room

- GET `/api/v1/rooms`
- GET `/api/v1/rooms/:id`
- POST `/api/v1/rooms`
- PATCH `/api/v1/rooms/:id`
- DELETE `/api/v1/rooms/:id`

### Room-types

- GET `/api/v1/rooms-types`
- POST `/api/v1/rooms-types`

## Data Schema

### Room

- name `string`
- roomType `roomType`
- price `number`

### RoomType

- name `string`