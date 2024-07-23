import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";

import { confirmParticipant } from "./routes/confirm-participant";
import { confirmTrip } from "./routes/confirm-trips";
import cors from "@fastify/cors";
import { createActivity } from "./routes/create-activity";
import { createInvite } from "./routes/create-invite";
import { createLink } from "./routes/create-link";
import { createTrip } from "./routes/create-trip";
import { env } from "./env";
import { errorHandler } from "./error-handler";
import fastify from "fastify";
import { getActivities } from "./routes/get-activities";
import { getLinks } from "./routes/get-links";
import { getParticipant } from "./routes/get-participant";
import { getParticipants } from "./routes/get-participants";
import { getTripsDetails } from "./routes/get-trips-details";
import { updateTrip } from "./routes/update-trip";

const app = fastify();

app.register(cors, {
  origin: "*",
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.setErrorHandler(errorHandler);

app.register(createTrip);
app.register(confirmTrip);
app.register(confirmParticipant);
app.register(createActivity);
app.register(getActivities);
app.register(createLink);
app.register(getLinks);
app.register(getParticipants);
app.register(createInvite);
app.register(updateTrip);
app.register(getTripsDetails);
app.register(getParticipant);

app.listen({ port: env.PORT }).then(() => {
  console.log("Server is running on port 3333");
});
