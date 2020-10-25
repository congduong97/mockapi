const User = require("../models/User");
const bcrypt = require("bcryptjs")

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 78300,
    });
}

module.exports = {
    async login(req, res) {
        const { password, email, islogged } = req.body;

        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(400).send({
                status: 0,
                message: 'E-mail ou senha incorreto!',
                user: {}
            });
        }

        if (!bcrypt.compareSync(password, user.password)) {
            return res.status(400).send({
                status: 0,
                message: 'E-mail ou senha incorreto!',
                user: {}
            });
        }

        const user_id = user.id;

        await User.update({
            isLogged
        }, {
            where: {
                id: user_id
            }
        });

        user.password = undefined


        const token = generateToken({ id: user.id });

        return res.status(200).send({
            status: 1,
            message: "Usuário logado com sucesso!",
            user, token
        });


    },
   async getListUsers(req,res){
       const users =await User.findAll();
       if(users === ""|| users === null){
           return res.status(200).send({message:"error"})
       }
       return res.status(200).send({users});
   },
   async addUser(req,res){
       const {name,password,email} = req.body;
       const user = await User.create({name,password,email});
       return res.status(200).send([{
           status:1,
           message:"success",
           user
       }])
   },
   async updateUser (req,res){
       const {name,password,email} = req.body;
       const {user_id}= req.params;

        const result = await User.update({name,password,email},{
           where:{id:user_id}
       });

       return res.status(200).send([{
        status:1,
        message:"success",
    }])
   },
   async deleteUser (req,res){
   
    const {user_id}= req.params;

     const result = await User.destroy({where:{id:user_id}});

    return res.status(200).send([{
     status:1,
     message:"success",
 }])
}
}