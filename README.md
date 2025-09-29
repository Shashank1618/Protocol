# Protocol CLI Application

This project demonstrates a simple protocol implementation using Node.js. It consists of a TCP server and client that communicate through the command line, simulating a basic messaging protocol.

## Features

- CLI-based TCP server and client
- Custom protocol message formatting with `[SOF]` and `[EOF]` markers
- Simple connection and message transfer demonstration

## Usage

### Prerequisites

- Node.js installed on your system

### Running the Server

```bash
node server.js
```

The server listens for incoming TCP connections on port `4000`.

### Running the Client

```bash
node client.js
```

The client connects to the server at `localhost:4000` and sends a message using the protocol.

## Example Output

**Server:**
```
A TCP Connection open....
[SOF]
Hello from the client
[EOF]
```

**Client:**
```
Connection Established....
```


