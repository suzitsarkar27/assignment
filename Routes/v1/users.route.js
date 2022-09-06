const express = require('express');
const usersController = require('../../controller/users.controller');

const router = express.Router()

// router.get('/', (req,res) =>{
//     res.send('user found with id')
// })
// router.post('/', (req,res) =>{
//     res.send('user added')
// });

router
  .route("/")
   /**
   * @api {get} /users All users
   * @apiDescription Get all the users
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the users.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(usersController.getAllUsers)
   /**
   * @api {get} /users All users
   * @apiDescription Get all the users
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the users.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .post(usersController.saveUser);

  router.route("/:id")
      .get( usersController.getUserDetails)
      .patch(usersController.updateUser)
      .delete(usersController.deleteUser)

module.exports = router;

