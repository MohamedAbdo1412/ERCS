import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';




export default function Card_Component(props) {
  return (
    <Card shadow="sm" padding="lg" radius="sm" withBorder>
      <Card.Section component="a" href="https://mantine.dev/">
        <Image
          src={props.image}
          fit="cover"
          height={400}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{props.name}</Text>
        <Badge color={props.badge}>{props.position}</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button color={props.badge} fullWidth mt="md" radius="md" onClick={() => window.location.href = props.linkedin} >
        Linkedin
      </Button>
    </Card>
  );
}