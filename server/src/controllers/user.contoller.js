import User from "../models/User.model.js";
import { SELECTED_USERS_FIELDS } from "../constants/user.constants.js";
import {
  BadRequestError,
  NotFoundError,
  ServerError,
} from "../errors/Errors.js";

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

export async function getUser(req, res, next) {
  try {
    const { userId } = req.body;
    if (!userId) return next(new BadRequestError());

    const user = await User.findOne({ _id: userId }).select(SELECTED_USERS_FIELDS);
    if (!user) return next(new NotFoundError("User not found!"));
    res.status(200).json(user);
  } catch (error) {
    return next(new ServerError());
  }
}
export async function deleteUser(req, res, next) {
  try {
    const { id } = req.body;
    if (!id) return next(new BadRequestError());
    console.log(id, req.userId);
    if (req.userId === id) {
      return next(
        new BadRequestError("Cannot delete the user you are logged to.")
      );
    }

    const user = await User.findByIdAndDelete(id);
    if (!user) return next(new NotFoundError("No Users Found!"));
    res
      .status(200)
      .send({ error: false, message: `User: ${user.email} Deleted` });
  } catch (error) {
    return next(new ServerError());
  }
}
