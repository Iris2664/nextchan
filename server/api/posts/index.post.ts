import { defineEventHandler, readBody } from 'h3';
import { Post } from '~/server/models/post.schema'; // Post モデルをインポート

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name, text, parentId } = body;

  try {
    if (!text) {
      setResponseStatus(event, 400);
      return { error: 'Text is required.' };
    }

    const newPost = new Post({ name, text, parent: parentId || undefined });
    const savedPost = await newPost.save();
    return savedPost;
  } catch (error) {
    console.error('Error saving post:', error);
    setResponseStatus(event, 500);
    return { error: error.message };
  }
});