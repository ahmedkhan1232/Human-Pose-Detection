// app/api/login/route.ts
import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/dbConnect'; // Ensure you have your database connection setup
import User from '../../../models/User'; // Your User model
import bcrypt from 'bcrypt'; // Assuming you're using bcrypt for password hashing

// Named export for POST method
export async function POST(req: Request) {
  // Connect to the database
  await dbConnect();

  try {
    // Parse the JSON body from the request
    const { email, password } = await req.json();

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    // Compare the password with the stored hash
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    // If authentication is successful
    // Here you can set up a session or token if needed
    return NextResponse.json({ message: 'Login successful!' }, { status: 200 });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
