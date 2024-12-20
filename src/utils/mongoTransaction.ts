import { ClientSession, startSession } from "mongoose";

const mongoTransaction = async (
  sessionCallback: (session: ClientSession) => Promise<any>
) => {
  const session = await startSession();
  session.startTransaction();

  try {
    const result = await sessionCallback(session);
    await session.commitTransaction();
    return result;
  } catch (error) {
    if (session.inTransaction()) {
      await session.abortTransaction();
    }
    throw error;
  } finally {
    session.endSession();
  }
};

export default mongoTransaction;
