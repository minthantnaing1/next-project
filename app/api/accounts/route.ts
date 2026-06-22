import Account from "@/database/account.model";
import dbConnect from "@/lib/dbConnect";
import { handleErrorResponse, handleSuccessResponse } from "@/lib/response";
import AccountSchema from "@/lib/schemas/AccountSchema";
import validateBody from "@/lib/validateBody";

export async function GET() {
  try {
    await dbConnect();
    const accounts = await Account.find();
    return handleSuccessResponse(accounts);
  } catch (e: unknown) {
    return handleErrorResponse(e);
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();

    validateBody(body, AccountSchema);
    const { provider, providerAccountId } = body;

    const existingAccount = await Account.findOne({
      provider,
      providerAccountId,
    });
    if (existingAccount) throw new Error("Account already exists");

    const newAccount = await Account.create(body);
    return handleSuccessResponse(newAccount, 201);
  } catch (e: unknown) {
    return handleErrorResponse(e);
  }
}
