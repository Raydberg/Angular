import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import *  as bcryptjs from 'bcryptjs'
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload';
import { LoginResponse } from './interfaces/login-response';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService
  ) { }
  async create(createUserDto: CreateUserDto): Promise<User> {
    // console.log(createUserDto)
    try {
      const { password, ...userData } = createUserDto;
      const newUser = new this.userModel({
        //*1.- Encriptar las contraseñas
        password: bcryptjs.hashSync(password, 10),
        ...userData
      });
      //* 2.- Guardar el usuario
      await newUser.save()
      const { password: _, ...user } = newUser.toJSON()
      return user;

    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException(`${createUserDto} all ready exist`)
      }
      throw new InternalServerErrorException("Something terrible")

    }
  }

  async register(): Promise<LoginResponse> {
    return {
      user:
        token: 'ABC'
    };
  }


  async login(loginDto: LoginDto): Promise<LoginResponse> {
    const { email, password } = loginDto;

    const user = await this.userModel.findOne({ email })
    if (!user) {
      throw new UnauthorizedException("Not valid credentials - email")
    }
    if (!bcryptjs.compareSync(password, user.password)) {
      throw new UnauthorizedException("Not valid credentials - password")
    }
    const { password: _, ...rest } = user.toJSON()
    return {
      user: rest,
      token: this.getJwtToken({ id: user.id })
    }
  }
  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
  getJwtToken(payload: JwtPayload) {
    const token = this.jwtService.sign(payload)
    return token;
  }
}