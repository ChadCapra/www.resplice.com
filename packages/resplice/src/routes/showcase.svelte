<script lang="ts">
  import AttributeItem from '$lib/attributes/AttributeItem.svelte'
  import Avatar from '$lib/common/Avatar.svelte'
  import Button from '$lib/common/Button.svelte'
  import TextField from '$lib/common/form/TextField.svelte'
  import Checkbox from '$lib/common/form/Checkbox.svelte'
  import PeopleIcon from '$lib/icons/PeopleIcon.svelte'
  import ContactItem from '$lib/contacts/ContactItem.svelte'
  import ChatMessage from '$lib/common/ChatMessage.svelte'
  import Status from '$lib/common/Status.svelte'
  import MessageField from '$lib/common/MessageField.svelte'
  import Modal from '$lib/common/Modal.svelte'

  let fullName = ''
  let rememberMe = false
  let showModal = false
</script>

<svelte:head>
  <title>Resplice Showcase</title>
</svelte:head>

<div
  class="w-full h-full p-4 re-scrollbar flex flex-col space-y-4 py-4 overflow-auto"
>
  <h1 class="text-3xl text-gray-800 font-bold text-center mb-4">
    Resplice Component Showcase
  </h1>
  <div class="mb-4 flex flex-col items-center space-y-2">
    <h1 class="text-xl text-gray-800 font-bold mb-2">Attributes</h1>
    <AttributeItem
      attribute={{
        type: 'phone',
        name: 'Phone',
        value: ['5552345532']
      }}
    />
    <AttributeItem
      attribute={{
        type: 'social',
        name: 'Instagram',
        value: ['bshan145']
      }}
    />
    <AttributeItem
      attribute={{
        type: 'social',
        name: 'Twitter',
        value: ['reallylonghandlethatshouldoverflowthecardandshowellipsis']
      }}
    />
  </div>
  <div class="mb-4 flex flex-col items-center space-y-2">
    <h1 class="text-xl text-gray-800 font-bold mb-2">Avatars</h1>
    <div class="flex items-center space-x-2">
      <Avatar uuid="han_solo" size="sm" />
      <Avatar uuid="bastilla_shan" size="md" />
      <Avatar uuid="darth_vader" size="lg" />
      <div class="relative">
        <Avatar uuid="resplice" size="lg" />
        <Status isActive />
      </div>
      <Avatar uuid="darth_revan" size="xl" />
    </div>
  </div>

  <div class="mb-4 flex flex-col items-center space-y-2">
    <h1 class="text-xl text-gray-800 font-bold mb-2">Buttons</h1>
    <Button />
    <Button on:click={() => console.log('Button Clicked')}>Continue</Button>
    <Button isLoading>Continue</Button>
  </div>

  <div class="mb-4 flex flex-col items-center space-y-2">
    <h1 class="text-xl text-gray-800 font-bold mb-2">Forms</h1>
    <TextField
      name="full_name"
      label="Full Name"
      value={fullName}
      error="Some Error"
    />
    <TextField
      name="full_name_icon"
      label="Full Name"
      value={fullName}
      Icon={PeopleIcon}
    />
    <Checkbox name="remember-me" label="Remember Me" isChecked={rememberMe} />
  </div>

  <div class="mb-4 flex flex-col items-center space-y-2">
    <h1 class="text-xl text-gray-800 font-bold mb-2">Contacts</h1>
    <ContactItem
      contact={{
        uuid: 'darth_revan',
        name: 'Darth Revan',
        tags: ['Dark Side', 'Sith Lord']
      }}
    />
  </div>

  <div class="mb-4 flex flex-col space-y-4">
    <h1 class="text-xl text-gray-800 font-bold mb-2 text-center">Splice</h1>
    <ChatMessage
      message={{
        uuid: 'message_1',
        entity_uuid: 'han_solo',
        entity_name: 'Han Solo',
        timestamp: '2021-02-22T15:24:00',
        content: "Hey, what's up??"
      }}
    />
    <ChatMessage
      message={{
        uuid: 'message_2',
        entity_uuid: 'bastilla_shan',
        entity_name: 'Bastilla Shan',
        timestamp: '2021-02-22T15:30:00',
        content:
          'I am preparing for my council meeting this afternoon. I will be at the main station in the afternoon, want to grab a drink?'
      }}
    />
  </div>

  <div class="mb-4 flex flex-col items-center space-y-2">
    <h1 class="text-xl text-gray-800 font-bold mb-2">Modal</h1>
    <Button on:click={() => (showModal = true)}>Open Modal</Button>
    {#if showModal}
      <Modal on:close={() => (showModal = false)}>
        <div class="w-full">Modal content here</div>
      </Modal>
    {/if}
  </div>

  <div class="mb-4 flex flex-col items-center space-y-2 bg-gray-300 max-h-full">
    <div>
      <ChatMessage
        message={{
          uuid: 'message_1',
          entity_uuid: 'han_solo',
          entity_name: 'Han Solo',
          timestamp: '2021-02-22T15:24:00',
          content: "Hey, what's up??"
        }}
      />
      <ChatMessage
        message={{
          uuid: 'message_2',
          entity_uuid: 'bastilla_shan',
          entity_name: 'Bastilla Shan',
          timestamp: '2021-02-22T15:30:00',
          content:
            'I am preparing for my council meeting this afternoon. I will be at the main station in the afternoon, want to grab a drink?'
        }}
      />
    </div>
    <MessageField />
  </div>
</div>
