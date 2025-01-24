<template>
    <Layout>
        <div class="flex items-center justify-between bg-white px-6 py-3 border-t border-gray-300">
            <button class="flex items-center text-gray-600 text-lg">
                <i class='bx bx-chevron-left text-2xl'></i>
                Back
            </button>
            <h1 class="text-lg font-semibold text-gray-700">SUPPLIER'S DASHBOARD</h1>
            <div class="flex items-center space-x-3">
                <button
                class="flex items-center rounded-md px-4 py-2 text-white bg-blue-600 hover:bg-blue-700"
                >
                <i class='bx bxs-pencil mr-1 text-xl' ></i>
                    Edit
                </button>
                <button
                class="flex items-centerm rounded-sm px-2 py-2 text-gray-600 bg-gray-200 hover:bg-gray-300"
                >
                <i class='bx bx-dots-horizontal-rounded text-2xl' ></i>
                </button>
            </div>
        </div>

        <div class="flex items-center p-6">
            <div class="mr-8">
                <img src="../assets/fidson.png" alt="Fidson" class="w-16 h-16 object-contain" />
            </div>
            <div class="mr-20" >
                <p class="font-bold text-lg mb-2">Supplier Info</p>
                <p class="font-medium text-gray-500 ">
                    <i class='bx bx-store-alt text-gray-400'></i> 
                    Fidson Healthcare
                </p>
                <p class="font-medium text-gray-500">
                    <i class='bx bx-current-location text-gray-400'></i>
                    4, Road 56, Lagos, Nigeria
                </p>
            </div>
            <div class="mr-20">
                <p class="font-bold text-lg mb-2">Contact Info</p>
                <p class="text-gray-500 font-medium">
                    <span 
                        class="font-medium"> 
                        <i class='bx bx-envelope text-gray-400' ></i>
                        musa@example.com
                    </span>
                </p>
                <p 
                    class="text-gray-500 font font-medium">
                    <i class='bx bx-mobile text-gray-400' ></i>
                    +234 801 234 5678
                </p>
            </div>
            <div class="">
                <p class="font-bold text-lg mb-2">Bank Info</p>
                <p class="font-medium text-gray-500">
                    <i class='bx bxs-bank text-gray-400'></i>
                    First Bank Plc
                </p>
                <p class="text-gray-500">
                    <i class='bx bx-mobile text-gray-400' ></i>
                    -----
                </p>
            </div>
        </div>
        <div class="flex justify-between w-[60%] p-6 font-medium mx-6 bg-white rounded-md mb-6">
            <div class="">
                <p class="text-gray-500 font-medium text-lg mb-3">Purchase Order
                    <span class="font-bold text-sm text-gray-700 ml-6 p-1 rounded-md bg-gray-100">40</span>
                </p>
                <div class="flex items-center justify-center space-x-2">
                </div>
                <p class="font-bold text-lg text-gray-600">₦5,250,000</p>
            </div>
            <div class="">
                <p class="text-gray-500 font-medium text-lg mb-3">Invoices
                    <span class="font-bold text-sm text-gray-700 ml-6 p-1 rounded-md bg-gray-100">20</span>
                </p>
                <div class="flex items-center justify-center space-x-2">
                </div>
                <p class="font-bold text-lg text-gray-600">₦5,250,000</p>
            </div>
            <div class="text-center">
                <p class="text-gray-500 font-medium text-lg mb-3">Payments
                    <span class="font-bold text-sm text-gray-700 ml-6 p-1 rounded-md bg-gray-100">25</span>
                </p>
                <div class="flex items-center justify-center space-x-2">
                </div>
                <p class="font-bold text-lg text-gray-600">₦5,250,000</p>
            </div>
            <div class="text-center">
                <p class="text-gray-500 font-medium text-lg mb-3">Purchase Qty

                </p>
                <p class="font-bold text-lg text-gray-600">12</p>
            </div>
            <div class="text-center">
                <p class="text-gray-500 font-medium text-lg mb-3">Returns

                </p>
                <p class="font-bold text-lg text-gray-600">0</p>
            </div>
        </div>
        <div class="border-gray-200 mx-6">
            <div class="flex space-x-4" aria-label="Tabs">
                <a
                href="#"
                class="px-4 py-2 font-medium bg-white rounded "
                >
                    Purchase Order
                </a>
                <a
                href="#"
                class="px-4 py-2 font-medium text-gray-500 "
                >
                    Invoices
                </a>
                <a
                href="#"
                class="px-4 py-2 font-medium text-gray-500 "
                >
                    Payment
                </a>
            </div>
        </div>

        <div class="flex justify-between items-center p-6 bg-white">
            <h2 class="text-gray-500 font-bold">PURCHASE ORDER</h2>
            <div class="flex items-center space-x-4">
                <div class="flex items-center rounded-md px-3 font-medium bg-gray-300 py-1">
                    <label for="page-select" class="mr-2 text-gray-700">Page</label>
                    <select id="page-select" class=" text-gray-700">
                        <option>1/6</option>
                    </select>
                </div>
                <div class="flex items-center border  text-gray-700 border-gray-400 rounded-md px-3 py-1">
                    <i class='bx bx-search' ></i>
                    <input
                        type="text"
                        placeholder="Search"
                        class=" font-medium ml-2"
                    />
                </div>
                <button class="flex items-center border rounded-md px-3 py-1  text-gray-700">
                    <i class='bx bx-filter mr-1 text-2xl'></i>
                    Filter
                </button>
                <button class="flex items-center border  rounded-md px-3 py-1 text-gray-700">
                    <i class='bx bx-sort mr-1 '></i>
                    Sort by
                </button>
                <button class="flex items-center text-gray-700">
                    <i class='bx bx-list-ul text-3xl'></i>
                </button>
                <button class="flex items-center text-gray-700">
                    <i class='bx bxs-dashboard text-2xl' ></i>
                </button>
            </div>
        </div>
        <div class="mx-6 border border-gray-300 rounded-xl p-1 mb-10">
            <table class="min-w-full table-auto">
                <!-- Table Head -->
                <thead>
                    <tr class="bg-gray-100 text-left text-gray-600 font-semibold">
                        <th class="px-4 py-2">Order No</th>
                        <th class="px-4 py-2">Supplier's Name</th>
                        <th class="px-4 py-2">Type</th>
                        <th class="px-4 py-2">Date</th>
                        <th class="px-4 py-2">Total</th>
                        <th class="px-4 py-2">Quantity</th>
                        <th class="px-4 py-2">Quantity Returned</th>
                        <th class="px-4 py-2">Status</th>
                        <th class="px-4 py-2">Action</th>
                    </tr>
                </thead>

                <!-- Table Body -->
                <tbody class="text-gray-800">
                    <!-- Table Row -->
                    <tr class="border-t border-gray-300 hover:bg-gray-50">
                        <td class="px-4 py-2">RHPO-1651244214</td>
                        <td class="px-4 py-2">Fidson Healthcare</td>
                        <td class="px-4 py-2">Trade</td>
                        <td class="px-4 py-2">5/21/2024</td>
                        <td class="px-4 py-2">₦2,055,043.00</td>
                        <td class="px-4 py-2">93</td>
                        <td class="px-4 py-2">1</td>
                        <td class="px-4 py-2">
                            <span
                                class="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded"
                            >
                                Approved
                            </span>
                        </td>
                        <td class="px-4 py-2">
                            <button class="text-gray-500 hover:text-gray-700">
                                <i class='bx bx-dots-vertical-rounded' ></i>
                            </button>
                        </td>
                    </tr>
                    <!-- Additional Rows -->
                    <tr class="border-t border-gray-300 hover:bg-gray-50">
                        <td class="px-4 py-2">RHPO-1651244211</td>
                        <td class="px-4 py-2">Fidson Healthcare</td>
                        <td class="px-4 py-2">Trade</td>
                        <td class="px-4 py-2">3/25/2024</td>
                        <td class="px-4 py-2">₦423,369.55</td>
                        <td class="px-4 py-2">120</td>
                        <td class="px-4 py-2">2</td>
                        <td class="px-4 py-2">
                            <span
                                class="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded"
                            >
                                Approved
                            </span>
                        </td>
                        <td class="px-4 py-2">
                            <button class="text-gray-500 hover:text-gray-700">
                                <i class='bx bx-dots-vertical-rounded' ></i>
                            </button>
                        </td>
                    </tr>
                    <tr class="border-t border-gray-300 hover:bg-gray-50">
                        <td class="px-4 py-2">RHPO-1651244214</td>
                        <td class="px-4 py-2">Fidson Healthcare</td>
                        <td class="px-4 py-2">Trade</td>
                        <td class="px-4 py-2">5/21/2024</td>
                        <td class="px-4 py-2">₦2,055,043.00</td>
                        <td class="px-4 py-2">93</td>
                        <td class="px-4 py-2">1</td>
                        <td class="px-4 py-2">
                            <span
                                class="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded"
                            >
                                Approved
                            </span>
                        </td>
                        <td class="px-4 py-2">
                            <button class="text-gray-500 hover:text-gray-700">
                                <i class='bx bx-dots-vertical-rounded' ></i>
                            </button>
                        </td>
                    </tr>
                    <tr class="border-t border-gray-300 hover:bg-gray-50">
                        <td class="px-4 py-2">RHPO-1651244211</td>
                        <td class="px-4 py-2">Fidson Healthcare</td>
                        <td class="px-4 py-2">Trade</td>
                        <td class="px-4 py-2">3/25/2024</td>
                        <td class="px-4 py-2">₦423,369.55</td>
                        <td class="px-4 py-2">120</td>
                        <td class="px-4 py-2">2</td>
                        <td class="px-4 py-2">
                            <span
                                class="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded"
                            >
                                Approved
                            </span>
                        </td>
                        <td class="px-4 py-2">
                            <button class="text-gray-500 hover:text-gray-700">
                                <i class='bx bx-dots-vertical-rounded' ></i>
                            </button>
                        </td>
                    </tr>
                    <tr class="border-t border-gray-300 hover:bg-gray-50">
                        <td class="px-4 py-2">RHPO-1651244214</td>
                        <td class="px-4 py-2">Fidson Healthcare</td>
                        <td class="px-4 py-2">Trade</td>
                        <td class="px-4 py-2">5/21/2024</td>
                        <td class="px-4 py-2">₦2,055,043.00</td>
                        <td class="px-4 py-2">93</td>
                        <td class="px-4 py-2">1</td>
                        <td class="px-4 py-2">
                            <span
                                class="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded"
                            >
                                Approved
                            </span>
                        </td>
                        <td class="px-4 py-2">
                            <button class="text-gray-500 hover:text-gray-700">
                                <i class='bx bx-dots-vertical-rounded' ></i>
                            </button>
                        </td>
                    </tr>
                    <tr class="border-t border-gray-300 hover:bg-gray-50">
                        <td class="px-4 py-2">RHPO-1651244211</td>
                        <td class="px-4 py-2">Fidson Healthcare</td>
                        <td class="px-4 py-2">Trade</td>
                        <td class="px-4 py-2">3/25/2024</td>
                        <td class="px-4 py-2">₦423,369.55</td>
                        <td class="px-4 py-2">120</td>
                        <td class="px-4 py-2">2</td>
                        <td class="px-4 py-2">
                            <span
                                class="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded"
                            >
                                Approved
                            </span>
                        </td>
                        <td class="px-4 py-2">
                            <button class="text-gray-500 hover:text-gray-700">
                                <i class='bx bx-dots-vertical-rounded' ></i>
                            </button>
                        </td>
                    </tr>
                    <tr class="border-t border-gray-300 hover:bg-gray-50">
                        <td class="px-4 py-2">RHPO-1651244211</td>
                        <td class="px-4 py-2">Fidson Healthcare</td>
                        <td class="px-4 py-2">Trade</td>
                        <td class="px-4 py-2">3/25/2024</td>
                        <td class="px-4 py-2">₦423,369.55</td>
                        <td class="px-4 py-2">120</td>
                        <td class="px-4 py-2">2</td>
                        <td class="px-4 py-2">
                            <span
                                class="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded"
                            >
                                Approved
                            </span>
                        </td>
                        <td class="px-4 py-2">
                            <button class="text-gray-500 hover:text-gray-700">
                                <i class='bx bx-dots-vertical-rounded' ></i>
                            </button>
                        </td>
                    </tr>
                    <tr class="border-t border-gray-300 hover:bg-gray-50">
                        <td class="px-4 py-2">RHPO-1651244211</td>
                        <td class="px-4 py-2">Fidson Healthcare</td>
                        <td class="px-4 py-2">Trade</td>
                        <td class="px-4 py-2">3/25/2024</td>
                        <td class="px-4 py-2">₦423,369.55</td>
                        <td class="px-4 py-2">120</td>
                        <td class="px-4 py-2">2</td>
                        <td class="px-4 py-2">
                            <span
                                class="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded"
                            >
                                Approved
                            </span>
                        </td>
                        <td class="px-4 py-2">
                            <button class="text-gray-500 hover:text-gray-700">
                                <i class='bx bx-dots-vertical-rounded' ></i>
                            </button>
                        </td>
                    </tr>
                    <tr class="border-t border-gray-300 hover:bg-gray-50">
                        <td class="px-4 py-2">RHPO-1651244211</td>
                        <td class="px-4 py-2">Fidson Healthcare</td>
                        <td class="px-4 py-2">Trade</td>
                        <td class="px-4 py-2">3/25/2024</td>
                        <td class="px-4 py-2">₦423,369.55</td>
                        <td class="px-4 py-2">120</td>
                        <td class="px-4 py-2">2</td>
                        <td class="px-4 py-2">
                            <span
                                class="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded"
                            >
                                Confirm
                            </span>
                        </td>
                        <td class="px-4 py-2">
                            <button class="text-gray-500 hover:text-gray-700">
                                <i class='bx bx-dots-vertical-rounded' ></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>


    </Layout>
</template>

<script>
import Layout from '../Layout/Layout.vue';

export default {
    components: { Layout },
    name: 'Supplier',
};
</script>