"use client"

export default function SettingsPage() {
    return (
        <div>
            <h1>Settings</h1>
        </div>
    );
}

// import { useState } from 'react';
// import {
//     Box,
//     Container,
//     Tabs,
//     TabList,
//     TabPanels,
//     Tab,
//     TabPanel,
//     Stack,
//     Heading,
//     FormControl,
//     FormLabel,  
//     Input,
//     Select,
//     Switch,
//     Button,
//     Avatar,
//     VStack,
//     useToast,
// } from '@chakra-ui/react';

// export default function SettingsPage() {
//     const [activeTab, setActiveTab] = useState(0);
//     const toast = useToast();

//     const handleSave = () => {
//         toast({
//             title: 'Settings saved',
//             status: 'success',
//             duration: 3000,
//         });
//     };

//     return (
//         <Container maxW="container.xl" py={8}>
//             <Heading mb={6}>Settings</Heading>
//             <Tabs isFitted variant="enclosed" index={activeTab} onChange={setActiveTab}>
//                 <TabList mb="1em">
//                     <Tab>Account</Tab>
//                     <Tab>Security</Tab>
//                     <Tab>Privacy</Tab>
//                     <Tab>Notifications</Tab>
//                     <Tab>Accessibility</Tab>
//                 </TabList>

//                 <TabPanels>
//                     {/* Account Settings Panel */}
//                     <TabPanel>
//                         <Stack spacing={6}>
//                             <Heading size="md">Profile Information</Heading>
//                             <VStack spacing={4} align="start">
//                                 <Avatar size="xl" />
//                                 <Button colorScheme="blue" size="sm">Upload Photo</Button>
                                
//                                 <FormControl>
//                                     <FormLabel>Full Name</FormLabel>
//                                     <Input placeholder="Enter your full name" />
//                                 </FormControl>

//                                 <FormControl>
//                                     <FormLabel>Email</FormLabel>
//                                     <Input type="email" placeholder="Enter your email" />
//                                 </FormControl>

//                                 <FormControl>
//                                     <FormLabel>Contact Number</FormLabel>
//                                     <Input placeholder="Enter your contact number" />
//                                 </FormControl>

//                                 <FormControl>
//                                     <FormLabel>Date of Birth</FormLabel>
//                                     <Input type="date" />
//                                 </FormControl>

//                                 <FormControl>
//                                     <FormLabel>Gender</FormLabel>
//                                     <Select placeholder="Select gender">
//                                         <option value="male">Male</option>
//                                         <option value="female">Female</option>
//                                         <option value="other">Other</option>
//                                     </Select>
//                                 </FormControl>
//                             </VStack>
//                         </Stack>
//                     </TabPanel>

//                     {/* Security Settings Panel */}
//                     <TabPanel>
//                         <Stack spacing={6}>
//                             <Heading size="md">Security Settings</Heading>
//                             <VStack spacing={4} align="start">
//                                 <FormControl display="flex" alignItems="center">
//                                     <FormLabel mb="0">Enable Two-Factor Authentication</FormLabel>
//                                     <Switch />
//                                 </FormControl>

//                                 <FormControl display="flex" alignItems="center">
//                                     <FormLabel mb="0">Biometric Authentication</FormLabel>
//                                     <Switch />
//                                 </FormControl>

//                                 <FormControl>
//                                     <FormLabel>Current Password</FormLabel>
//                                     <Input type="password" />
//                                 </FormControl>

//                                 <FormControl>
//                                     <FormLabel>New Password</FormLabel>
//                                     <Input type="password" />
//                                 </FormControl>
//                             </VStack>
//                         </Stack>
//                     </TabPanel>

//                     {/* Privacy Settings Panel */}
//                     <TabPanel>
//                         <Stack spacing={6}>
//                             <Heading size="md">Privacy Settings</Heading>
//                             <VStack spacing={4} align="start">
//                                 <FormControl display="flex" alignItems="center">
//                                     <FormLabel mb="0">Data Sharing with Third Parties</FormLabel>
//                                     <Switch />
//                                 </FormControl>

//                                 <FormControl display="flex" alignItems="center">
//                                     <FormLabel mb="0">Location Services</FormLabel>
//                                     <Switch />
//                                 </FormControl>

//                                 <FormControl display="flex" alignItems="center">
//                                     <FormLabel mb="0">End-to-End Encryption</FormLabel>
//                                     <Switch />
//                                 </FormControl>
//                             </VStack>
//                         </Stack>
//                     </TabPanel>

//                     {/* Notifications Panel */}
//                     <TabPanel>
//                         <Stack spacing={6}>
//                             <Heading size="md">Notification Preferences</Heading>
//                             <VStack spacing={4} align="start">
//                                 <FormControl display="flex" alignItems="center">
//                                     <FormLabel mb="0">Push Notifications</FormLabel>
//                                     <Switch />
//                                 </FormControl>

//                                 <FormControl display="flex" alignItems="center">
//                                     <FormLabel mb="0">Email Notifications</FormLabel>
//                                     <Switch />
//                                 </FormControl>

//                                 <FormControl display="flex" alignItems="center">
//                                     <FormLabel mb="0">SMS Notifications</FormLabel>
//                                     <Switch />
//                                 </FormControl>
//                             </VStack>
//                         </Stack>
//                     </TabPanel>

//                     {/* Accessibility Panel */}
//                     <TabPanel>
//                         <Stack spacing={6}>
//                             <Heading size="md">Accessibility Settings</Heading>
//                             <VStack spacing={4} align="start">
//                                 <FormControl>
//                                     <FormLabel>Language</FormLabel>
//                                     <Select placeholder="Select language">
//                                         <option value="en">English</option>
//                                         <option value="hi">Hindi</option>
//                                     </Select>
//                                 </FormControl>

//                                 <FormControl display="flex" alignItems="center">
//                                     <FormLabel mb="0">Dark Mode</FormLabel>
//                                     <Switch />
//                                 </FormControl>

//                                 <FormControl>
//                                     <FormLabel>Font Size</FormLabel>
//                                     <Select placeholder="Select font size">
//                                         <option value="small">Small</option>
//                                         <option value="medium">Medium</option>
//                                         <option value="large">Large</option>
//                                     </Select>
//                                 </FormControl>
//                             </VStack>
//                         </Stack>
//                     </TabPanel>
//                 </TabPanels>
//             </Tabs>

//             <Box mt={6}>
//                 <Button colorScheme="blue" onClick={handleSave}>
//                     Save Changes
//                 </Button>
//             </Box>
//         </Container>
//     );
// }
