<script>
  import Avatar from '$components/common/Avatar.svelte'
  import Button from '$components/common/Button.svelte'
  import TextField from '$components/common/form/TextField.svelte'
  import Checkbox from '$components/common/form/Checkbox.svelte'
  import PeopleIcon from '$components/icons/PeopleIcon.svelte'
  import Contact from '$components/contacts/Contact.svelte'
  import Message from '$components/common/Message.svelte'
  import Status from '$components/common/Status.svelte'
  import Modal from '$components/common/Modal.svelte'

  let fullName = ''
  let rememberMe = false
  let showModal = false
</script>

<div
  class="w-full h-full p-4 re-scrollbar flex flex-col space-y-4 py-4 overflow-auto"
>
  <h1 class="text-3xl text-gray-800 font-bold text-center mb-4">
    Resplice Component Showcase
  </h1>
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
    <Contact
      contact={{
        uuid: 'darth_revan',
        name: 'Darth Revan',
        tags: ['Dark Side', 'Sith Lord']
      }}
    />
  </div>

  <div class="mb-4 flex flex-col space-y-4">
    <h1 class="text-xl text-gray-800 font-bold mb-2 text-center">Splice</h1>
    <Message
      message={{
        uuid: 'message_1',
        contact_uuid: 'han_solo',
        contact_name: 'Han Solo',
        timestamp: '2021-02-22T15:24:00',
        content: "Hey, what's up??"
      }}
    />
    <Message
      message={{
        uuid: 'message_2',
        contact_uuid: 'bastilla_shan',
        contact_name: 'Bastilla Shan',
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
</div>
