import { createServer, Model } from "miragejs";

createServer({
  models: {
    word: Model,
  },
  seeds(server) {
    server.create("word", {
      english: "butterfly",
      transcription: "[ ˈbʌtəflaɪ ]",
      russian: "бабочка",
      tags: "животные",
      tags_json: '["животные"]',
    });
    server.create("word", {
      english: "hedgehog",
      transcription: "[ ˈhedʒhɒɡ ]",
      russian: "ёж",
      tags: "животные",
      tags_json: '["животные"]',
    });
    server.create("word", {
      english: "library",
      transcription: "[ ˈlaɪbrəri ]",
      russian: "библиотека",
      tags: "город",
      tags_json: '["город"]',
    });
  },
  routes() {
    this.namespace = "api";

    this.post("/words", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);

      return schema.words.create(attrs);
    });

    this.patch("/words/:id", (schema, request) => {
      let newAttrs = JSON.parse(request.requestBody);
      let id = request.params.id;
      let word = schema.words.find(id);

      return word.update(newAttrs);
    });

    this.get("/words");
    this.get("/words/:id");
    this.del("/words/:id");
  },
});
