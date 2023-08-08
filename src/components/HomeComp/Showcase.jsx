import React from "react";
import computer from "../../img/computer.png";
import { Link } from "react-router-dom";

const Showcase = () => {
  return (
    <div className="flex mt-40 w-full computer:px-72 px-40 gap-20">
      {/* Showcase Paragraph and Icons */}
      <div className=" flex flex-col gap-10">
        {/* Showcase Paragraph */}
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-semibold">
            {" "}
            Get the machine that you need.
          </h1>
          <p className="text-lg text-gray-600 font-light leading-8 text-justify">
            {" "}
            By leveraging the power of the CPUs embedded within the next
            generation computers that we offer, you will be able to maximize
            your productivity and effeciency.
          </p>
          <div className="flex h-10 gap-5">
            <Link to="/shop1">
              {" "}
              <button className="myBtn font-light"> Shop Now </button>
            </Link>

            <Link to="/about">
              {" "}
              <button className="myBtn font-light"> Learn More </button>
            </Link>
          </div>
        </div>

        {/* Showcase Icons */}
        <div>
          <div className="flex flex-col gap-6">
            {" "}
            <h1 className="font-medium"> As featured in </h1>
            <div className="flex gap-8">
              <svg
                width="82"
                height="32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M49.928 11.88c-1.318 0-2.354.286-3.39.854L46.632 6 40.32 7.138v.57l.66.094c.846.19 1.13.664 1.317 1.803.19 2.277.094 14.42 0 16.412 1.696.38 3.485.665 5.276.665 4.993 0 8.008-3.132 8.008-8.064 0-3.89-2.45-6.736-5.653-6.736v-.001Zm-2.166 13.757c-.377 0-.848 0-1.13-.095-.095-1.328-.189-6.925-.095-11.858.566-.19.941-.285 1.413-.285 2.075 0 3.205 2.467 3.205 5.502 0 3.796-1.414 6.736-3.392 6.736ZM16.58 6.378H0v.854l.942.095c1.224.19 1.696.948 1.884 2.75.283 3.416.189 9.583 0 12.523-.189 1.803-.659 2.657-1.884 2.75L0 25.54v.76h10.645v-.76l-1.13-.19c-1.226-.094-1.697-.948-1.884-2.75a77.793 77.793 0 0 1-.19-5.692l2.262.095c1.413 0 2.072 1.139 2.354 2.75h.849V13.02h-.849c-.283 1.613-.941 2.75-2.354 2.75l-2.26.096c0-3.226.094-6.262.189-8.064h3.296c2.545 0 3.864 1.612 4.805 4.459l.942-.285-.094-5.598h-.001Zm5.37 5.313c4.71 0 7.065 3.226 7.065 7.495 0 4.079-2.638 7.495-7.348 7.495s-7.065-3.227-7.065-7.495c0-4.08 2.638-7.495 7.349-7.495h-.001Zm-.283.949c-2.073 0-2.638 2.846-2.638 6.546 0 3.604.942 6.545 2.826 6.545 2.166 0 2.731-2.846 2.731-6.545 0-3.605-.94-6.546-2.92-6.546h.001Zm35.138 6.64c0-3.889 2.449-7.589 7.253-7.589 3.955 0 5.84 2.942 5.84 6.83h-8.76c-.095 3.51 1.6 6.073 4.992 6.073 1.508 0 2.26-.379 3.204-1.044l.376.474c-.943 1.328-3.014 2.657-5.652 2.657-4.24-.001-7.253-3.036-7.253-7.4Zm4.332-1.802 4.428-.095c0-1.897-.283-4.743-1.883-4.743-1.601 0-2.45 2.656-2.544 4.838Zm19.974-5.028c-1.13-.475-2.638-.759-4.334-.759-3.485 0-5.653 2.087-5.653 4.554s1.6 3.51 3.864 4.27c2.355.852 3.014 1.517 3.014 2.655 0 1.139-.848 2.182-2.355 2.182-1.79 0-3.11-1.043-4.145-3.89l-.66.19.095 4.175c1.13.474 3.202.855 4.993.855 3.674 0 6.03-1.899 6.03-4.839 0-1.993-1.038-3.13-3.487-4.08-2.638-1.043-3.579-1.707-3.579-2.94 0-1.234.85-2.088 1.98-2.088 1.695 0 2.826 1.043 3.675 3.606l.659-.19-.096-3.7h-.001Zm-39.85-.379c-1.6-.948-4.427-.474-5.934 2.942l.093-3.321-6.31 1.233v.57l.66.095c.848.095 1.223.57 1.319 1.803.188 2.277.093 6.261 0 8.253-.095 1.138-.47 1.707-1.32 1.802l-.66.095v.759h8.761v-.759l-1.13-.095c-.942-.095-1.224-.665-1.32-1.802-.188-1.803-.188-5.408-.093-7.684.47-.665 2.543-1.233 4.427 0l1.508-3.89Z"
                  fill="#737373"
                />
              </svg>
              <svg
                width="181"
                height="32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M66.825 12.77v11.34h-4.157V12.77H58.48V9.14h12.54v3.63h-4.195Zm13.89 6.85h-6.632a1.77 1.77 0 0 0 1.904 1.803 5.853 5.853 0 0 0 2.911-.793l1.507 2.506a8.69 8.69 0 0 1-4.528 1.293c-3.398 0-5.241-2.405-5.241-5.852 0-3.878 2.186-5.875 5.132-5.875 2.945 0 5.002 2.041 5.002 6.215-.044.272-.044.51-.056.704h.001Zm-5.099-4.117c-.884 0-1.37.601-1.495 1.724h3.206c-.193-1.145-.578-1.723-1.711-1.723Zm12.257 8.88c-3.296 0-5.256-2.098-5.256-5.897 0-3.402 1.745-5.83 5.347-5.83A4.676 4.676 0 0 1 92.28 15.2l-2.651 2.038c-.532-.975-.895-1.452-1.733-1.452-.837 0-1.47.986-1.47 2.766s.533 2.704 1.587 2.704c.725 0 1.23-.409 1.948-1.463l2.436 1.906c-1.31 1.94-2.526 2.688-4.52 2.688l-.004-.003Zm13.142-.238V17.76c0-1.463-.488-1.849-1.28-1.849-.793 0-1.311.386-1.311 1.804v6.43h-3.851V10.071l3.85-1.543v5.115a4.348 4.348 0 0 1 2.833-.986c2.462 0 3.637 1.656 3.637 4.604v6.884h-3.878Zm13.095.239c-4.453 0-6.797-3.3-6.797-7.735 0-4.82 2.832-7.734 6.797-7.734 3.681 0 5.131 1.577 6.162 4.41l-3.761 1.471c-.544-1.39-1.053-2.268-2.424-2.268-1.734 0-2.482 1.736-2.482 4.117 0 2.382.726 4.106 2.527 4.106 1.302 0 1.858-.704 2.673-2.121l3.513 1.871a6.446 6.446 0 0 1-6.209 3.878l.001.005Zm15.701-7.247a2.411 2.411 0 0 0-1.79-.942c-.94 0-1.517.453-1.517 1.826v6.124h-3.852V12.93h3.852v.816a3.394 3.394 0 0 1 4.213-.578l-.906 3.97Zm9.165 7.009v-.749a4.259 4.259 0 0 1-2.81.987c-2.462 0-3.636-1.656-3.636-4.617v-6.839h3.863v6.35c0 1.453.498 1.838 1.291 1.838.793 0 1.28-.385 1.28-1.792v-6.396h3.874v11.25l-3.862-.033Zm13.095 0V17.76c0-1.463-.499-1.849-1.28-1.849-.782 0-1.311.386-1.311 1.804v6.43h-3.851V12.93h3.851v.749a4.349 4.349 0 0 1 2.833-.987c2.461 0 3.636 1.656 3.636 4.604v6.884l-3.878-.033Zm11.385.238c-3.296 0-5.268-2.098-5.268-5.897 0-3.403 1.756-5.83 5.347-5.83a4.714 4.714 0 0 1 4.327 2.54l-2.65 2.007c-.545-.975-.907-1.452-1.734-1.452s-1.484.987-1.484 2.767c0 1.78.533 2.703 1.586 2.703.725 0 1.246-.408 1.949-1.463l2.435 1.905c-1.302 1.973-2.526 2.722-4.509 2.722l.001-.003v.001Zm13.13-.238V17.76c0-1.463-.488-1.849-1.281-1.849-.792 0-1.302.386-1.302 1.804v6.43h-3.851V10.071l3.851-1.543v5.115a4.296 4.296 0 0 1 2.821-.986c2.47 0 3.637 1.656 3.637 4.604v6.884h-3.875ZM0 3v8.54h8.519v17.066h8.53V11.539h8.518V3H0Zm34.096 17.067V11.54h-8.53v17.067h25.578v-8.539H34.096Zm0-17.066h17.048v8.538H34.096V3.001Z"
                  fill="#737373"
                />
              </svg>
              <svg
                width="121"
                height="32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M101.512 7.74v16.645h8.198c2.291 0 3.617-.362 4.582-1.207 1.206-1.085 1.808-3.015 1.808-7.116 0-4.102-.602-6.031-1.808-7.117-.965-.844-2.291-1.206-4.582-1.206h-8.198Zm11.213 8.322c0 3.618-.241 4.463-.965 4.945-.482.362-1.085.482-2.29.482h-4.582V10.513h4.582c1.205 0 1.808 0 2.29.483.724.603.965 1.447.965 5.066Zm7.595 12.002H96.268V4h24.052v24.064Zm-43.703-17.55V7.739h14.226v5.308h-3.015v-2.534h-5.787v3.981h4.582v2.654H82.04v4.463h5.909v-2.895h3.013v5.669H76.618V21.61h2.29V10.513h-2.29Zm-12.9 9.528c0 1.81.12 3.136.36 4.222h3.257c-.122-.844-.241-2.412-.241-4.463-.122-2.412-.845-2.774-2.533-3.136 1.929-.362 2.774-1.206 2.774-4.222 0-2.412-.363-3.377-1.086-3.98-.482-.482-1.325-.724-2.653-.724H53.468v16.646h3.376V17.87h4.703c.965 0 1.325.121 1.688.362s.482.604.482 1.81Zm-6.873-4.825v-4.583h5.426c.724 0 .965.12 1.084.241.241.241.483.603.483 2.05 0 1.448-.242 1.93-.483 2.172-.119.12-.36.24-1.084.24l-5.426-.12Zm15.312 12.847H48.044V4h24.052v24.064h.06Zm-30.38-6.453v2.774H30.32V21.61h4.099V10.513h-4.1V7.74h11.454v2.775h-4.1V21.61h4.101ZM22.423 7.739H19.29L17 20.887 14.346 8.704c-.12-.844-.482-.965-1.206-.965h-1.688c-.723 0-1.085.241-1.205.965L7.595 20.887 5.305 7.739H1.929l3.255 15.802c.12.723.362.844 1.206.844h2.29c.724 0 .965-.12 1.207-.845l2.532-11.458L14.95 23.54c.12.723.361.844 1.205.844h2.17c.724 0 1.085-.12 1.206-.845l2.894-15.8h-.002Zm1.688 20.325H0V4h24.052v24.064h.06Z"
                  fill="#737373"
                />
              </svg>
              <svg
                width="68"
                height="32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.155 15.807c0 5.795 4.715 10.51 10.51 10.51h9.817c.617 0 1.095-.586 1.095-1.09V5.966a2.21 2.21 0 0 1 2.206-2.207c.78 0 1.508.414 1.897 1.08a91573.874 91573.874 0 0 1 12.332 21.263.918.918 0 0 0 1.701-.476V5.968c0-1.217.99-2.207 2.206-2.207.78 0 1.508.414 1.897 1.08.05.084 3.02 5.208 6.164 10.634l6.16 10.63a.918.918 0 0 0 1.7-.476V.138h-3.87V15.31S51.96 3.243 51.734 2.855C50.709 1.105 48.768 0 46.703 0a5.861 5.861 0 0 0-5.86 5.86v9.45s-7.01-12.067-7.238-12.455C32.582 1.105 30.641 0 28.575 0a5.861 5.861 0 0 0-5.86 5.86V21.39c.003.565-.422 1.057-1.04 1.059h-5.968a6.64 6.64 0 0 1 0-13.282h4.998V5.297h-5.04c-5.795 0-10.51 4.715-10.51 10.51Z"
                  fill="#737373"
                />
                <path
                  d="M64.13.137v25.49c0 1.217-.989 2.207-2.206 2.207-.78 0-1.508-.414-1.897-1.08-.05-.084-3.02-5.209-6.163-10.634l-6.16-10.63a.918.918 0 0 0-1.7.475v19.662c-.001 1.217-.99 2.207-2.208 2.207-.78 0-1.507-.414-1.897-1.08L35.732 16.12 29.567 5.49a.917.917 0 0 0-1.7.475v19.26c0 1.269-1.115 2.381-2.385 2.381h-9.816c-6.507 0-11.8-5.293-11.8-11.8 0-6.506 5.293-11.8 11.8-11.8h5.04V.136H15.67C7.016.137 0 7.153 0 15.807c0 8.655 7.016 15.67 15.67 15.67h9.911c3.754.002 6.169-2.198 6.164-6.255v-8.938s7.06 12.153 7.238 12.456a5.86 5.86 0 0 0 10.89-3.006v-9.45s7.01 12.068 7.238 12.456c1.023 1.75 2.964 2.855 5.03 2.855A5.86 5.86 0 0 0 68 25.734V.136h-3.87Z"
                  fill="#737373"
                />
                <path
                  d="M3.865 15.807c0 6.507 5.294 11.8 11.8 11.8h9.817c1.27 0 2.384-1.112 2.384-2.38V5.966a.917.917 0 0 1 1.7-.475c.05.084 3.159 5.445 6.165 10.629L41.9 26.755a2.202 2.202 0 0 0 1.897 1.08 2.21 2.21 0 0 0 2.207-2.207V5.967a.917.917 0 0 1 1.7-.475l6.16 10.629 6.163 10.634a2.201 2.201 0 0 0 1.897 1.08c1.218 0 2.207-.99 2.207-2.207V.138h-1.29v25.49a.918.918 0 0 1-1.7.475l-6.16-10.629c-3.145-5.426-6.114-10.55-6.164-10.634a2.201 2.201 0 0 0-1.897-1.08 2.21 2.21 0 0 0-2.206 2.207v19.66a.918.918 0 0 1-1.701.476A344293.41 344293.41 0 0 1 30.68 4.84a2.201 2.201 0 0 0-1.897-1.08 2.21 2.21 0 0 0-2.207 2.207v19.26c0 .504-.478 1.09-1.094 1.09h-9.817c-5.795 0-10.51-4.715-10.51-10.51s4.715-10.51 10.51-10.51h5.04v-1.29h-5.04c-6.506 0-11.8 5.294-11.8 11.8Z"
                  fill="#fff"
                />
              </svg>
            </div>
            <div className="flex gap-8">
              <svg
                width="83"
                height="32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 15.531v11.531h24.771V4H0v11.531Zm29.042 0v11.531h24.771V4H29.041v11.531Zm29.041 0v11.531h24.771V4H58.083v11.531ZM14.807 7.817c.979.444 1.988 1.197 2.242 1.67.254.475.461 1.43.461 2.125 0 .694-.364 1.713-.81 2.263l-.81 1 1.548 1.34c1.307 1.13 1.548 1.608 1.548 3.079 0 1.25-.29 2.049-1.026 2.834-.565.6-1.714 1.283-2.553 1.516-.84.233-3.208.425-5.264.426l-3.737.003V6.99l3.31.009c2.32.006 3.843.251 5.09.818Zm28.763-.134c1.045.418 1.982 1.173 2.358 1.9.343.665.624 1.677.624 2.25 0 .572-.365 1.492-.81 2.042-.81 1-.81 1 .68 2.29 1.18 1.02 1.5 1.621 1.535 2.888.028 1-.281 2.041-.827 2.776-.48.647-1.526 1.406-2.326 1.686s-3.233.52-5.406.534l-3.95.024V6.99h3.194c1.952 0 3.87.27 4.928.693Zm32.237-.116c1.566.47 1.72.65 1.844 2.148.1 1.222-.007 1.577-.427 1.402-.31-.128-1.59-.551-2.846-.94-1.556-.484-2.896-.618-4.206-.421-1.325.198-2.407.732-3.482 1.717-1.464 1.342-1.56 1.588-1.56 3.997 0 2.26.151 2.725 1.257 3.88.692.721 1.94 1.501 2.776 1.734.836.232 2.096.418 2.8.414.705-.004 2.387-.463 3.738-1.018l2.455-1.01v1.592c0 1.318-.202 1.688-1.174 2.148-.646.306-2.667.65-4.492.765-2.484.156-3.79.027-5.204-.512-1.038-.397-2.562-1.468-3.387-2.38-.824-.913-1.715-2.46-1.978-3.44-.264-.98-.36-2.496-.211-3.37.148-.874.624-2.175 1.06-2.892.436-.717 1.434-1.781 2.217-2.366.783-.584 2.001-1.264 2.706-1.51.704-.246 2.434-.448 3.844-.449 1.409 0 3.33.23 4.27.511ZM9.48 12.007l.13 2.03 1.685-.057c1.182-.039 1.915-.34 2.456-1.008.424-.523.77-1.11.77-1.301 0-.192-.301-.651-.67-1.02-.411-.411-1.415-.672-2.586-.672H9.349l.13 2.029Zm29.042 0 .13 2.03 1.594-.048c.876-.027 1.886-.29 2.242-.587.357-.296.648-.956.648-1.468 0-.511-.23-1.16-.512-1.442-.282-.282-1.35-.513-2.372-.513h-1.86l.13 2.029ZM9.48 19.056l.128 2.242 2.45-.05c1.347-.026 2.74-.29 3.096-.585.356-.296.647-.983.647-1.529 0-.545-.427-1.29-.95-1.655-.57-.4-1.855-.666-3.225-.666H9.351l.13 2.243Zm29.041 0c.123 2.136.189 2.249 1.403 2.387.7.08 1.995-.072 2.878-.337 1.184-.354 1.68-.776 1.887-1.604.217-.864.06-1.305-.683-1.907-.672-.543-1.674-.782-3.29-.782h-2.324l.13 2.243Z"
                  fill="#737373"
                />
              </svg>
              <svg
                width="101"
                height="32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.072 1C6.675 1 0 7.855 0 16.205c0 8.44 6.676 15.297 15.072 15.297 8.44 0 15.026-6.855 15.026-15.295C30.099 7.857 23.51 1 15.072 1Zm0 6.454c6.855 0 11.876 4.353 13.998 8.753-2.122 4.467-7.143 8.841-13.998 8.841-6.9 0-11.881-4.375-14.002-8.84 2.12-4.4 7.104-8.751 14.002-8.751v-.003Zm0 .692c-4.466 0-8.107 3.614-8.107 8.059a8.092 8.092 0 0 0 8.107 8.106c4.465 0 8.058-3.595 8.058-8.104a8.055 8.055 0 0 0-8.058-8.061ZM44.506 2.81c-7.883 0-13.376 5.983-13.376 13.261v.088c0 7.368 5.606 13.198 13.177 13.198 4.934 0 7.882-1.765 10.517-4.601L51.23 21.14c-2.01 1.83-3.822 3.016-6.747 3.016-4.398 0-7.457-3.689-7.457-8.086v-.066c0-4.399 3.126-7.995 7.457-7.995 2.568 0 4.578 1.094 6.566 2.904l3.595-4.155c-2.389-2.344-5.291-3.95-10.137-3.95ZM56.951 3.254v25.653h12.213c5.782 0 9.6-2.341 9.6-7.029v-.09c0-3.438-1.829-5.16-4.801-6.297 1.832-1.026 3.372-2.633 3.372-5.536V9.89c0-1.767-.581-3.195-1.765-4.378-1.472-1.45-3.772-2.257-6.698-2.257h-11.92Zm5.49 4.934h5.584c2.39 0 3.705.96 3.705 2.635v.09c0 1.898-1.585 2.702-4.085 2.702l-5.203.002V8.188Zm0 10.119h6.545c2.878 0 4.173 1.073 4.173 2.792v.087c0 1.898-1.517 2.768-3.995 2.768l-6.722.003v-5.65ZM89.833 2.876c-5.224 0-8.974 3.08-8.974 7.745v.069c0 5.093 3.347 6.523 8.506 7.84 4.287 1.115 5.179 1.829 5.179 3.258v.09c0 1.495-1.408 2.412-3.707 2.412-2.948 0-5.36-1.209-7.66-3.106L79.83 25.18c3.081 2.747 7.01 4.088 10.896 4.088v-.003c5.537 0 9.421-2.86 9.421-7.946v-.067c0-4.487-2.946-6.344-8.149-7.705-4.42-1.14-5.538-1.697-5.538-3.372v-.066c0-1.25 1.139-2.255 3.305-2.255 2.166 0 4.4.959 6.678 2.542l2.924-4.26c-2.59-2.077-5.781-3.261-9.533-3.261Z"
                  fill="#737373"
                />
              </svg>
              <svg
                width="124"
                height="32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M58.787 11.975c0 2.488-.249 10.2-.249 10.2 0 1.492.498 2.154 1.907 2.154v.663H54.89v-.663c1.409 0 2.155-.662 2.155-2.155l.498-12.602c-.415-.996-.83-1.327-1.907-1.41v-.58h4.228l4.478 11.774 4.561-11.774h3.814v.58c-1.078 0-1.658.498-1.658 1.658l.498 12.189c0 1.824.331 2.322 1.824 2.322v.662h-6.385v-.662c1.244 0 1.825-.415 1.741-2.322l-.331-10.033-3.067 8.457a31.599 31.599 0 0 0-1.162 3.649l-.994.083c-.249-.912-.912-2.57-.912-2.57l-3.484-9.62Zm-5.224 13.1c-.332-.083-.663-.083-.995-.083-.663 0-1.825.332-3.234.332-5.39 0-9.37-3.233-9.37-9.203 0-5.058 3.732-8.955 9.452-8.955 1.327 0 2.82.25 4.064.747.248-.25.33-.415.58-.663h.497c-.083.912-.414 3.897-.414 3.897h-.498c-.332-1.741-1.244-2.902-4.146-2.902-3.482 0-6.633 2.736-6.633 7.794 0 5.721 3.234 8.208 6.799 8.208 2.322 0 3.73-1.326 4.643-2.985l.58.25-1.326 3.564ZM37.89 10.816h-.58c-.083-1.576-.58-2.074-1.824-2.074h-2.405V21.76c0 2.155.415 2.57 1.825 2.57v.663h-6.219v-.663c1.41 0 1.825-.415 1.825-2.654V8.741h-2.405c-1.575 0-1.825.415-2.24 2.073h-.579l.415-3.731.414.083c.166.414.498.414 1.493.414h8.043c1.493 0 1.824 0 2.156-.497h.498l-.416 3.73v.001ZM20.314 25.406c-1.161 0-2.073-.166-2.736-.415-.663-.165-1.161-.414-1.41-.58-.331.331-.58.746-.58.746l-.498-.166.415-3.897.58.084c.332 1.824 1.575 3.15 4.146 3.15 1.99 0 3.316-1.658 3.316-3.482 0-1.492-.58-2.24-2.57-3.732l-1.742-1.16c-1.824-1.16-2.985-2.488-2.985-4.643 0-2.488 2.073-4.147 4.81-4.147 1.574 0 2.57.498 2.902.663l.58-.663.414.084-.415 3.565-.58-.083c0-1.658-.995-2.404-2.653-2.404-1.575 0-2.736.83-2.736 2.404 0 1.41 1.078 2.322 2.321 3.15l1.658 1.079c2.902 2.072 3.566 3.399 3.566 5.389 0 2.901-2.238 5.057-5.803 5.057v.001Zm-9.452-14.593H10.2c0-1.493-.663-2.073-1.99-2.073H4.48v6.55h2.404c1.243 0 1.493-.662 1.658-1.74h.58v4.643h-.58c-.165-1.244-.415-1.741-1.742-1.741H4.48v5.556c0 2.072.497 2.322 1.824 2.322v.662H0v-.662c1.575 0 1.824-.415 1.824-2.322V9.819c0-1.16-.498-1.658-1.824-1.658v-.58h8.623c1.492 0 1.824-.084 2.073-.581h.58l-.415 3.814h.001Zm89.465.995v9.95c0 2.155.496 2.57 1.823 2.57v.663h-9.783v-.663c.747 0 1.409-.25 1.409-.747 0-.332-.083-.912-.249-1.493l-.747-2.404H87.31c-.084.332-1.078 3.067-1.078 3.814 0 .663.747.83 1.243.83v.663h-4.56v-.663c.829 0 1.492-.084 2.072-1.824l4.23-13.516c-.25-.58-.581-.745-1.16-.83v-.58h3.73l4.476 14.18c.416 1.491.83 2.238 1.493 2.569.996-.331 1.245-.663 1.245-2.57V9.82c-.747-.994-.83-1.658-2.24-1.658v-.58h4.229l6.964 11.855V10.4c0-1.824-.413-2.239-1.824-2.239v-.58h9.286v.58c-.58 0-1.077.249-1.077.83 0 .414.166.828.331 1.326l2.654 5.722 2.571-5.555c.413-.746.498-1.16.498-1.576 0-.497-.334-.746-1.078-.746v-.58h4.394v.58c-1.078 0-1.743.995-2.239 2.154l-3.4 6.966v4.56c0 1.99.498 2.487 1.825 2.487v.663h-6.302v-.663c1.326 0 1.824-.496 1.824-2.487v-3.897l-3.649-7.711c-.662-1.492-.911-1.823-1.327-2.073-.828.331-1.077.912-1.077 2.239v12.769l.166 2.155-1.078.083-8.125-13.598h.001Zm-10.364-.83-2.323 7.547h4.81l-2.488-7.546ZM79.68 18.526h-1.243v3.565c0 1.824.496 2.239 1.907 2.239v.663h-6.385v-.663c1.327 0 1.825-.497 1.825-2.321V10.317c0-1.823-.498-2.155-1.825-2.155v-.58h4.809c4.643 0 7.379 1.409 7.379 5.223 0 3.98-3.316 5.721-6.467 5.721Zm-.83-9.784h-.413v8.54h.745c2.737 0 4.147-1.245 4.147-4.395 0-3.15-1.244-4.145-4.478-4.145ZM50.744 21.676c-3.15 0-5.306-2.24-5.306-5.472 0-3.068 2.24-5.472 5.306-5.472 2.986 0 5.224 2.322 5.224 5.472 0 3.067-2.322 5.472-5.224 5.472Zm0-9.95c-2.155 0-2.902 2.073-2.902 4.478 0 2.24.664 4.477 2.902 4.477 2.156 0 2.82-2.24 2.82-4.56 0-2.238-.83-4.395-2.82-4.395Zm-36.481 8.955v-.58c.83 0 .995-.248.995-.497 0-.333-.083-.581-.166-.83 0 0-.167-.664-.332-1.16h-3.234l-.331 1.078c-.083.248-.166.497-.166.828 0 .331.332.58.83.58v.581H8.624v-.58c.83 0 1.161-.248 1.492-1.16l2.488-7.463c-.083-.332-.332-.58-.83-.58v-.58h2.653l2.736 7.96c.415 1.408.83 1.823 1.492 1.823v.58h-4.393ZM13.1 12.638l-1.243 4.063h2.57l-1.326-4.063Z"
                  fill="#737373"
                />
              </svg>
              <svg
                width="142"
                height="32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.359 24.268h5.186l2.78-15.914H21.14l-1.026 5.7h-4.496l1.025-5.7h-5.186l-2.78 15.914h5.186l1.045-5.955h4.496l-1.045 5.955ZM29.264 8.335l-1.578 8.854c-.138.69-.197 1.36-.197 1.992 0 4.693 4.102 5.403 6.567 5.403 5.166 0 7.395-1.716 8.203-6.35l1.736-9.919h-5.187l-1.479 8.322c-.473 2.603-.808 3.964-2.74 3.964-1.263 0-1.874-.67-1.874-2.051 0-.533.079-1.183.237-1.992l1.498-8.243h-5.186v.02ZM71.404 24.268h5.187l.73-4.101h2.444c4.516 0 7.02-2.446 7.02-6.902 0-3.136-2.169-4.93-5.974-4.93h-6.626l-2.78 15.933Zm8.085-8.026h-1.498l.69-3.746h1.4c1.144 0 1.755.572 1.755 1.617 0 1.321-.888 2.13-2.347 2.13ZM96.862 8c-5.64 0-9.011 3.648-9.011 9.78 0 4.26 2.681 6.824 7.177 6.824 5.64 0 9.012-3.648 9.012-9.781.02-4.28-2.662-6.823-7.178-6.823Zm-1.518 12.482c-1.34 0-2.13-.966-2.13-2.583 0-.611.06-1.144.178-1.755.394-2.09 1.065-4.003 3.175-4.003 1.34 0 2.13.966 2.13 2.583 0 .612-.06 1.144-.178 1.755-.395 2.07-1.065 4.003-3.175 4.003ZM122.083 24.268h5.186l2.051-11.654h3.904l.75-4.26h-13.272l-.749 4.26h4.141l-2.011 11.654ZM113.485 14.231c-1.636-.512-2.307-.73-2.307-1.498 0-.513.335-1.124 1.321-1.124.73 0 1.341.414 1.578 1.025l4.575-1.242C118.119 9.144 116.187 8 112.854 8c-6.27 0-6.763 4.2-6.763 5.482 0 2.603 1.38 4.2 4.377 5.029.789.216 1.696.453 1.696 1.32 0 .69-.513 1.125-1.4 1.125-.808 0-1.676-.474-1.972-1.302l-4.516 1.223c.493 2.366 2.722 3.707 6.212 3.707 2.662 0 7.119-.71 7.119-5.521.019-2.406-1.341-3.984-4.122-4.832ZM5.778 24.268l2.8-15.914H0v15.914h5.778ZM136.202 8.354l-2.78 15.914H142V8.354h-5.798ZM50.186 19.575h4.358l.71-4.003h-4.358l.493-2.958h6.093l.75-4.279h-11.28l-2.78 15.933h5.186l.828-4.693ZM63.773 19.575h4.378l.71-4.003h-4.358l.493-2.958h6.093l.75-4.279h-11.28l-2.78 15.933h5.185l.809-4.693Z"
                  fill="#737373"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Showcase Img */}
      <div className="flex justify-center items-center">
        <img src={computer} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Showcase;
