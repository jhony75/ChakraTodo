import { Button, HStack, Input, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { nanoid } from 'nanoid';

function AddTodo(props) {
  const toast = useToast();

  function handleSubmit(e) {
    e.preventDefault();

    if (!content) {
      toast({
        title: 'No content',
        status: 'error',
        duration: '2000',
        isCloseable: true,
      });
      return;
    }

    const todo = { id: nanoid(), body: content };

    props.addTodo(todo);

    setContent('');
  }

  const [content, setContent] = useState('');

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input
          variant="filled"
          placeholder="Add a todo"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme="pink" px="8" type="submit">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
}

export { AddTodo };
