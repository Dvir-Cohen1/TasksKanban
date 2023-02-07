import User from "../models/User.model.js";
import { SELECTED_USERS_FIELDS } from "../constants/user.constants.js";
import { NotFoundError, ServerError } from "../errors/Errors.js";

/**
 * @param  {} req
 * @param  {} res
 * @param  {} next
 *
 * @returns [Array] of users objects
 */
export async function getAllUsers(req, res, next) {
  try {
    const users = await User.find().select(SELECTED_USERS_FIELDS);
    if (!users) return next(new NotFoundError("No Users Found!"));
    res.status(200).json(users);
  } catch (error) {
    return next(new ServerError(error));
  }
}
